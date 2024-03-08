let buttonSwitch = document.getElementById("toggle");
buttonSwitch.addEventListener("click", swapTheme);

let body = document.getElementById("body");
let banner = document.getElementsByClassName("banner");
let bannertitle= document.getElementsByClassName("banner-title");
let page1 = document.getElementById("page1")
let page1right = document.getElementById("page1right");
let page1left = document.getElementById("page1left");
let page2right = document.getElementById("page2right");

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
    page1left.classList.toggle("changeAlign-1");
    page2right.classList.toggle("changeColorBackground");

    body.classList.toggle("transition");
    setTimeout(() => {
        body.classList.toggle("transition");
    }, 1500);

}

//////////////////////////////// CAROUSEL //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Carousel {

/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} options
 * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
 * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
 */
    constructor (element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
        }, options);
        let children = [].slice.call(element.children);
        this.currentItem = 0;
        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {
           let item =  this.createDivWithClass('carousel__item');
           item.appendChild(child);
            this.container.appendChild(item);
            return item;
        });
        this.setStyle();
        this.createNavigation();
    }


    /**
     * Applique les bonnes dimensions aux éléments du carousel
     */
    setStyle () {
        let ratio = this.items.length / this.options.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach (item=> item.style.width = ((100 / this.options.slidesVisible) /ratio) + "%");
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel__next');
        let prevButton = this.createDivWithClass('carousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
    }

    next (){
        this.gotoItem(this.currentItem + this.options.slidesToScroll);
    }

    prev(){
        this.gotoItem(this.currentItem - this.options.slidesToScroll);
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index 
     */
    gotoItem (index) {
        if (index < 0){
            index = this.items.length - this.options.slidesVisible;
        } else if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined){
            index=0;
        }
        let translateX = index * -100 / this.items.length;
        this.container.style.transform = 'translate3d(' + translateX  + '%, 0 ,0)';
        this.currentItem = index;
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWithClass (className){
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }


}


document.addEventListener('DOMContentLoaded', function() {

    new Carousel(document.querySelector('#carousel1'), {
        slidesVisible: 3,
    });

});



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


//////////////////////////////// Modification vitesse scroll entre sections //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const container = document.querySelector('.scroll-container');
// // const items = document.querySelectorAll('.snap');

// container.addEventListener('wheel', (event) => {
//   event.preventDefault();
//   const delta = event.deltaY;
//     console.log(delta);
//   container.scrollBy({
//     top: 5*delta,
//     behavior: 'smooth'
//   });
// });


//////////////////////////////// Menu Burger //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("sombre");
});

navMenu.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("sombre");
});

overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("sombre");
});



