
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

