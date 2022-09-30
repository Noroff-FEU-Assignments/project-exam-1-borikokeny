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
}

fetchPost();

function createHtml(details) {
    specContainer.innerHTML = `
    <div><h1>${details.title.rendered}</h1>
    <div class="post-outfit">${details.content.rendered}</div></div>`;
}

// Get the modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".modal-source");
var modalImg = document.querySelector(".real-modal");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

document.addEventListener('click', function(event) {
    const ignoreClickOnMeElement = document.querySelector(".modal-container");
    const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        //Do something click is outside specified element
        function myFunction() {
            modalImg.style.display = "none";
            }

        console.log("yes");

    }
});





// const originalImg = posts[i]._embedded["wp:featuredmedia"]?.[0].source_url
// const modal = document.querySelector(".modal");
// const modalImg = document.querySelector(".modal-img");

// specContainer.innerHTML = "";


// originalImg.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// const modal = document.querySelector(".modal");
// const originalImg = document.querySelector(".modal-amg");
// const modalImg = document.querySelector(".modal-img");
// originalImg.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }