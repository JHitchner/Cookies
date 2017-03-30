var lemonBtn = document.querySelector("#lemonBtn");
var lemonCount = document.querySelector("#lemon_count");
var sugarBtn = document.querySelector("#sugarBtn");
var sugarCount = document.querySelector("#sugar_count");
var chocolateBtn=document.querySelector("#chocolateBtn");
var chocoCount = document.querySelector("#choco_count");
var deleteBtn = document.querySelector("#delete");
var lemonClick = 0;
var sugarClick = 0;
var chocoClick = 0;


lemonBtn.addEventListener("click",function(){
  lemonClick++;
  Cookies.set("lemon",lemonClick);
});
sugarBtn.addEventListener("click",function(){
  sugarClick++;
  Cookies.set("sugar",sugarClick);
});
chocolateBtn.addEventListener("click",function(){
  chocoClick++;
  Cookies.set("choco",chocoClick);
});
deleteBtn.addEventListener("click", function(){
  Cookies.set("lemon",0);
  lemonCount.innerHTML = Cookies.get("lemon");
  Cookies.set("choco",0);
  chocoCount.innerHTML = Cookies.get("choco");
  Cookies.set("sugar",0);
  sugarCount.innerHTML = Cookies.get("sugar");
});

function lemonType (){
  lemonCount.innerHTML = Cookies.get("lemon");
};
function sugarType (){
  sugarCount.innerHTML = Cookies.get("sugar");
};
function chocoType (){
  chocoCount.innerHTML = Cookies.get("choco");
};
window.onload = lemonType();
window.onload = sugarType();
window.onload = chocoType();
