let prodifle = document.querySelector("#prodifle");
let ok=document.querySelector("#ok")
let no=document.querySelector("#no")

let subtitless = document.querySelector("#subtitless");
let title = document.querySelector("#titless");
let happ2 = new Audio ("./happy-cat.mp3")
let sadcat=new Audio ("./sad-cat-singing.mp3")



prodifle.src="./image.png"
prodifle.style.marginTop="20px"


title.innerHTML="do you love me 🔪"
subtitless.innerHTML="I fall in love with you"


ok.addEventListener("click", ()=>{
    prodifle.src="./cat-cat-jumping.gif"
    title.innerHTML="i love you too "
    sadcat.pause();
    
    happ2.play()
    happ2.loop=true
     

})
no.addEventListener("click", ()=>{
    prodifle.src="./sadcat.gif"
    title.innerHTML="Why don't you love me 🩻😥"
    happ2.pause();
    sadcat.play()
    sadcat.loop=true
    

})

let firstName='sunly'
let lastName='lysun'
let fullName=`my nam  is ${firstName} ${lastName}`;
console.log("full nam " ,fullName)