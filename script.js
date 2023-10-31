var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slide')
let slider = document.querySelectorAll('.slides')
console.log(slides);
console.log(slider);
console.log(slides[0]);
let i = 1;
next.addEventListener('click', function(){
  slides[i-1].classList.toggle('active');
  slides[i+1].classList.toggle('active');
  i++;
  if (i==4){
    slides[i-1].classList.toggle('active');
    slides[0].classList.toggle('active');
    i=0;
  }
  if (i==0){
    slides[4].classList.toggle('active');
    slides[i+1].classList.toggle('active');
    i=1;
  }
});