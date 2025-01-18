let typed = new Typed(".text" ,{

    strings: ["Multi-Millionare", "designer lover","Multi-Millionare 2x","Looksmaxxer"],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 2000,
    loop: true

});

let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu');
  });