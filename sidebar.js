let sidebar_btn = document.querySelector(".btn");
let sidebar = document.querySelector(".sidebar");
sidebar_btn.onclick = function(){
    this.classList.toggle("click");
    sidebar.classList.toggle("show");
};

let study_material_btn = document.querySelector(".stdy-mtrl-btn");
study_material_btn.onclick = function(){
    document.querySelector("nav ul .material-show").classList.toggle("show");
    document.querySelector("nav ul .first").classList.toggle("rotate");
};

// let activeElem = document.querySelector("nav ul li");
// active.onclick = function(){
//     // this.classList.add("active");
//     let parentElem = this.parentNode;
//     console.log(parentElem);
// };