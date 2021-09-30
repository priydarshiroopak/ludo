
//Player selection dialogue box

function colorSelected(e){
    e.target.classList.toggle("selected");
    document.getElementById(e.target.id[0]+"Win").classList.toggle("won");
}

document.getElementById("rSelect").addEventListener("click", colorSelected);

document.getElementById("gSelect").addEventListener("click", colorSelected);

document.getElementById("bSelect").addEventListener("click", colorSelected);

document.getElementById("ySelect").addEventListener("click", colorSelected);

var playerColors;

var playerNo;

var moveCtr=0;

var mapLocker=new Map();

var winners = new Array;

var mapTally = new Map();

var mapExtraRoll = new Map();

document.getElementById("dialogueStart").querySelector(".select button").addEventListener("click", function() {
    playerColors = document.querySelectorAll(".playerSelection .colors .holder.selected");
    playerColors = Array.from(playerColors);
    playerNo=playerColors.length;
    document.getElementById("dialogueStart").style.display="none";
    playerColors.forEach(element => {
        let temp = element.id[0];
        let tempIndex = playerColors.indexOf(element);
        playerColors[tempIndex] = temp;
        mapLocker.set(temp, 0);
        mapTally.set(temp, 0);
        mapExtraRoll.set(temp, 0);
    });
    initialiseGame(playerColors);
} )

var next=function (p) {
    switch(p) {
        case 'r': return 'g';
        case 'g': return 'y';
        case 'y': return 'b';
        case 'b': return 'r';
        default: alert("Error in cycling through colors"); return;
    }
}

var  chkToken=function(a) {
    if(document.getElementById(a).innerHTML) return 1;
    else return 0;
}

var removeToken=function(a,t) {
    var id=document.getElementById(a);
    var n=id.childElementCount;
    if(n){
        id.querySelector("#"+t).remove();
    }
    return;
}

var killToken = function(a, p) {
    var temp=document.getElementById(a).firstElementChild;
    if(temp && !(temp.parentElement.classList.contains("dark"))){
        var targetId=temp.id;
        var target;
        var holderSelector = function() {
            Array.from(document.querySelectorAll("."+targetId[0]+"Locker .holder")).every(element => {
                if(element.childElementCount==0){    
                    target = element.id;
                    return false;
                }
                return true;
            });
        }
        holderSelector();
        if(target[target.length-1]<='4'){
            addToken(target, targetId[0]+'Token');
            mapLocker.set(targetId[0], mapLocker.get(targetId[0])+1);
            mapExtraRoll.set(p,mapExtraRoll.get(p)+1);
            removeToken(a, targetId[0]+"Token");
        } else {
            alert("some error in returning token back to locker!");
        }

    }
    return;
}

var addToken = function(a, t, p) {
    killToken(a, p);

    var token=('<svg id="token" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css"> .st0{stroke:#FFFFFF;stroke-width:20;stroke-miterlimit:10;}</style><path class="st0" fill="currentColor" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M336,256c0,44.1-35.9,80-80,80s-80-35.9-80-80s35.9-80,80-80S336,211.9,336,256z"/></svg>');
    var rToken=('<svg id="rToken" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css"> .st0{stroke:#FFFFFF;stroke-width:20;stroke-miterlimit:10;}</style><path class="st0" fill="#cc444bff" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M336,256c0,44.1-35.9,80-80,80s-80-35.9-80-80s35.9-80,80-80S336,211.9,336,256z"/></svg>');
    var gToken=('<svg id="gToken" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css"> .st0{stroke:#FFFFFF;stroke-width:20;stroke-miterlimit:10;}</style><path class="st0" fill="#054a29ff" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M336,256c0,44.1-35.9,80-80,80s-80-35.9-80-80s35.9-80,80-80S336,211.9,336,256z"/></svg>');
    var yToken=('<svg id="yToken" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css"> .st0{stroke:#FFFFFF;stroke-width:20;stroke-miterlimit:10;}</style><path class="st0" fill="#ffaa00ff" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M336,256c0,44.1-35.9,80-80,80s-80-35.9-80-80s35.9-80,80-80S336,211.9,336,256z"/></svg>');
    var bToken=('<svg id="bToken" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css"> .st0{stroke:#FFFFFF;stroke-width:20;stroke-miterlimit:10;}</style><path class="st0" fill="#0f3375ff" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M336,256c0,44.1-35.9,80-80,80s-80-35.9-80-80s35.9-80,80-80S336,211.9,336,256z"/></svg>');    

    function returnToken(temp) {
        if(temp=="token")  return token;
        else if(temp=="rToken") return rToken;
        else if(temp=="gToken") return gToken;
        else if(temp=="yToken") return yToken;
        else if(temp=="bToken") return bToken;
        else alert("Error in returning token");
    }
    document.getElementById(a).insertAdjacentHTML("beforeend", returnToken(t));
    return;
}

