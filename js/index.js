// Your code goes here
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach( (item, i) => {
    navLink[i].addEventListener('click', (event) => {
        navLink[i].style.background = 'red';
        navLink[i].style.fontSize = '2rem';
    }
)})

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', () =>{
        logo.style.fontSize = '6rem';
})
