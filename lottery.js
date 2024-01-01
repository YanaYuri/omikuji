const btn = document.querySelector("button");
btn.addEventListener("click", draw) ;

function draw() {
  const rand = 1 + Math.floor(Math.random()*4);

  const result = document.getElementById("result");

  switch(true){
    case rand > 0 && rand <=1:
      result.textContent=  "だいきちヽ(^o^)丿大吉" ;
      break;
   case rand > 1 && rand <=2:
      result.textContent=  "ちゅうきち(*^-^*)中吉";
      break;
   case rand > 2 && rand <=3:
      result.textContent= "きち!(^.^)!吉";
      break; 
   case rand > 3 && rand <=4:
        result.textContent= "しょうきち(^.^)小吉";
      break; 
   }

  console.dir(btn);

}