var move= function(a, b, t, p, diceValue){
    var temp = document.getElementById(b);
    if(temp.childElementCount){
        if((!temp.classList.contains("dark"))&&(temp.firstChild.id[0] == p)){
            alert("The destination block contains your token! Select a different token");
            playerTurn(p, diceValue);
            return;
        } else {
            removeToken(a,t);
            addToken(b, t, p);
            play(playerCycle(p, diceValue));
        }
    } else {
        removeToken(a,t);
        addToken(b, t, p);
        play(playerCycle(p, diceValue));
    }
}

var endGame = function() {
    console.log("Game finished in " +moveCtr +" moves with players in position: "+ winners);
    
    var temp = document.getElementById("dialogueFinish");
    winners.forEach(w => {
        temp.querySelector("#"+ w +"Win").innerHTML = winners.indexOf(w) + 1;
    });

    function reload() {
        reload = location.reload();
    }
    temp.querySelector(".select button").addEventListener("click", reload, false);

    temp.style.display = "flex";
}

var finishToken=function (a, t, diceValue) {
    removeToken(a, t);
    mapTally.set(t[0], mapTally.get(t[0])+1);
    mapExtraRoll.set(t[0],mapExtraRoll.get(t[0])+1);
    var temp = document.getElementById(t[0]+'Score');
    temp.innerHTML = mapTally.get(t[0]);
    if(mapTally.get(t[0])==4) {
        winners.push(t[0]);
        temp.classList.add("win");
        let index = playerColors.indexOf(t[0]);
        playerColors.splice(index, 1);
        if(winners.length>=(playerNo-1)){
            playerColors.every(element => {
                if(!winners.includes(element)){    
                    winners.push(element);
                    return false;
                }
                return true;
            });
            endGame();
            return;
        } else{
            let p=t[0];
            do{
                p=next(p);
            }while(!playerColors.includes(p));
            play(p);
        }
    }
    play(playerCycle(t[0], diceValue));
}

var checkMove = function (n, p) {
    var total = 0, truth = 0;
    Array.from(document.querySelectorAll(".block #"+p+"Token")).forEach(element => {
        let temp = element.parentElement.id;
        total++;
        if(temp[0]===temp[0].toLowerCase()) truth++;
        else if((parseInt(temp.slice(1))+n)<=6) truth++;
        else if((n==6) && mapLocker.get(p)>0) truth++;
    })
    if(truth)   return true;
    else return false;
}

var calculateMove = function (a, n, p) {
    var tempToken=p+"Token";
    var srcNo=Number(a.slice(1));
    var destNo=srcNo+n;

    //starting move
    if(a.includes("Holder",1)){
        if(n==6) {
            move(a, p+'9', tempToken, p, n);
            mapLocker.set(p, mapLocker.get(p)-1);
        } else {
            alert("Choose a token in play! New token only opens with a six.");
            playerTurn(p, n);
        }
    }

    //in last leg of game
    else if(a[0]==p && destNo>7 && srcNo<8){
        if(destNo<=12){
            move(a, p.toUpperCase()+(destNo-7), tempToken, p, n);
        }
        else if(destNo==13){
            finishToken(a, tempToken, n);
        }
        else {
            alert("Error in calculating moves. Returning to next player.");
            play(playerCycle(p, n));
        }
    }
    //before endgame
    else if(a[0]==p.toUpperCase()){
        if(destNo==6){
            finishToken(a, tempToken, n);
        } else if(destNo<6){
            move(a, p.toUpperCase()+destNo, tempToken, p, n);
        } else if(destNo>6){
            if(checkMove(n, p)) {
                alert("Not enough blocks left to traverse! Select a different token.");
                playerTurn(p, n);
            } else {
                alert("Not enough blocks left to traverse! Next player's turn.");
                play(playerCycle(p, n));
            }
        }
    }
    //normal movement
    else{
        if(destNo<=13){
            move(a, a[0]+destNo, tempToken, p, n);
        } else {
            move(a, next(a[0])+(destNo-13), tempToken, p, n);
        }
    }
}

