const burgerButton = document.querySelector('.header-hidden-menu');
const hiddenWindow = document.querySelector('.burger-menu-hidden')
const closeButton = document.querySelector('.close-button')
burgerButton.addEventListener('click', function(){
    hiddenWindow.classList.remove('hidden')
} )

closeButton.addEventListener('click', function() {
    hiddenWindow.classList.add('hidden')
})