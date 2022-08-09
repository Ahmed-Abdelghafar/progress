let progressBar =document.getElementById("progressBar");
let progressCircul =document.getElementById("progressCircul");
let btn =document.getElementById("btn");
let btn2 =document.getElementById("btn2");

btn.addEventListener("click",()=>{
    progressBar.style.display="none"
    progressCircul.style.display="block"
    btn.style.display="none"
    btn2.style.display="inline"

});
btn2.addEventListener("click",()=>{
    progressBar.style.display="inline"
    progressCircul.style.display="none"
    btn.style.display="inline"
    btn2.style.display="none"

});