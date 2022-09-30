// Get the modal
var modal = document.querySelector('.modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
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