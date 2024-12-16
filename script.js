let Fast_Food = document.querySelector('.Fast_Food');
let Make_Dinner = document.querySelector('.Make_Dinner');
let text = document.querySelector('p');
console.log("main");
let wingstop = document.querySelector('.wingstop');
wingstop.style.display = "none";
let finishedwings = document.querySelector('.finishedwings');
finishedwings.style.display = "none";
let mcdonalds1 = document.querySelector('.mcdonalds1');
mcdonalds1.style.display = "none";
let finishedmcdonalds = document.querySelector('.finishedmcdonalds');
finishedmcdonalds.style.display = "none";
let hungry = document.querySelector('.hungry');
let chicken = document.querySelector('.chicken');
chicken.style.display = "none";
let veggieburger = document.querySelector('.veggieburger');
veggieburger.style.display = "none";
let chickenmeal = document.querySelector('.chickenmeal');
chickenmeal.style.display = "none";
let veggieburgermeal = document.querySelector('.veggieburgermeal');
veggieburgermeal.style.display = "none";

//Left 
Fast_Food.addEventListener('click', function(){

    console.log("left1");
    hungry.style.display ="none";
    Fast_Food.style.display = "none";
    Make_Dinner.style.display = "none";
    wingstop.style.display = "block";
    text.innerHTML = "Double click the restaraunt you want to eat at."
    mcdonalds1.style.display = "block";

});

//Left Choice 1
wingstop.addEventListener('dblclick', function(){

text.innerHTML = "man I love wingstop that was so good";
mcdonalds1.style.display = "none";
wingstop.style.display = "none";
finishedwings.style.display = "block";

});

//Left Choice 2
mcdonalds1.addEventListener('dblclick', function(){

text.innerHTML = "man I love mcdonalds that was so good";
mcdonalds1.style.display = "none";
wingstop.style.display = "none";
finishedmcdonalds.style.display = "block";

});


//Right
Make_Dinner.addEventListener('click', function(){

    hungry.style.display ="none";
    Fast_Food.style.display = "none";
    Make_Dinner.style.display = "none";
    text.innerHTML = "Double click the food you want to cook with";
    chicken.style.display = "block";
    veggieburger.style.display = "block";

});

//Right Choice 1
chicken.addEventListener('dblclick', function(){

veggieburger.style.display = "none";
text.innerHTML = "Man I love rotisserie chicken it's so good!"
chicken.style.display = "none";
chickenmeal.style.display = "block";

});

//Right Choice 2
veggieburger.addEventListener('dblclick', function(){

veggieburger.style.display = "none";
text.innerHTML = "Now give me ONE good reason you picked the veggie burger:(. God's dissapointed. Look at this monstrosity.";
veggieburgermeal.style.display = "block";
chicken.style.display = "none";

});