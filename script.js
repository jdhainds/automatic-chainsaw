let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('.p');
0
//Choice A
let wingstop = document.querySelector('.wingstop');
wingstop.style.display = "none";


left.addEventListener('click', function(){
    leftRight.style.display ="none";
    left.style.display = "none";
    right.style.display = "none";
    wingstop.style.display = "block";
    text.innerHTML ="to eat double click";
});

//wingstop choice 1
wingstop.addEventListener('dbl', function(){

text.innerHTML = "man I love wingstop that was so good";
wingstop.style.display = "none";
finishedwingstop.style.display = "block";


});