// Your code goes here
const colorWheel = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const navLink = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-heading');
const h2 = document.querySelector('h2')
const text = document.querySelector('body');
const img = document.querySelectorAll('img')
const button = document.querySelectorAll('.btn');
const header = document.querySelector('header');
const footer = document.querySelector('footer')
const color = colorWheel[Math.floor(Math.random()*colorWheel.length)];
navLink.forEach( (item, i) => {
    navLink[i].addEventListener('click', (event) => {
    
    if(navLink[i].style.background === 'none'){
        navLink[i].style.background = 'lightgrey';
        navLink[i].style.fontSize = '2rem';
        navLink[i].style.borderRadius = '5px';
    }else{
        navLink[i].style.background = 'none';
        navLink[i].style.fontSize = '1.6rem';
    
    } 
    }
)
navLink[i].addEventListener('drag', ()=>{
    navLink[i].style.display = 'none';
})
})



img.forEach((item, i) => {
    img[i].addEventListener('click', ()=>{
        img[i].style.width = '200px';
    })
})


text.addEventListener('copy', ()=>{
    text.textContent = 'Dont steal the contents of the webpage.'
    text.style.background = 'red';
    text.style.fontSize = '15rem';
})


logo.addEventListener('mouseenter', () =>{
        logo.style.fontSize = '6rem';
        logo.style.background = 'lightgrey'
        logo.style.padding = '15px';
        logo.style.borderRadius = '15px';
})

logo.addEventListener('mouseleave', ()=>{
        logo.style.fontSize = '4rem';
        logo.style.background = 'none'
        logo.style.padding = '0px';
})

logo.addEventListener('click', ()=>{
    logo.style.color = colorWheel[Math.floor(Math.random()*colorWheel.length)];
});


h2.addEventListener('dblclick', ()=> {
    h2.textContent = 'go home!';
})

header.addEventListener('dblclick', ()=>{
   
        text.style.background = colorWheel[Math.floor(Math.random()*colorWheel.length)];
        header.style.background = colorWheel[Math.floor(Math.random()*colorWheel.length)];
        footer.style.background = colorWheel[Math.floor(Math.random()*colorWheel.length)];
})
button.forEach((item, i)=>{
    button[i].addEventListener('click', ()=>{
    button[i].style.background = colorWheel[Math.floor(Math.random()*colorWheel.length)];
})
})
