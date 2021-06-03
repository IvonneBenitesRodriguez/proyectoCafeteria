/*var slidePosition = 1;
SlideShow(slidePosition);*/

// How to make a SlideShow of Caroussel //
//forward and Back controls

function plusSlides(n) {
    SlideShow(slidePosition += n);
}
//images controls

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace("enable", " ");
    }
    slides[slidePosition - 1].style.display = "block";
    slides[slidePosition - 1].className += "enable";
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) { slidePosition = 1 }
    slides[slidePosition - 1].style.display = "block";
    setTimeout(SlideShow, 9000);
}

// Creating a function in the delivery part for each button//
function myFunction() {
    document.getElementById('demo').innerHTML = 'Hello dear visitor! <br> We are happy you visited our site, and for it we want to give you the first delivery for free! Please be sure to be Monday 17 June at 09am to claim for your first free desert!';
}

function myFunction1() {
    document.getElementById('demo1').innerHTML = 'Hello dear visitor! <br> We are happy you visited our site, and for it we want to give you the first delivery for free! Please be sure to be Monday 17 June at 09am to claim for your first free desert!';
}

function myFunction2() {
    document.getElementById('demo2').innerHTML = 'Hello dear visitor! <br> We are happy you visited our site, and for it we want to give you the first delivery for free! Please be sure to be Monday 17 June at 09am to claim for your first free desert!';
}

//Practicando Document Create Element Js //
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

/*for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
*/
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[1];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(ul.li);
});