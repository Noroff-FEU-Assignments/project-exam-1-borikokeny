
const modal = document.querySelector(".modal");

const img = document.querySelector(".modal-source");
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
