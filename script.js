let buttonSwitch = document.getElementById("toggle");
buttonSwitch.addEventListener("click", swapTheme);

let body = document.getElementById("body");
let banner = document.getElementsByClassName("banner");
let bannertitle= document.getElementsByClassName("banner-title");
let page1 = document.getElementById("page1")
let page1right = document.getElementById("page1right");
let page2right = document.getElementById("page2right");
let h2 = document.getElementById("h2");

function swapTheme(){
   
    body.classList.toggle("changeColorBackground");

    let a = 0;
    while (a<banner.length){
    banner[a].classList.toggle("changeColorBackground");
    a++;
};
    let b = 0;
        while (b<bannertitle.length){
        bannertitle[b].classList.toggle("changeStyleTitre");
        b++;
    };

    
    page1right.classList.toggle("changeOrder-1");
    page2right.classList.toggle("changeOrder-1");
    body.classList.toggle("transition");
    setTimeout(() => {
        body.classList.toggle("transition");
    }, 1500);

    h2.classList.toggle("changeColor");


}

//////////////////////////////// CAROUSEL //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class Carousel {

// /**
//  * 
//  * @param {HTMLElement} element 
//  * @param {Object} options
//  * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
//  * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
//  */
//     constructor (element, options = {}) {
//         this.element = element
//         this.options = Object.assign({}, {
//             slidesToScroll: 1,
//             slidesVisible: 1
//         }, options)
//         let children = [].slice.call(element.children)
//         let root = this.createDivWithClass('carousel')
//         this.container = this.createDivWithClass('carousel__container')
//         root.appendChild(this.container)
//         this.element.appendChild(root)
//         this.items = children.map((child) => {
//            let item =  this.createDivWithClass('carousel__item')
//            item.appendChild(child)
//             this.container.appendChild(item)
//             return item
//         })
//         this.setStyle()
//     }


//     setStyle () {
//         let ratio = this.items.lenth / this.options.slidesVisible
//         this.container.style.width = (ratio * 100) + "%"
//         this.items.forEach (item=> item.style.width = ((100 / this.options.slidesVisible) /ratio) + "%")
//     }

//     /**
//      * 
//      * @param {string} className 
//      * @returns {HTMLElement}
//      */
//     createDivWithClass (className){
//         let div = document.createElement('div')
//         div.setAttribute('class', className)
//         return div
//     }


// }


//  document.addEventListener('DOMContentLoaded', function() {

//     new Carousel(document.querySelector('carousel1'), {
//         slidesToScroll: 3,
//         slidesVisible: 3
//     })

// })



//////////////////////////////// COORDONNEES CURSEUR SORIS SUR PAGE HTML//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // Sélectionnez l'élément du curseur
// var cursor = document.getElementById('cursor');

// // Ajoutez un gestionnaire d'événements pour l'événement de la souris (mousemove)
// document.addEventListener('mousemove', function(e) {
//     // Obtenez les coordonnées X et Y du curseur
//     var mouseX = e.clientX;
//     var mouseY = e.clientY;

//     // Affichez les coordonnées dans la console
//     console.log('Coordonnées du curseur :', mouseX, mouseY);
// });


const container = document.querySelector('.scroll-container');
// const items = document.querySelectorAll('.snap');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY;
    console.log(delta);
  container.scrollBy({
    top: 5*delta,
    behavior: 'smooth'
  });
});


//////////////////////////////// Menu Burger //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);