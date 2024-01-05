var eLburger = document.querySelector(".header-burger");
var elClose = document.querySelector(".close-img");
var elMenuBox = document.querySelector(".header-menu-box");

eLburger.addEventListener("click",function() {
    elMenuBox.style.display = "flex";
})

elClose.addEventListener( "click",function() {
    elMenuBox.style.display = "none"
})

