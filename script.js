document.body.classList.add("animate");
const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    menu.classList.toggle('active')
};