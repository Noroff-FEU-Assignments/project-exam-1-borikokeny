const specContainer = document.querySelector(".specific-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.borikokeny.one/wp-json/wp/v2/posts?_embed" + id;

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        specContainer.innerHTML = "";

        console.log(details);

        createHtml(details);
    }
    catch(error) {
        console.log(error);
        specContainer.innerHTML = message("error", error);
    }
}

fetchPost();

function createHtml(details) {
    specContainer.innerHTML = `
    <h1>${details.title.rendered}</h1>
    <div>${details.content.rendered}</div>`;
}

{/* <h1 style="content:url('${details.title.rendered}')"></h1> */}