const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed";

const postContainer = document.querySelector(".preview-container");

async function getPosts(url){

    const response = await fetch(url);

    const posts = await response.json();

    posts.forEach(function(post){
        postContainer.innerHTML += `
        <a href=blogspecific.html?id=>
        <h1>${post.title.rendered}</h1>
        <div>${post.content.rendered}</div></a>`;
    })
}

getPosts(baseUrl);

