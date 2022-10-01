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

        //    const postsX = posts[i].title.rendered;

        //    console.log(postsX);
           
            // const carImg = document.querySelector(".");

           postContainer.innerHTML += `
           <a href="blogspecific.html?id=${posts[i].id}">
           <h1>${posts[i].title.rendered}</h1>
           <div>${posts[i].content.rendered}</div>
           `;
        }    
}
// };      [your-data]._embedded['wp:featuredmedia']['0'].baseUrl
// (post._embedded['wp:featuredmedia'][0].media_details)
/* <div class="product-image" style="content:url('${posts._embedded['wp:featuredmedia'].source_url}')"></div> */

       
getPosts(baseUrl);

// const arrow = document.querySelector(".slider-arrow");

// arrow.onclick = function(event) {
//     console.log(event.target);
// };



// const imgage = document.querySelector(".carousel-container.img");

//         console.log(imgage);