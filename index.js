 console.log("my name is om")
let ham = document.querySelector('.sidebar-togle-btn');
ham.addEventListener("click",function(){
document.querySelector(".container").classList.toggle("active");
});