function scrollToContact() {
    document.getElementById("contato").scrollIntoView();
}

function scrollToHome() {
    window.scrollTo(0, 0);
}

function scrollToProjects() {
    document.getElementById("projeto").scrollIntoView();
}

function scrollToConhecimento() {
    document.getElementById("experiencia").scrollIntoView();
}

var i = 0;
var txt = 'Bem-vindo ao meu portfólio';
var speed = 100;

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}