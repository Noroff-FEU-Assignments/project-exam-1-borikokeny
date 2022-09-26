const baseUrl = "https://www.borikokeny.one/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".preview-container");

async function getPosts(url){

    const response = await fetch(url);

    const posts = await response.json();

    posts.forEach(function(post){
        postContainer.innerHTML += `
        <a href="blogspecific.html?id=${post.id}" class="preview-container">
        <h2>${post.title}</h2>
        <div class="post-img" style="content:url('${product.images[0].src}')"></div>
        </a>`;`
    })