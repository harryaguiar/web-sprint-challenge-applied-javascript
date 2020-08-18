/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')
const carouselSlider = document.querySelector('.carousel')


function animation(){
  carouselSlider.classList.toggle = 'animate__animated, animate__fadeIn'

  console.log('Animation')
 
}



function carousel() { 
  const carousel = document.createElement('div')
  carousel.classList = 'carousel'
   
  

  carousel.innerHTML += `
  <div class="left-button"> < </div>
  <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
  <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
  <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
  <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
  <div class="right-button"> > </div>
  `
  return carousel

}

carouselContainer.appendChild(carousel());

const leftButton = document.querySelector('.left-button');
leftButton.style.background = 'white';
leftButton.style.color = 'black';

const rightButton = document.querySelector('.right-button')
rightButton.style.background = 'white';
rightButton.style.color = 'black';
const sliderImages = document.querySelectorAll('img');

let current = 0

function resetImages(){
  for(let i = 0; i < sliderImages.length; i++){
    
      sliderImages[i].style.display = 'none'
      
  }
  
}

// Slider Init

function startSlide() {
  resetImages()
  sliderImages[0].style.display = 'block'
 
}

function sliderLeft(){
  resetImages()
  sliderImages[current -1 ].style.display = 'block'
  current --
}

leftButton.addEventListener('click', () => {
  
  if(current === 0) {
    current = sliderImages.length
   
  }
  
  sliderLeft()
  
})



function slideright(){
  resetImages()
  sliderImages[current + 1].style.display = 'block'  
  current ++
}




rightButton.addEventListener('click', () => {
  
 

  if(current === sliderImages.length - 1) {
    current = -1
  }

  slideright()
})

startSlide()