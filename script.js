/* Loader */

window.addEventListener("load", () => {

  document.getElementById("loader").style.display = "none";

});

/* Navbar Scroll */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});

/* Mobile Menu */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* Dark Mode */

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    toggle.classList.replace("fa-moon","fa-sun");
  }
  else{
    toggle.classList.replace("fa-sun","fa-moon");
  }

});

/* Typing Animation */

var typed = new Typed(".typing", {

  strings:[
    "Modern Landing Page",
    "Frontend Developer",
    "Responsive Website"
  ],

  typeSpeed:80,
  backSpeed:50,
  loop:true

});

/* AOS */

AOS.init({

  duration:1000

});

/* Custom Cursor */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* Particles JS */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    size: {
      value: 3
    },

    color: {
      value:"#38bdf8"
    },

    line_linked: {
      enable:true,
      color:"#38bdf8"
    },

    move: {
      speed:2
    }

  }

});