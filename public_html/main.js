document.getElementById('myImg').addEventListener('click', setImg);
document.getElementById('myImg2').addEventListener('click', setImg);
document.getElementById('myImg3').addEventListener('click', setImg);
document.getElementById('myImg4').addEventListener('click', setImg);
document.getElementById('hamburger').addEventListener('click', openBlur)
document.getElementById('xOut').addEventListener('click', closeBlur)

document.getElementById('myModal').addEventListener('click', clickOut);

window.location.replace("#");

// slice off the remaining '#' in HTML5:    
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

//Call this everytime someone clicks
//About Me, Gallery, Products
//Removes anch in url
function removeHash () { 
  history.pushState("", document.title, window.location.pathname
                                                     + window.location.search);
                                                     console.log("clicked");
}
//For mobile auto-scrolling
var x = window.matchMedia("(max-width: 990px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches
    var hBtn = document.getElementById('heroBtn')
    document.getElementById('heroBtn').setAttribute("onClick", "location.href='#mobile_anchPic'");
  }
}

//Removes hash
$('#menuAbout').click(function() {
  removeHash();
});
$('#menuGall').click(function() {
  removeHash();
});
$('#menuProd').click(function() {
  removeHash();
});


function clickOut() {
    modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

var img;

function setImg() {
  img = document.getElementById("myImg");
  console.log("imgset")
}
function setImg2() {
  img = document.getElementById("myImg2");
  console.log("imgset")
}
function setImg() {
  img = document.getElementById("myImg3");
  console.log("imgset")
}
function setImg() {
  img = document.getElementById("myImg4");
  console.log("imgset")
}


$( document ).ready(function() {
  $('.menuBar').show();
});
$('#hamburger').click(function() {
  $('.navBlur').show();
    document.getElementById('blurMenu').style.display = 'flex';
    document.getElementById('hamburger').style.display = 'none';
    $('.navBlur').show();
}
)
$('.learnMore').click(function() {
  //$('.expanded').toggle();
  //$('.expanded').slideDown();
  //$('hideMoreCarat').show();
  //$('.hideMoreCarat').slideDown();
  $('.expanded').slideDown(function() {
    $('#learnMoreCarat').toggle();
    $('#hideMoreCarat').show();
  });
  //$('.hideMoreCarat').slideDown();
});

$('.hiddenMore').click(function() {
  $('#learnMoreCarat').show();
  $('.expanded').slideUp(function() {
  });
});

$("#anchAboutMe").click(function() {
$([document.documentElement, document.body]).animate({
    scrollTop: $("#elementtoScrollToID").offset().top
}, 2000);
});


function openBlur() {
  document.getElementById('xOut').style.display = 'flex';
  //document.getElementById('hamburger').style.display = 'none';
  //document.getElementById('blurMenu').style.display = 'flex';
}
function closeBlur() {
  document.getElementById('xOut').style.display = 'none';
  document.getElementById('hamburger').style.display = 'flex';
  document.getElementById('blurMenu').style.display = 'none';
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption");
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption");
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}