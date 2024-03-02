function toggleMenu(){
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.mobile-icon')

    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

function changeImage(image){
       // const image = document.querySelector('.image_zoom')
        image.classList.toggle('fullimage')
 }

