const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed";

const postContainer = document.querySelector(".carousel-container");

async function getPosts(url){

    
        const response = await fetch(url);

        const posts = await response.json();
    
        for(let i=0; i < posts.length; i++){
            if (i < 4)
           console.log(posts[i].title.rendered);
        }    

        const post = posts[i];

    post.forEach(function(post){
        postContainer.innerHTML += `
        <h1>${post[i].title.rendered}</h1>
        <div>${post[i].content.rendered}</div>`;
    })
}

getPosts(baseUrl);



const arrow = document.querySelector(".slider-arrow");

arrow.onclick = function(event) {
    console.log(event.target);
};

// event.target
// js mod2 less2 video
// display:none
// display:block

// const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed";

// const postContainer = document.querySelector(".carousel-container");

// async function getPosts(url){

//     const response = await fetch(url);

//     const posts = await response.json();

//     for(let i=0; i < posts.length; i++){
//         console.log(i);
//     }    

//     posts.forEach(function(post){
//         postContainer.innerHTML += `
//         <h1>${post[i].title.rendered}</h1>
//         <div>${post[i].content.rendered}</div>`;
//     })
// }

// getPosts(baseUrl);