var changeDicePicture = function(diceValue) {
    var dice1='<svg id="dice1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-one" class="svg-inline--fa fa-dice-one fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM224 288c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    var dice2='<svg id="dice2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-two" class="svg-inline--fa fa-dice-two fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    var dice3='<svg id="dice3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-three" class="svg-inline--fa fa-dice-three fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    var dice4='<svg id="dice4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-four" class="svg-inline--fa fa-dice-four fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    var dice5='<svg id="dice5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-five" class="svg-inline--fa fa-dice-five fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    var dice6='<svg id="dice6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-six" class="svg-inline--fa fa-dice-six fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="red" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>';
    
    var dicePicture = document.getElementById("dice");
    switch(diceValue) {
        case 1: dicePicture.innerHTML = dice1; break;
        case 2: dicePicture.innerHTML = dice2; break;
        case 3: dicePicture.innerHTML = dice3; break;
        case 4: dicePicture.innerHTML = dice4; break;
        case 5: dicePicture.innerHTML = dice5; break;
        case 6: dicePicture.innerHTML = dice6; break;
    }

}

var playerTurn = function(p, diceValue) {
    if(((mapLocker.get(p)+mapTally.get(p)) == 4) && diceValue!=6 ){
        alert("New token only opens with a six. Sorry, next player's turn.");
        play(playerCycle(p, diceValue));
    } else {
        var isMoved = false;
        var returnId = function (e) {
            if(isMoved === false){
                let temp=e.target;
                while((!temp.classList.contains("block"))&&(!temp.classList.contains("holder"))){
                    temp=temp.parentElement;
                }
                var ele=temp.querySelector("#"+p+"Token");
                if(ele){
                    isMoved = true;
                    calculateMove(temp.id, diceValue, p);
                }
            } else return;
        }
        let collection = document.getElementsByClassName("block");
        for(item of collection){
            item.onclick = returnId;
        }
        for(var i=1; i<5; i++) {
            document.getElementById(p+"Holder"+i).onclick = returnId;
        }
    }
}

var rollDice = function(p) {
    var submitButton = document.querySelector(".dice .value button");
    var randomButton = document.querySelector(".dice .roll button");
    var diceValue;
    var isDiceRolled = false;

    submitButton.onclick = function(){
        if(isDiceRolled === false){
            diceValue=parseInt(document.querySelector(".dice .value input").value);
            if(diceValue<=6 && diceValue>0){
                isDiceRolled = true;
                changeDicePicture(diceValue);
                playerTurn(p, diceValue);
            } else{
                alert("Entered dice value is not allowed");
            }
            return;
        }
    }

    randomButton.onclick = function () {
        if(isDiceRolled === false){
            isDiceRolled = true;
            diceValue=Math.floor((Math.random())*6)+1;
            changeDicePicture(diceValue);
            playerTurn(p, diceValue);
            return;
        }
    }

    if(isDiceRolled === true){
        pnext = playerCycle(p, diceValue);
    }
}

var playerCycle = function(p, dice) {
    if(dice==6){
        return p;
    } else if(mapExtraRoll.get(p)>0 && checkMove(dice, p)){
        mapExtraRoll.set(p, mapExtraRoll.get(p)-1);
        return p;
    } else {
        mapExtraRoll.set(p, 0);
        do{
            p=next(p);
        }while(!playerColors.includes(p))
        return p;
    }
}

var setPlayer = function(p){
    var temp=document.querySelector(".stats .move h1");
    switch(p){
        case 'r': temp.innerHTML="red"; break;
        case 'g': temp.innerHTML="green"; break;
        case 'y': temp.innerHTML="yellow"; break;
        case 'b': temp.innerHTML="blue"; break;
    }
    return;
}

var play=function(p) {
    moveCtr++;
    setPlayer(p);
    rollDice(p);
}

var initialiseGame = function(){
    playerColors.forEach(element1 => {
        [1,2,3,4].forEach(element2 => {
            var id=element1+"Holder"+element2;
            addToken(id, element1+'Token');
            if(mapLocker.has(element1)) mapLocker.set(element1, mapLocker.get(element1)+1);
            else    alert("Error during initialisation! Token mismatch.");
        });
        document.getElementById(element1+"Score").classList.add("selected");
    });
    var p=playerColors[0];
    play(p);
}