//////////////////////////////// MultiLangues //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const languageData = {
    "en": {
      "nav1": "Homepage",
      "nav2": "About Me",
      "nav3": "Skills",
      "nav4": "Contact",
      "banner-title1": "Hi<br>I'm Romain",
      "texte1": "Young Engineer<br>I would like to move into IT development",
      "h2": "In a few words...",
      "texte2": "<br>&nbsp&nbsp&nbspAfter graduating with an engineering degree in Civil Engineering, I worked for 4 years in construction project management on various types of operations. I've always been attracted by innovation and digital technology, so I decided to spend another year training in the digital transition of the building industry. <br><br>&nbsp&nbsp&nbsp&nbspThis last year enabled me to discover that the part that animated me most was development. Having built solid towers and buildings, I now want to build solid applications and software by working as a Full Stack developer. <br><br>",
      "banner-title2": "About Me",
      "h2b": "Education",
      "a":"<p1><b><u>Bootcamp</u></b><br><span style='color:white'>06/2024-08/2024<span></p1>",
      "b":"<p1><b><u>Konexio + Modul'R</u></b><br><span style='color:white'>11/2023-02/2024</span></p1>",
      "c":"<p1><b><u>Ecole Nationale des Ponts et Chaussés + ESTP</u></b><br><span style='color:white'>2022-2023</span></p1>",
      "d":"<p1><b><u>INSA Lyon</u></b><br><span style='color:white'>2013 - 2018</span></p1>",
      "e":"<p1>Intensive Full Stack Web Developer training</p1>",
      "f":"<p1>Training in HTML, CSS, JavaScript</p1>",
      "g":"<p1>Specialized Master: Building Information Modeling, Integrated Design and Life Cycle of Buildings and Infrastructures</p1>",
      "h":"<p1>Graduated engineer from INSA Lyon</p1>",
      "h2c":"Skills",
      "h2d":"Hobbies",
      "sport":"<div class='item__title'>Sports</div><div class='item__description'><ul><li><b>Basketball</b> Member of a basketball team (13 years, regional level)</li><li><b>Running</b>: Half-marathon, Marathon</li><li>Padel, Tennis, Badminton</li></ul></div>",
      "voyages": "<div class='item__title'>Trips</div><div class='item__description'>Itinerant Trip in Europe and Asia</div>",
      "jeux": "<div class='item__title'>Board games</div><div class='item__description'>Board game nights with friends</div>",
      "lecture":" <div class='item__title'>Readings</div><div class='item__description'><ul><li><b>Mangas</b></li><li><b>Pro Readings</b>:<br><u>Proprement Codeur</u> (Robert C. MARTIN); <u>Les fondements de l'informatique</u> (Hugues.B, Pascal.F, Nicolas.VZ)</li></ul></div>",
      "projets": "<div class='item__title'>Development projects</div><div class='item__description'><ul><li><b>Portfolio</b></li><li><b>Restaurant ordering sites</b></li></ul><a href=https://github.com/RomainCochonnat><img src='Img/logo git hub.png' style='width:2rem; height:2rem; border-radius: 15%'></a></div>",
      "nom":"Full Name",
      "mail":"Email Address",
    },


    "fr": {
      "nav1": "Accueil",
      "nav2": "A propos",
      "nav3": "Mes compétences",
      "nav4": "Me contacter",
      "banner-title1": "Salut<br>Je suis Romain",
      "texte1": "Ingénieur de formation<br>Je souhaite me reconvertir dans le développement informatique",
      "h2": "En quelques lignes...",
      "texte2": "<br>&nbsp&nbsp&nbspAprès mon diplôme d'ingénieur orienté Génie Civil je travaille, pendant 4 ans en conduite de projet de construction sur divers types d'opérations. Attiré par l'innovation et le  numérique depuis toujours je décide alors de me former pendant un an supplémentaire dans la transition digitale du bâtiment. <br><br>&nbsp&nbsp&nbsp&nbspCette dernière année m'a permis de découvrir que la partie m'animant le plus était celle du développement. Après avoir construit des tours et bâtiments solides, je désire donc désormais construire des applications et logiciels solides en travaillant en tant que développeur Full Stack. <br><br>",
      "banner-title2": "À Propos",
      "h2b": "Formations",
      "a":"<p1><b><u>Bootcamp</u></b><br><span style='color:white'>06/2024-08/2024<span></p1>",
      "b":"<p1><b><u>Konexio + Modul'R</u></b><br><span style='color:white'>11/2023-02/2024</span></p1>",
      "c":"<p1><b><u>Ecole Nationale des Ponts et Chaussés + ESTP</u></b><br><span style='color:white'>2022-2023</span></p1>",
      "d":"<p1><b><u>INSA Lyon</u></b><br><span style='color:white'>2013 - 2018</span></p1>",
      "e":"<p1>Formation intensive de Développeur Web Full Stack</p1>",
      "f":"<p1>Fomations aux langages HTML, CSS, JavaScript</p1>",
      "g":"<p1>Mastère Spécialisé : Building Information Modeling, Conception intégrée et cycle de vie du bâtiment et des infrastructures</p1>",
      "h":"<p1>Ingénieur diplômé de l'INSA de Lyon</p1>",
      "h2c":"Compétences",
      "h2d":"Centres d'intérêt",
      "sport":"<div class='item__title'>Sports</div><div class='item__description'><ul><li><b>Basketball</b> en club, 13 ans, Niveau Régional</li><li><b>Running</b>: Semi-marathon, Marathon</li><li>Padel, Tennis, Badminton</li></ul></div>",
      "voyages": "<div class='item__title'>Voyages</div><div class='item__description'>Voyages itinérants en Europe et en Asie</div>",
      "jeux": "<div class='item__title'>Jeux de société</div><div class='item__description'>Soirées jeux de société entre amis</div>",
      "lecture":" <div class='item__title'>Lectures</div><div class='item__description'><ul><li><b>Mangas</b></li><li><b>Lectures pro</b>:<br><u>Proprement Codeur</u> (Robert C. MARTIN); <u>Les fondements de l'informatique</u> (Hugues.B, Pascal.F, Nicolas.VZ)</li></ul></div>",
      "projets": "<div class='item__title'>Projets de développement</div><div class='item__description'><ul><li><b>Portfolio</b></li><li><b>Sites commande food</b></li></ul><a href=https://github.com/RomainCochonnat><img src='Img/logo git hub.png' style='width:2rem; height:2rem; border-radius: 15%'></a></div>",
      "nom":"Nom Complet",
      "mail":"Adresse Email",
    }
};
  
