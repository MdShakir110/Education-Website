const userEl = document.getElementById("user-btn");
const profileEl = document.querySelector(".profile");
const searchBtnEl = document.getElementById("search-btn");
const searchBoxel = document.querySelector(".search-form");
const bodyEl = document.querySelector("body");
const menuBtnEl = document.getElementById("menu-btn");
const sideBarEl = document.querySelector(".side-bar");
const closeSideBarEl = document.querySelector(".close-side-bar");

userEl.addEventListener("click",()=>{
    profileEl.classList.toggle("active");
    searchBoxel.classList.remove("active");
})
window.addEventListener("scroll",()=>{
    profileEl.classList.remove("active");
    searchBoxel.classList.remove("active");
    
    if(window.innerWidth <1200){
    sideBarEl.classList.remove("active");
    bodyEl.classList.remove("active");
    }
})
searchBtnEl.addEventListener("click",()=>{
    searchBoxel.classList.toggle("active");
    profileEl.classList.remove("active");
})
menuBtnEl.addEventListener("click",()=>{
    bodyEl.classList.toggle("active");
    sideBarEl.classList.toggle("active");

})
closeSideBarEl.addEventListener("click",()=>{
    sideBarEl.classList.remove("active");
    bodyEl.classList.remove("active");
})

