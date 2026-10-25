//selecting popupbox popup overlay button

var popoverlay = document.querySelector(".popup-overlay");
var popbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popbox.style.display = "block";
});

//select cancel button

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

//select container,addbook,book title,book author,book description

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>
          ${bookdescriptioninput.value}
        </p>
        <button onclick="deletebook(event)">delete</button>`;
  container.append(div);
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
