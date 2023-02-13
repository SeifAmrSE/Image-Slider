// get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number from slides
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide number of element
var slideNumberElement = document.getElementById("slide-number");

// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// create the main ul element
var indicatorElement = document.createElement("ul");

// set id on created ul element
indicatorElement.setAttribute("id", "indicator-ul");

// create list items based on slides count
for (var i = 1; i <= slidesCount; i++) {
  // create the li
  var indicatorItem = document.createElement("li");

  // create custom attribute
  indicatorItem.setAttribute("data-index", i);

  // set item content
  indicatorItem.appendChild(document.createTextNode(i));

  // append items to the main ul list
  indicatorElement.appendChild(indicatorItem);
}

// add the created ul element to the page
document.getElementById("indicators").appendChild(indicatorElement);

// get the new created ul
var indicatorCreatedUl = document.getElementById("indicator-ul");

// get indicator items
var indicatorBullets = Array.from(
  document.querySelectorAll("#indicator-ul li")
);

// loop through all bullets items
for (var i = 0; i < indicatorBullets.length; i++) {
  indicatorBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theCheker();
  };
}

// trigger the checker function
theCheker();

// handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide++;
    theCheker();
  }
}
// previous slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide--;
    theCheker();
  }
}

// create the checker fucntion
function theCheker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  // remove all active classes
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // set active class on current indicator item
  indicatorCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if the current slide is the first
  if (currentSlide == 1) {
    // add disabled class on previous button
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from previous button
    prevButton.classList.remove("disabled");
  }

  // check if the current slide is the last one
  if (currentSlide == slidesCount) {
    // add disabled class on next button
    nextButton.classList.add("disabled");
  } else {
    // remove disabled class from next button
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and indicators bullets
function removeAllActive() {
  // loop through images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // loop through indicator bullets
  indicatorBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
