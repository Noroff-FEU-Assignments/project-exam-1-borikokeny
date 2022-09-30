const specContainer = document.querySelector(".specific-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.borikokeny.one/wp-json/wp/v2/posts/" + id;

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

    const img = document.querySelector(".wp-block-image img");


    
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".real-modal");

    img.addEventListener('click', function(event) {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    document.addEventListener('click', function(event) {
        const ignoreClickOnMeElement = document.querySelector(".modal-container");
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

        if (!isClickInsideElement && img!==event.target)  {
            
            modal.style.display = "none";
        }
    });


}

fetchPost();

function createHtml(details) {
    specContainer.innerHTML = `
    <div><h1>${details.title.rendered}</h1>
    <div class="post-outfit">${details.content.rendered}</div></div>`;
}
