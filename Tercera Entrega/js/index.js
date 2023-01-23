
let dark = false
const switchmode = document.querySelector("#dark-light")
const body = document.querySelector(".ligth-mode")

switchmode.onclick = () => {
    localStorage.setItem("darkMode", true)
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", false)

    }
    
    body.classList.toggle("dark-mode")

}

if (localStorage.getItem("darkMode") === "true" ) {

    body.classList.add("dark-mode")

}
else {
    body.classList.remove("dark-mode")
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });