const searchBox = document.querySelector(".search-box");
const search = document.querySelector(".search");
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");

searchIcon.onclick = function(){
    searchBox.classList.add("active");
}

closeIcon.onclick = function(){
    searchBox.classList.remove("active");
}