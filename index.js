let game = document.getElementById("game");
let blocks = document.getElementsByClassName("blocks");
for(let i = 0; i < 9; i++) {
    game.innerHTML += "<div class='blocks' data-tab='"+i+"'></div>"
}

game.onclick = function(event) {
    event.target.innerHTML = "x";
    step();
    result();
}
let count = 8;

let genStep = {
    "0":"0",
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
}


function step() {
    count--;
   if(count == 7) {
        let atr = event.target.getAttribute("data-tab");
        atr = parseInt(atr);
        delete genStep[atr];
        let mas = Object.keys(genStep);
        let compNum = getRndInteger(0, 7)
        let num = mas[compNum];
        num = parseInt(num);
        delete genStep[num];
         setTimeout(function(){
             blocks[num].style.color = 'red';
             blocks[num].innerHTML = 'o';
         },700)
    }
         if(count == 6) {
            let atr1 = event.target.getAttribute("data-tab");
            atr1 = parseInt(atr1);
            delete genStep[atr1];
            let mas1 = Object.keys(genStep);
            let compNum2 = getRndInteger(0, 5)
            let num1 = mas1[compNum2];
            num1 = parseInt(num1);
            delete genStep[num1];
             console.log(genStep);
             setTimeout(function() {
                 blocks[num1].style.color = 'red';
                 blocks[num1].innerHTML = 'o';
             },700)
             
        }
    
        if(count==5) {
            let atr2 = event.target.getAttribute("data-tab");
            atr2 = parseInt(atr2);
            delete genStep[atr2];
            let mas2 = Object.keys(genStep);

            let compNum3 = getRndInteger(0, 3)
            let num2 = mas2[compNum3];
            num2 = parseInt(num2);
            delete genStep[num2];
                console.log(genStep);
             setTimeout(function(){
                 blocks[num2].style.color = 'red';
                 blocks[num2].innerHTML = 'o';
             },700)
    }
        if(count==4) {
            let atr3 = event.target.getAttribute("data-tab");
            atr3 = parseInt(atr3);
            delete genStep[atr3];
            let mas3 = Object.keys(genStep);
            let compNum4 = getRndInteger(0, 1)
            let num3 = mas3[compNum4];
            num3 = parseInt(num3);
            delete genStep[num3];
            setTimeout(function(){
                blocks[num3].style.color = 'red';
                blocks[num3].innerHTML = 'o';
            },700)
        }
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function result() {
    let result = document.getElementById("result");
    if(blocks[0].innerHTML == 'x' && blocks[1].innerHTML == 'x' && blocks[2].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[3].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[5].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[6].innerHTML == 'x' && blocks[7].innerHTML == 'x' && blocks[8].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[0].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[8].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[2].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[6].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[0].innerHTML == 'x' && blocks[3].innerHTML == 'x' && blocks[6].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[1].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[7].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[2].innerHTML == 'x' && blocks[5].innerHTML == 'x' && blocks[8].innerHTML=='x') {
        result.innerHTML = "X win";
    }
    if(blocks[0].innerHTML == 'o' && blocks[1].innerHTML == 'o' && blocks[2].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[3].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[5].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[6].innerHTML == 'o' && blocks[7].innerHTML == 'o' && blocks[8].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[0].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[8].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[2].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[6].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[0].innerHTML == 'o' && blocks[3].innerHTML == 'o' && blocks[6].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[1].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[7].innerHTML=='o') {
        result.innerHTML = "O win";
    }
    if(blocks[2].innerHTML == 'o' && blocks[5].innerHTML == 'o' && blocks[8].innerHTML=='o') {
        result.innerHTML = "O win";
    }
}























































































































