function changeLanguage(lang) {
    document.getElementById('nav1').innerHTML = languageData[lang]['nav1'];
    document.getElementById('nav2').innerHTML = languageData[lang]['nav2'];
    document.getElementById('nav3').innerHTML = languageData[lang]['nav3'];
    document.getElementById('nav4').innerHTML = languageData[lang]['nav4'];
    document.getElementById('banner-title1').innerHTML = languageData[lang]['banner-title1'];
    document.getElementById('texte1').innerHTML = languageData[lang]['texte1'];
    document.getElementById('h2').innerHTML = languageData[lang]['h2'];
    document.getElementById('texte2').innerHTML = languageData[lang]['texte2'];
    document.getElementById('banner-title2').innerHTML = languageData[lang]['banner-title2'];
    document.getElementById('h2b').innerHTML = languageData[lang]['h2b'];
    document.getElementById('a').innerHTML = languageData[lang]['a'];
    document.getElementById('b').innerHTML = languageData[lang]['b'];
    document.getElementById('c').innerHTML = languageData[lang]['c'];
    document.getElementById('d').innerHTML = languageData[lang]['d'];
    document.getElementById('e').innerHTML = languageData[lang]['e'];
    document.getElementById('f').innerHTML = languageData[lang]['f'];
    document.getElementById('g').innerHTML = languageData[lang]['g'];
    document.getElementById('h').innerHTML = languageData[lang]['h'];
    document.getElementById('h2c').innerHTML = languageData[lang]['h2c'];
    document.getElementById('h2d').innerHTML = languageData[lang]['h2d'];
    document.getElementById('sport').innerHTML = languageData[lang]['sport'];
    document.getElementById('voyages').innerHTML = languageData[lang]['voyages'];
    document.getElementById('jeux').innerHTML = languageData[lang]['jeux'];
    document.getElementById('lecture').innerHTML = languageData[lang]['lecture'];
    document.getElementById('projets').innerHTML = languageData[lang]['projets'];
    document.getElementById('nom').innerHTML = languageData[lang]['nom'];
    document.getElementById('mail').innerHTML = languageData[lang]['mail'];
  }


// Changer la taille d'un titre pour le responsive

var defaultContent = document.getElementById('h2c');
var alternateContent = document.getElementById('h2c-alternate');

function resizeTitre (){
    if (window.innerWidth < 768) {
        defaultContent.style.display = 'none';
        alternateContent.style.display = 'block';
    } else {
        defaultContent.style.display = 'block';
        alternateContent.style.display = 'none';
    }
}

window.addEventListener('load', function() {
    resizeTitre(); 
});
window.addEventListener('resize', function() {
    resizeTitre(); 
});