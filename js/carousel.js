const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed";

const postContainer = document.querySelector(".carousel-container");

async function getPosts(url){

    const response = await fetch(url);

    const posts = await response.json();

    posts.forEach(function(post){
        postContainer.innerHTML += `
        <h1>${post.id}</h1>
        <h1>${post.title.rendered}</h1>
        <div>${post.content.rendered}</div>`;
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