const homeNav = document.getElementById("homeNav")
const aboutNav = document.getElementById("aboutNav")
const homeDiv = document.getElementById("home")
const aboutDiv = document.getElementById("about")
const contactNav = document.getElementById("contactNav")
const contactDiv = document.getElementById("contact")

const hideViews =()=>{
    homeDiv.classList.add("hide")
    contactDiv.classList.add("hide")
    aboutDiv.classList.add("hide")
}
const showAbout =()=>{
    hideViews()
    aboutDiv.classList.remove("hide")
}

const showHome =()=>{
    hideViews()
    homeDiv.classList.remove("hide")
}

const showContact =()=>{
    hideViews()
    contactDiv.classList.remove("hide")
}

aboutNav.addEventListener("click",showAbout)
homeNav.addEventListener("click",showHome)
contactNav.addEventListener("click",showContact)