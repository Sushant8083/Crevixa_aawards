var semi=document.querySelector("#semi");

window.addEventListener("mousemove",function(dets){
    var x=dets.clientX;
    var y=dets.clientY;

    semi.style.left=x+'px';
    semi.style.top=y+'px';
})

gsap.to("#loder",{
    top:"-100%",
    duration:2,
    ease:"expo.in"
})

var cir=document.querySelector("#n22");
var heads=document.querySelector("#lode1");
var heads2=document.querySelector("#lode2");
var nav=document.querySelector("#nav");
var close=document.querySelector("#close");


cir.addEventListener("click",function(){
        heads.style.left="0%";
        heads2.style.left="50%";
        nav.style.display="none"
});

close.addEventListener("click",function(){
    heads.style.left="-50%";
    heads2.style.left="100%";
    nav.style.display="flex"
});