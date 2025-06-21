
// const inp = document.querySelector(".input");
// inp.addEventListener("click",()=>{
//     console.log("Clicked");
    
// })

let searchForm = document.querySelector(".search-form");
let searcBtn = document.querySelector("#searchBtn");
searcBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    searchForm.classList.toggle('active');
    console.log(" Search clicked");
    
});