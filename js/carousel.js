const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed";

const postContainer = document.querySelector(".carousel-container");

async function getPosts(url){

    
        const response = await fetch(url);

        const posts = await response.json();

        postContainer.innerHTML = "";

        for(let i=0; i < posts.length; i++){
            if (i > 3){
                continue
            }
           console.log(posts[i].title.rendered);

           postContainer.innerHTML += `
           <a href="blogspecific.html?id=${posts[i].id}">
           <h1>${posts[i].title.rendered}</h1>
           <div>${posts[i].content.rendered}</div>
           `;
        }    
}
       
getPosts(baseUrl);
