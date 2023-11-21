const password = document.querySelector("#password");
const  background = document.querySelector(".background");

 password.addEventListener("input", (e)=>{
  const input = e.target.value;
  const length = input.length;
  const imgBlur =  20 - length * 2
  background.style.filter = `blur(${imgBlur}px)`;

 })




