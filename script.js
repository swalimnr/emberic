var displayElement=document.getElementById('typed-text');
var text=["purchasing","advertisment","Websites","Potrait drawing","stensil art","Digitel art"];
var currentText='';
var charIndex=0;
var pousBetweenText=2000;
let textIndex=0;
let speed=250;

function autoTyping(){
    if(charIndex < text[textIndex].length){
        currentText+=text[textIndex].charAt(charIndex);
        // console.log(currentText+'......'+displayElement);
        displayElement.innerHTML= currentText;
        charIndex++;
        setTimeout(autoTyping,speed);
    }else{
        setTimeout(()=>{
            charIndex=0;
            currentText="";
            textIndex=(textIndex+1)%text.length;
            autoTyping();
        },pousBetweenText);
    }
}
window.onload = function() {
   autoTyping();
  };

// icon card hover
const IconCard=document.getElementById('iocn')

// intersection observe api calling for animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            console.log(entry)
        }else{
            entry.target.classList.remove('show')
        }
    })
    console.log()
});
const AnimateEle=document.querySelectorAll('.s-animate');
AnimateEle.forEach((el)=>observer.observe(el))


// background animnation

