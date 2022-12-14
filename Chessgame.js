
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  _____  _           _                _____                      
 |  __ \(_)         | |              / ____|                     
 | |  | |_ ___ _ __ | | __ _ _   _  | |  __  __ _ _ __ ___   ___ 
 | |  | | / __| '_ \| |/ _` | | | | | | |_ |/ _` | '_ ` _ \ / _ \
 | |__| | \__ \ |_) | | (_| | |_| | | |__| | (_| | | | | | |  __/
 |_____/|_|___/ .__/|_|\__,_|\__, |  \_____|\__,_|_| |_| |_|\___|
              | |             __/ |                              
              |_|            |___/                               

  1. all the white, black piece variables
  2. board is the Chess board nest array of objects
  3. function that displays a row by console.logging every row symbols
  4. row's 8-1 that grab every symbol from the Chess Board Array
*/


//1.
//white pieces
let wK = ("♔")
let wQ = ("♕")
let wR = ("♖")
let wB = ("♗")
let wN = ("♘")
let wP = ("♙")
let wS = ("▯")
let white = "white"
let line = ("]")

//black pieces
let bK = ("♚")
let bQ = ("♛")
let bR = ("♜")
let bB = ("♝")
let bN = ("♞")
let bP = ("♟")
let bS = ("▮")
let black = "black"

let filled = "filled"

// let row8 = ("▯]▮]▯]▮]▯]▮]▯]▮]")
// let row7 = ("▮]▯]▮]▯]▮]▯]▮]▯]")
// let row6 = ("▯]▮]▯]▮]▯]▮]▯]▮]")
// let row5 = ("▮]▯]▮]▯]▮]▯]▮]▯]")
// let row4 = ("▯]▮]▯]▮]▯]▮]▯]▮]")
// let row3 = ("▮]▯]▮]▯]▮]▯]▮]▯]")
// let row2 = ("▯]▮]▯]▮]▯]▮]▯]▮]")
// let row1 = ("▮]▯]▮]▯]▮]▯]▮]▯]")

//2
//this is our chess board
//  which is an array 0-7 of row of 8's, 7's, 6's, 5's, 4's, 3's, 2's,1's
//    each rows has an array from A#'s, b#'s, C#'s, etc
//      each item is an object currently with the key and value of piece & symbol


//need index notation object filled out


let board = [
  [a8={piece:bR,moved:false,index:"00",color:black,space:"filled"},b8={piece:bS,moved:false,index:"01",color:black,space:"empty"},c8={piece:wS,moved:false,index:"02",color:white,space:"empty"},d8={piece:bS,moved:false,index:"03",color:black,space:"empty"},e8={piece:bK,moved:false,index:"04",color:black,space:"filled"},f8={piece:bS,moved:false,index:"05",color:black,space:"empty"},g8={piece:wS,moved:false,index:"06",color:white,space:"empty"},h8={piece:bR,moved:false,index:"07",color:black,space:"filled"}],
  
  [a7={piece:bP,moved:false,index:"10",color:black,space:"filled"},b7={piece:bP,moved:false,index:"11",color:black,space:"filled"},c7={piece:bP,moved:false,index:"12",color:black,space:"filled"},d7={piece:bP,moved:false,index:"13",color:black,space:"filled"},e7={piece:bP,moved:false,index:"14",color:black,space:"filled"},f7={piece:bP,moved:false,index:"15",color:black,space:"filled"},g7={piece:bP,moved:false,index:"16",color:black,space:"filled"},h7={piece:bP,moved:false,index:"17",color:black,space:"filled"}],
  
  [a6={piece:wS,moved:false,index:"20",color:white,space:"empty"},b6={piece:bS,moved:false,index:"21",color:black,space:"empty"},c6={piece:wS,moved:false,index:"22",color:white,space:"empty"},d6={piece:bS,moved:false,index:"23",color:black,space:"empty"},e6={piece:wS,moved:false,index:"24",color:white,space:"empty"},f6={piece:bS,moved:false,index:"25",color:black,space:"empty"},g6={piece:wS,moved:false,index:"26",color:white,space:"empty"},h6={piece:bS,moved:false,index:"27",color:black,space:"empty"}],
  
  [a5={piece:bS,moved:false,index:"30",color:black,space:"empty"},b5={piece:wS,moved:false,index:"31",color:white,space:"empty"},c5={piece:bS,moved:false,index:"32",color:black,space:"empty"},d5={piece:wS,moved:false,index:"33",color:white,space:"empty"},e5={piece:bS,moved:false,index:"34",color:black,space:"empty"},f5={piece:wS,moved:false,index:"35",color:white,space:"empty"},g5={piece:bS,moved:false,index:"36",color:black,space:"empty"},h5={piece:wS,moved:false,index:"37",color:white,space:"empty"}],
  
  [a4={piece:wS,moved:false,index:"40",color:white,space:"empty"},b4={piece:bS,moved:false,index:"41",color:black,space:"empty"},c4={piece:wS,moved:false,index:"42",color:white,space:"empty"},d4={piece:bS,moved:false,index:"43",color:black,space:"empty"},e4={piece:wS,moved:false,index:"44",color:white,space:"empty"},f4={piece:bS,moved:false,index:"45",color:black,space:"empty"},g4={piece:wS,moved:false,index:"46",color:white,space:"empty"},h4={piece:bS,moved:false,index:"47",color:black,space:"empty"}],
  
  [a3={piece:bS,moved:false,index:"50",color:black,space:"empty"},b3={piece:wS,moved:false,index:"51",color:white,space:"empty"},c3={piece:bS,moved:false,index:"52",color:black,space:"empty"},d3={piece:wS,moved:false,index:"53",color:white,space:"empty"},e3={piece:bS,moved:false,index:"54",color:black,space:"empty"},f3={piece:wS,moved:false,index:"55",color:white,space:"empty"},g3={piece:bS,moved:false,index:"56",color:black,space:"empty"},h3={piece:wS,moved:false,index:"57",color:white,space:"empty"}],
  
  [a2={piece:wP,moved:false,index:"60",color:white,space:"filled"},b2={piece:wP,moved:false,index:"61",color:white,space:"filled"},c2={piece:wP,moved:false,index:"62",color:white,space:"filled"},d2={piece:wP,moved:false,index:"63",color:white,space:"filled"},e2={piece:wP,moved:false,index:"64",color:white,space:"filled"},f2={piece:wP,moved:false,index:"65",color:white,space:"filled"},g2={piece:wP,moved:false,index:"66",color:white,space:"filled"},h2={piece:wP,moved:false,index:"67",color:white,space:"filled"}],
  
  [a1={piece:wR,moved:false,index:"70",color:white,space:"filled"},b1={piece:wS,moved:false,index:"71",color:white,space:"empty"},c1={piece:bS,moved:false,index:"72",color:black,space:"empty"},d1={piece:wS,moved:false,index:"73",color:white,space:"empty"},e1={piece:wK,moved:false,index:"74",color:white,space:"filled"},f1={piece:wS,moved:false,index:"75",color:white,space:"empty"},g1={piece:bS,moved:false,index:"76",color:black,space:"empty"},h1={piece:wR,moved:false,index:"77",color:white,space:"filled"}]
  ]

/*


let board = [
[a8={piece:bR,moved:false,index:"00",color:black,space:"filled"},b8={piece:bN,moved:false,index:"01",color:black,space:"filled"},c8={piece:bB,moved:false,index:"02",color:black,space:"filled"},d8={piece:bQ,moved:false,index:"03",color:black,space:"filled"},e8={piece:bK,moved:false,index:"04",color:black,space:"filled"},f8={piece:bB,moved:false,index:"05",color:black,space:"filled"},g8={piece:bN,moved:false,index:"06",color:black,space:"filled"},h8={piece:bR,moved:false,index:"07",color:black,space:"filled"}],

[a7={piece:bP,moved:false,index:"10",color:black,space:"filled"},b7={piece:bP,moved:false,index:"11",color:black,space:"filled"},c7={piece:bP,moved:false,index:"12",color:black,space:"filled"},d7={piece:bP,moved:false,index:"13",color:black,space:"filled"},e7={piece:bP,moved:false,index:"14",color:black,space:"filled"},f7={piece:bP,moved:false,index:"15",color:black,space:"filled"},g7={piece:bP,moved:false,index:"16",color:black,space:"filled"},h7={piece:bP,moved:false,index:"17",color:black,space:"filled"}],

[a6={piece:wS,moved:false,index:"20",color:white,space:"empty"},b6={piece:bS,moved:false,index:"21",color:black,space:"empty"},c6={piece:wS,moved:false,index:"22",color:white,space:"empty"},d6={piece:bS,moved:false,index:"23",color:black,space:"empty"},e6={piece:wS,moved:false,index:"24",color:white,space:"empty"},f6={piece:bS,moved:false,index:"25",color:black,space:"empty"},g6={piece:wS,moved:false,index:"26",color:white,space:"empty"},h6={piece:bS,moved:false,index:"27",color:black,space:"empty"}],

[a5={piece:bS,moved:false,index:"30",color:black,space:"empty"},b5={piece:wS,moved:false,index:"31",color:white,space:"empty"},c5={piece:bS,moved:false,index:"32",color:black,space:"empty"},d5={piece:wS,moved:false,index:"33",color:white,space:"empty"},e5={piece:bS,moved:false,index:"34",color:black,space:"empty"},f5={piece:wS,moved:false,index:"35",color:white,space:"empty"},g5={piece:bS,moved:false,index:"36",color:black,space:"empty"},h5={piece:wS,moved:false,index:"37",color:white,space:"empty"}],

[a4={piece:wS,moved:false,index:"40",color:white,space:"empty"},b4={piece:bS,moved:false,index:"41",color:black,space:"empty"},c4={piece:wS,moved:false,index:"42",color:white,space:"empty"},d4={piece:bS,moved:false,index:"43",color:black,space:"empty"},e4={piece:wS,moved:false,index:"44",color:white,space:"empty"},f4={piece:bS,moved:false,index:"45",color:black,space:"empty"},g4={piece:wS,moved:false,index:"46",color:white,space:"empty"},h4={piece:bS,moved:false,index:"47",color:black,space:"empty"}],

[a3={piece:bS,moved:false,index:"50",color:black,space:"empty"},b3={piece:wS,moved:false,index:"51",color:white,space:"empty"},c3={piece:bS,moved:false,index:"52",color:black,space:"empty"},d3={piece:wS,moved:false,index:"53",color:white,space:"empty"},e3={piece:bS,moved:false,index:"54",color:black,space:"empty"},f3={piece:wS,moved:false,index:"55",color:white,space:"empty"},g3={piece:bS,moved:false,index:"56",color:black,space:"empty"},h3={piece:wS,moved:false,index:"57",color:white,space:"empty"}],

[a2={piece:wP,moved:false,index:"60",color:white,space:"filled"},b2={piece:wP,moved:false,index:"61",color:white,space:"filled"},c2={piece:wP,moved:false,index:"62",color:white,space:"filled"},d2={piece:wP,moved:false,index:"63",color:white,space:"filled"},e2={piece:wP,moved:false,index:"64",color:white,space:"filled"},f2={piece:wP,moved:false,index:"65",color:white,space:"filled"},g2={piece:wP,moved:false,index:"66",color:white,space:"filled"},h2={piece:wP,moved:false,index:"67",color:white,space:"filled"}],

[a1={piece:wR,moved:false,index:"70",color:white,space:"filled"},b1={piece:wN,moved:false,index:"71",color:white,space:"filled"},c1={piece:wB,moved:false,index:"72",color:white,space:"filled"},d1={piece:wQ,moved:false,index:"73",color:white,space:"filled"},e1={piece:wK,moved:false,index:"74",color:white,space:"filled"},f1={piece:wB,moved:false,index:"75",color:white,space:"filled"},g1={piece:wN,moved:false,index:"76",color:white,space:"filled"},h1={piece:wR,moved:false,index:"77",color:white,space:"filled"}]
]

*/








//3
function loadRow (rownumber){

  let row = numbertoIndexNotation(rownumber)

  let result = (board[row][0].piece) + (line) + (board[row][1].piece) + (line)+ (board[row][2].piece) + (line) + (board[row][3].piece) + (line) + (board[row][4].piece) + (line) + (board[row][5].piece) + (line)+ (board[row][6].piece) + (line) + (board[row][7].piece) + (line)

  return result

}


//4
function displayGame (){
console.log(" ")
console.log("ON-CHAIN CHESS!")
console.log(loadRow(8))
console.log(loadRow(7))
console.log(loadRow(6))
console.log(loadRow(5))
console.log(loadRow(4))
console.log(loadRow(3))
console.log(loadRow(2))
console.log(loadRow(1))
return " "
}

console.log(displayGame())





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
index notation converters
  _____           _             _   _       _        _   _                _____                          _                
 |_   _|         | |           | \ | |     | |      | | (_)              / ____|                        | |               
   | |  _ __   __| | _____  __ |  \| | ___ | |_ __ _| |_ _  ___  _ __   | |     ___  _ ____   _____ _ __| |_ ___ _ __ ___ 
   | | | '_ \ / _` |/ _ \ \/ / | . ` |/ _ \| __/ _` | __| |/ _ \| '_ \  | |    / _ \| '_ \ \ / / _ \ '__| __/ _ \ '__/ __|
  _| |_| | | | (_| |  __/>  <  | |\  | (_) | || (_| | |_| | (_) | | | | | |___| (_) | | | \ V /  __/ |  | ||  __/ |  \__ \
 |_____|_| |_|\__,_|\___/_/\_\ |_| \_|\___/ \__\__,_|\__|_|\___/|_| |_|  \_____\___/|_| |_|\_/ \___|_|   \__\___|_|  |___/
                                                                                                                          
     
 chessPositionToIndexNotation function get position of Chess board like "f5" and slits into "f" and "5"
   lettertoIndexNotation function: gets index Notation for letters like "f" = [3]
   numbertoIndexNotation function: gets index Notation for number like "5" = [5]
*/



 function chessPositionToIndexNotation (posistion){

 let number = numbertoIndexNotation(posistion[1])
 let letter = lettertoIndexNotation(posistion[0])

 let answer = [(number)] + [(letter)];
  return answer;
 }

//console.log(chessPositionToIndexNotation("b7"))

 function lettertoIndexNotation (letter){

  var alphabet = ["a","b","c","d","e","f","g","h"]
  
  function findletterindex (item){
 
   return item === (letter)
}

  return alphabet.findIndex(findletterindex)

 }

// console.log(lettertoIndexNotation("h"))

function numbertoIndexNotation (number){
   let answer = (number * -1) + 8
     return answer;
 }

// console.log(numbertoIndexNotation(3))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
   __                  _   _                  
  / _|                | | (_)                 
 | |_ _   _ _ __   ___| |_ _  ___  _ __  ___  
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __| 
 | | | |_| | | | | (__| |_| | (_) | | | \__ \ 
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/ 
                                              
*/                                              



//this is function go's ayo, replace this position with the appropriate white or black space
function bSorwS (position){

  let bsws = chessPositionToIndexNotation(position)
 if (bsws[0] % 2 == 0) {
  if (bsws[1] % 2 == 0){
   return board[bsws[0]][bsws[1]].piece = wS;
  } else {board[bsws[0]][bsws[1]].piece = bS;}
 } else {
  if (bsws[1] % 2 == 0){
    return board[bsws[0]][bsws[1]].piece = bS;
    } else {board[bsws[0]][bsws[1]].piece = wS;}
  }
}

//this one grabs the array of available moves, and checks if you want to move there
function findValidity (array,p2){




  console.log(array)
  console.log(" ^dev tools^ ")


 let specialMoveCharacter = chessPositionToIndexNotation(globalPosition2) + globalPosition2[2]; 
 let target = p2.index;





//valid NormalMoves
    function approvedMoveInArray (item){
      return (item == target)
  }
  

//valid Special Moves (return items over length of 3 & equals to position2)
  function approvedSpecialMoveInArray (item){



    if (item.length > 2 & item == specialMoveCharacter){

      return true

    } else if (Rookright = "undefined" || Rookleft == "undefined"){
      
    } else if (item === Rookright || item === Rookleft ){
      
      return true
    }

    return
    
    }

 









  let validMove = array.some(approvedMoveInArray);
  let validSpecialmove = array.some(approvedSpecialMoveInArray);


  let valid = "Invalid Move"


  if (validSpecialmove == true){


    
//Make special moves are for right color

  specialvalidPlayerAndColor = sameColorPlayerAndPiece(globalPlayer,globalPosition1)  


//if player moves right color, then relay to Piece Logic Switch
  if (specialvalidPlayerAndColor = "White player moves White Piece"){

     valid = "Valid White Special Move"
    

  } else if (specialvalidPlayerAndColor = "Black player moves Black Piece"){

    valid = "Valid Black Special Move"

    

  } 


  //if promotion logic






  } else if (validMove == true) {

//run basic swap

 valid = "Valid Move Basic Swap";

}

return valid

}





function whitepromotionSwitch (letter){

    let promotionStatement = "You have chosen ";

     let answer = "N/A";

    switch(letter) {    
      case "Q": 
        answer = (console.log(promotionStatement + "Queen"),"♕");
        break;
      case "B": 
        answer = (console.log(promotionStatement + "Bishop"),"♗");
        break;
      case "R": 
        answer = (console.log(promotionStatement + "Rook"),"♖");
        break;
      case "N": 
        answer = (console.log(promotionStatement + "Knight"),"♘");
        break;
    
    }
    return answer;
    }


function blackPromotionSwitch (letter){

  let promotionStatement = "You have chosen ";

   let answer = "N/A";

  switch(letter) {    
    case "Q": 
      answer = (console.log(promotionStatement + "Queen"),"♛");
      break;
    case "B": 
      answer = (console.log(promotionStatement + "Bishop"),"♝");
      break;
    case "R": 
      answer = (console.log(promotionStatement + "Rook"),"♜");
      break;
    case "N": 
      answer = (console.log(promotionStatement + "Knight"),"♞");
      break;
  
  }
  return answer;
  }


function promoMessage(){

console.log("Your Pawn needs to be Promoted!")
console.log(" ")
console.log(`add a Capital letter to desired postion, so like "a8Q" for your pawn to be promoted to a Queen!`)
console.log(" ")
console.log("pick a Piece")
console.log(" ")
console.log("Q = Queen")
console.log("B = Bishop")
console.log("R = Rook")
console.log("N = Knight")

}


function whitepromoTime (parameter){

promoMessage();

let letterP = parameter

return whitepromotionSwitch(letterP)


}

function blackpromoTime (parameter){

  promoMessage();
  
  let letterP = parameter
  
  return blackPromotionSwitch(letterP)
  
  
  }







  function leftWhiteCastle () {




//white king e1 to c1 aka [7][2]
board[7][2].piece = board[7][4].piece;

//white rook a1 to d1 aka [7][3]
board[7][3].piece = board[7][0].piece

//replace a1 & e1 with empty square

bSorwS("a1")
bSorwS("e1")

//reset: space, moved & color
board[7][0].space = "empty";
board[7][4].space = "empty";
board[7][0].moved = false;
board[7][4].moved = false;
board[7][0].color = black;
board[7][4].color = black;


return "You have Left Castled"
}

  function rightWhiteCastle (){

//white king e1 to g1 aka [7][6]
board[7][6].piece = board[7][4].piece;

//white rook h1 to f1 aka [7][5]
board[7][5].piece = board[7][7].piece

//replace h1 & e1 with empty square

bSorwS("h1")
bSorwS("e1")

//reset: space, moved & color
board[7][7].space = "empty";
board[7][4].space = "empty";
board[7][7].moved = false;
board[7][4].moved = false;
board[7][7].color = black;
board[7][4].color = black;


return "You have Right Castled"

  }

  function leftBlackCastle (){

//black king e8 [0][4] to c8 aka [0][2]
board[0][2].piece = board[0][4].piece;

//black rook a8[0][0] to d8 aka [0][3]
board[0][3].piece = board[0][0].piece

//replace e8 & a8 with empty square

bSorwS("e8")
bSorwS("a8")

//reset: space, moved & color
board[0][0].space = "empty";
board[0][4].space = "empty";
board[0][0].moved = false;
board[0][4].moved = false;
board[0][0].color = black;
board[0][4].color = black;


return "You have Left Castled"


  }

  function rightBlackCastle (){

//black king e1 to g1 aka [7][6]
board[0][6].piece = board[0][4].piece;

//black rook h1 to f1 aka [7][5]
board[0][5].piece = board[0][7].piece

//replace h1 & e1 with empty square

bSorwS("h8")
bSorwS("e8")

//reset: space, moved & color
board[0][7].space = "empty";
board[0][4].space = "empty";
board[0][7].moved = false;
board[0][4].moved = false;
board[0][7].color = black;
board[0][4].color = black;


return "You have Right Castled"


  }


  function castleSwitch (castle){

let c1 = castle[0] + castle[1];



    switch(c1) {  

      case "a1": 
        leftWhiteCastle();
        break;
      case "h1": 
        rightWhiteCastle();
        break;
      case "a8": 
      leftBlackCastle();
        break;
      case "h8": 
      rightBlackCastle()
        break;
        case "e8" : 
        whichRookCastle();
        break;
        case "e1" : 
        whichRookCastle();
        break;
    }
    return ;
}




function whichRookCastle (){
 



if (globalPosition2 === "e8C" ){



  if (Rookleft === "04Ca" & globalPosition1 === "a8"){

   
    leftBlackCastle()
    
  }

  if (Rookright === "04Cb" & globalPosition1 === "h8"){

    rightBlackCastle()

  }





} else if (globalPosition2 === "e1C"){

  if (Rookleft === "74Ca" & globalPosition1 === "a1"){

    leftWhiteCastle()

  }

  if (Rookright === "74Cb" & globalPosition1 === "h1"){

    rightWhiteCastle()

  }





}


}






//make sure right Player moves right Color
function sameColorPlayerAndPiece (player,position1){

  let p1IN = chessPositionToIndexNotation(position1)
  let p1Object = board[p1IN[0]][p1IN[1]];




  if (player == "white"){
  
    if (p1Object.color == "white"){
  
      return "Valid"
  
  } else {
    console.log("White Player can only move white Pieces")
  }
  
  } else {
  
    if (p1Object.color == "black"){
  
    return "Valid"
  
  } else {
    console.log("Black Player can only move black Pieces")
  }
  
  }


}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////////////////////////
/*
   _____                        _                 _         _____         _ _       _     
  / ____|                      | |               (_)       / ____|       (_) |     | |    
 | |  __  __ _ _ __ ___   ___  | |     ___   __ _ _  ___  | (_____      ___| |_ ___| |__  
 | | |_ |/ _` | '_ ` _ \ / _ \ | |    / _ \ / _` | |/ __|  \___ \ \ /\ / / | __/ __| '_ \ 
 | |__| | (_| | | | | | |  __/ | |___| (_) | (_| | | (__   ____) \ V  V /| | || (__| | | |
  \_____|\__,_|_| |_| |_|\___| |______\___/ \__, |_|\___| |_____/ \_/\_/ |_|\__\___|_| |_|
                                             __/ |                                        
                                            |___/                                         
*/
//game Logic Switch for the White/Black Pieces


function pieceLogicSwitch (p1,p2){

  let answer = "unregistered logic"

    switch(p1.piece) {  

      case "▯": 
        answer = ["Invalid Move"];
        break;
        case "♙": 
        answer = [whitePawnGameLogic(p1,p2)];
        break;
      case "♖":  
        answer = [whiteRookGameLogic(p1,p2)];
        break;
      case "♘":  
        answer = [whiteKnightGameLogic(p1,p2)];
        break;
      case "♗":  
        answer = [whiteBishopGameLogic(p1,p2)];
        break;
      case "♔":  
        answer = [whiteKingGameLogic(p1,p2)];
        break;
      case "♕":  
        answer = [whiteQueenGameLogic(p1,p2)];
        break;
      case "▮":
        answer = ["Invalid Move"];
        break;
      case "♟": 
        answer = [blackPawnGameLogic(p1,p2)];
        break;
      case "♜": 
        answer = [blackRookGameLogic(p1,p2)];
        break;
      case "♞": 
        answer = [blackKnightGameLogic(p1,p2)];
        break;
      case "♝":
        answer = [blackBishopGameLogic(p1,p2)];
        break;
      case "♚": 
        answer = [blackKingGameLogic(p1,p2)];
        break;
      case "♛":  
        answer = [blackQueenGameLogic(p1,p2)];
        break;

    }
    return answer;

}



function whiteSpecialMovesSwitch (){

  letter = globalPosition2

  switch(globalPosition2[2]) {    
    case "C": 
      castleSwitch(globalPosition2);
      break;
    case "N": 
      whitepromotionSwitch(globalPosition2[2]);
      break;
    case "Q": 
      whitepromotionSwitch(globalPosition2[2]);
      break;
    case "B": 
      whitepromotionSwitch(globalPosition2[2]);
      break;
    case "R":
      whitepromotionSwitch(globalPosition2[2]);
      break;
  }
  return ;
}

function blackSpecialMovesSwitch (){

letter = globalPosition2[2]

  switch(letter) {    
    case "C": 
      castleSwitch(globalPosition2);
      break;
    case "N": 
      blackpromotionSwitch(globalPosition2[2]);
      break;
    case "Q": 
      blackpromotionSwitch(globalPosition2[2]);
      break;
    case "B": 
      blackpromotionSwitch(globalPosition2[2]);
      break;
    case "R":
      blackpromotionSwitch(globalPosition2[2]);
      break;
  }
  return ;
}



function pieceToName (position){

  let answer = "Unknown Name"

    switch(position) {  

      case "▯": 
      case "▮":
        answer = "Space"
        break;
        case "♙": 
        case "♟": 
        answer = "Pawn"
        break;
      case "♖": 
      case "♜":  
        answer = "Rook"
        break;
      case "♘":  
      case "♞": 
        answer = "Knight"
        break;
      case "♗": 
      case "♝": 
        answer = "Bishop"
        break;
      case "♔":  
      case "♚": 
        answer = "Queen"
        break;
      case "♕": 
      case "♛": 
        answer = "King"
        break;
    }
    return answer;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
   _____ _                     _____ _                 _                 _      
  / ____| |                   |  __ (_)               | |               (_)     
 | |    | |__   ___  ___ ___  | |__) |  ___  ___ ___  | |     ___   __ _ _  ___ 
 | |    | '_ \ / _ \/ __/ __| |  ___/ |/ _ \/ __/ _ \ | |    / _ \ / _` | |/ __|
 | |____| | | |  __/\__ \__ \ | |   | |  __/ (_|  __/ | |___| (_) | (_| | | (__ 
  \_____|_| |_|\___||___/___/ |_|   |_|\___|\___\___| |______\___/ \__, |_|\___|
                                                                    __/ |       
                                                                   |___/        
                                                       .::.
                                            _()_       _::_
                                  _O_     _/____\_   _/____\_
           _  _  _     ^^__      ////\    \      /   \      /
          | || || |   /  - \_   {     }    \____/     \____/
          |_______| <|    __<    \___/     (____)     (____)
    _     \__ ___ / <|    \      (___)      |  |       |  |
   (_)     |___|_|  <|     \      |_|       |__|       |__|
  (___)    |_|___|  <|______\    /   \     /    \     /    \
  _|_|_    |___|_|   _|____|_   (_____)   (______)   (______)
 (_____)  (_______) (________) (_______) (________) (________)
 /_____\  /_______\ /________\ /_______\ /________\ /________\

*/



//logic functions for the WHITE Pawn (*still needs promotion logic)
function whitePawnGameLogic (p1,p2){

    let possibleMoves = [];



    //if havent moved, then can go forward 1 or 2 space
    if (p1.moved === false ){

        for (let i = 1; i < 3; i++){
  
            if (board[p1.index[0] - i][p1.index[1]].space === "empty"){
  
              possibleMoves.push(board[p1.index[0] - i][p1.index[1]].index);
    
            } else {
              i = 3
            }
          
        }   
            } else {

            //has moved pawn, only forward 1 or diagonal attack

            if (p1.index[0] - 1 >= 0){
      
            //go forward

                if (board[p1.index[0] - 1][p1.index[1]].space === "empty"){
            
                    possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);
                     
            } else{

                if (board[p1.index[0] - 1][p1.index[1]].color === "black"){

                    possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);

                }
            }

            //attack diagonally left
            if (p1.index[1] - 1 > -1){
      
              if (board[p1.index[0] - 1][p1.index[1] - 1].space === "empty" ){

                possibleMoves.push(board[p1.index[0] - 1][p1.index[1] - 1].index);

                
              } else{

                if (board[p1.index[0] - 1][p1.index[1] - 1].color === "black" ){
                    possibleMoves.push(board[p1.index[0] - 1][p1.index[1] - 1].index);
                }

              }
              
            }          

            //attack diagonally right
              if (p1.index[1] +++ 1 < 8){

                if (board[p1.index[0] - 1][p1.index[1] +++ 1].space === "empty" ){

                  possibleMoves.push(board[p1.index[0] - 1][p1.index[1] +++ 1].index);


                } else{

                    if(board[p1.index[0] - 1][p1.index[1] +++ 1].color === "black"){
                        possibleMoves.push(board[p1.index[0] - 1][p1.index[1] +++ 1].index);
                    }
              }
            }
          } 
        }   
    
 

    
    let valid = findValidity(possibleMoves,p2);
    
    return valid;

 
}

//logic functions for the BLACK Pawn (*still needs promotion logic)
function blackPawnGameLogic (p1,p2) {

let possibleMoves = [];


if (p1.moved === false ){



  //if havent moved, then can go forward 1 or 2 space
  for (let i = 1; i < 3; i++){

      if (board[p1.index[0] +++ i][p1.index[1]].space === "empty"){

        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1]].index);

      } else {
        i = 3
      }
    
  }   
      } else {

      //has moved pawn, only forward 1 or diagonal attack


      console.log("has moved")


  

      if (p1.index[0] +++ 1 < 8){

      //go forward

        


          if (board[p1.index[0] +++ 1][p1.index[1]].space === "empty"){
      
              possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);
               
      } else{

          if (board[p1.index[0] +++ 1][p1.index[1]].color === "white"){

              possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);

          }
      }

      //attack diagonally left
      if (p1.index[1] - 1 > -1){

        if (board[p1.index[0] +++ 1][p1.index[1] - 1].space === "empty" ){

          possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1] - 1].index);
          
        } else{

          if (board[p1.index[0] +++ 1][p1.index[1] - 1].color === "white" ){
              possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1] - 1].index);
          }

        }
        
      }          

      //attack diagonally right
        if (p1.index[1] +++ 1 < 8){

          if (board[p1.index[0] +++ 1][p1.index[1] +++ 1].space === "empty" ){

            possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1] +++ 1].index);


          } else{

              if (board[p1.index[0] +++ 1][p1.index[1] +++ 1].color === "white"){
                  possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1] +++ 1].index);
              }
        }
      }
    } 
  }   









let valid = findValidity(possibleMoves,p2);

return valid;

}



//logic function for white rook (need castle with king logic)
function whiteRookGameLogic(p1,p2){

  let possibleMoves = [];

  //all possible moves forwards

  for (let rookIndex1 = (p1.index[0] - 1); rookIndex1 > 0; rookIndex1--){

    if (board[rookIndex1][(p1.index[1])].space === "empty" ){

    possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

 } else {

  if (board[rookIndex1][(p1.index[1])].color === "black" ){

possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

  }

  rookIndex1 = 0;

 }

}

  //all possible moves backward
  for (let rookIndex2 = (p1.index[0] +++ 1); rookIndex2 < 8; rookIndex2++){


    if (board[rookIndex2][(p1.index[1])].space === "empty" ){

      possibleMoves.push(board[rookIndex2][(p1.index[1])].index);

      } else {

      if (board[rookIndex2][(p1.index[1])].color === "black" ){

        possibleMoves.push(board[rookIndex2][(p1.index[1])].index);
        
      }

      rookIndex2 = 8;

    }

  }

  //all possible moves right

  for (let rookIndex1 = p1.index[1] +++ 1; rookIndex1 < 8; rookIndex1++){

    if (board[p1.index[0]][rookIndex1].space === "empty" ) {

      possibleMoves.push(board[p1.index[0]][rookIndex1].index);

      } else {

      if (board[p1.index[0]][rookIndex1].color === "black" ) {

        possibleMoves.push(board[p1.index[0]][rookIndex1].index);
      
        rookIndex1 = 9;
      }

      
    
    }
    
  }


  //all possible moves left

  for (let rookIndex1 = (p1.index[1] - 1); rookIndex1 > -1; rookIndex1--){

   if (board[p1.index[0]][rookIndex1].space === "empty" ){

    possibleMoves.push(board[p1.index[0]][rookIndex1].index);

 } else {


  if (board[p1.index[0]][rookIndex1].color === "black" ){
    possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  }


  rookIndex1 = 0;

 }
}



//king Casling Logic left

if (board[[7]][[0]].moved === false & board[7][4].moved === false ){




  if (board[7][1].space === "empty" & board[7][2].space === "empty"){
  


    if (board[7][3].space === "empty") {

       possibleMoves.push(board[7][4].index + "Ca");
       Rookleft = (board[7][4].index + "Ca");
  
      }
    }
  }
  
  //king Casling Logic right



  if (board[7][7].moved == false & board[7][4].moved == false ){
  
    
    if (board[7][6].space == "empty" & board[7][5].space == "empty"){
    
    
         possibleMoves.push(board[7][4].index + "Cb");
         Rookright = (board[7][4].index + "Cb");
    }
  }





let valid = findValidity(possibleMoves,p2);
return valid

}



//logic function for black rook (need castle with king logic)
function blackRookGameLogic(p1,p2){




  let possibleMoves = [];

  //all possible moves forwards

  for (let rookIndex1 = (p1.index[0] - 1); rookIndex1 > 0; rookIndex1--){

    if (board[rookIndex1][(p1.index[1])].space === "empty" ){

    possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

 } else {

  if (board[rookIndex1][(p1.index[1])].color === "white" ){

possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

  }

  rookIndex1 = 0;

 }

}

  //all possible moves backward
  for (let rookIndex2 = (p1.index[0] +++ 1); rookIndex2 < 8; rookIndex2++){


    if (board[rookIndex2][(p1.index[1])].space === "empty" ){

      possibleMoves.push(board[rookIndex2][(p1.index[1])].index);

      } else {

      if (board[rookIndex2][(p1.index[1])].color === "white" ){

        possibleMoves.push(board[rookIndex2][(p1.index[1])].index);
        
      }

      rookIndex2 = 8;

    }

  }

  //all possible moves right

  for (let rookIndex1 = p1.index[1] +++ 1; rookIndex1 < 8; rookIndex1++){

    if (board[p1.index[0]][rookIndex1].space === "empty" ) {

      possibleMoves.push(board[p1.index[0]][rookIndex1].index);

      } else {

      if (board[p1.index[0]][rookIndex1].color === "white" ) {

        possibleMoves.push(board[p1.index[0]][rookIndex1].index);
      
        rookIndex1 = 9;
      }

      
    
    }
    
  }

  //all possible moves left

  for (let rookIndex1 = (p1.index[1] - 1); rookIndex1 > -1; rookIndex1--){

   if (board[p1.index[0]][rookIndex1].space === "empty" ){

    possibleMoves.push(board[p1.index[0]][rookIndex1].index);

 } else {


  if (board[p1.index[0]][rookIndex1].color === "white" ){
    possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  }


  rookIndex1 = 0;

 }
}



//king Casling Logic left

if (board[p1.index[0]][p1.index[0]].moved === false & board[0][4].moved === false ){

  if (board[0][1].space === "empty" & board[0][2].space === "empty"){
  
    if (board[0][3].space === "empty") {

       possibleMoves.push(board[0][4].index + "Ca");
       Rookleft = (board[0][4].index + "Ca");
  
      }
    }
  }
  
  //king Casling Logic right




  if (board[0][7].moved == false & board[0][4].moved == false ){
  
    
    if (board[0][6].space == "empty" & board[0][5].space == "empty"){
    
    
         possibleMoves.push(board[0][4].index + "Cb");
         Rookright = (board[0][4].index + "Cb");
    }
  }



  


let valid = findValidity(possibleMoves,p2);
return valid

}



//logic function for white Knight
function whiteKnightGameLogic(p1,p2){


  let possibleMoves = [];


  let pieceInfront = p1.index[0] - 2; //pieceInfront > -1
  let pieceBehind = p1.index[0] +++ 2; //pieceBehind < 8
  let pieceInfrontleft = p1.index[1] - 1; //pieceInfrontleft > -1
  let pieceInfrontright = p1.index[1] +++ 1; //pieceInfrontright < 8

//forward to left
if (pieceInfrontleft > -1 & pieceInfront > -1){
if (board[pieceInfront][pieceInfrontleft].space === "filled"){

  if (board[pieceInfront][pieceInfrontleft].color === "black"){

    possibleMoves.push(board[pieceInfront][pieceInfrontleft].index);

  }


} else {

  possibleMoves.push(board[pieceInfront][pieceInfrontleft].index);

}

}

//forward to right
if (pieceInfront > -1 & pieceInfrontright < 8){
if (board[pieceInfront][pieceInfrontright].space === "filled"){

  if (board[pieceInfront][pieceInfrontright].color === "black"){

    possibleMoves.push(board[pieceInfront][pieceInfrontright].index);

  }


} else {

  possibleMoves.push(board[pieceInfront][pieceInfrontright].index);

}

}


//backward to left(checked)
if (pieceInfrontleft > -1 & pieceBehind < 8){
if (board[pieceBehind][pieceInfrontleft].space === "filled"){

  if (board[pieceBehind][pieceInfrontleft].color === "black"){

    possibleMoves.push(board[pieceBehind][pieceInfrontleft].index);

  }


} else {

  possibleMoves.push(board[pieceBehind][pieceInfrontleft].index);

}

}

//backward to right(checked)
if(pieceBehind < 8 & pieceInfrontright < 8){
if (board[pieceBehind][pieceInfrontright].space === "filled"){

  if (board[pieceBehind][pieceInfrontright].color === "black"){

    possibleMoves.push(board[pieceBehind][pieceInfrontright].index);

  }


} else {

  possibleMoves.push(board[pieceBehind][pieceInfrontright].index);

}

}

let upAttack = p1.index[0] - 1; // upAttack > -1
let downAttack = p1.index[0] +++ 1; //downAttack < 8
let leftSide = p1.index[1] - 2; //leftSide > -1
let rightSide = p1.index[1] +++ 2; //rightSide < 8

//leftside upattack 
if (upAttack > -1 & leftSide > -1){

if (board[upAttack][leftSide].space === "filled"){

  if (board[upAttack][leftSide].color === "black"){

    possibleMoves.push(board[upAttack][leftSide].index);

  }


} else {

  possibleMoves.push(board[upAttack][leftSide].index);

}

}

//rightside upattack
if (rightSide < 8 & upAttack > -1){

if (board[upAttack][rightSide].space === "filled"){

  if (board[upAttack][rightSide].color === "black"){

    possibleMoves.push(board[upAttack][rightSide].index);

  }


} else {

  possibleMoves.push(board[upAttack][rightSide].index);

}

}

//leftside downattack
if (leftSide > -1 & downAttack < 8 ){

if (board[downAttack][leftSide].space === "filled"){

  if (board[downAttack][leftSide].color === "black"){

    possibleMoves.push(board[downAttack][leftSide].index);

  }


} else {

  possibleMoves.push(board[downAttack][leftSide].index);

}

}

//rightside downattack
if (downAttack < 8 & rightSide < 8){

if (board[downAttack][rightSide].space === "filled"){

  if (board[downAttack][rightSide].color === "black"){

    possibleMoves.push(board[downAttack][rightSide].index);

  }


} else {

  possibleMoves.push(board[downAttack][rightSide].index);

}

}

  let valid = findValidity(possibleMoves,p2);
  return valid

}

//logic function for black Knight
function blackKnightGameLogic(p1,p2){

  let possibleMoves = [];


  let pieceInfront = p1.index[0] - 2; //pieceInfront > -1
  let pieceBehind = p1.index[0] +++ 2; //pieceBehind < 8
  let pieceInfrontleft = p1.index[1] - 1; //pieceInfrontleft > -1
  let pieceInfrontright = p1.index[1] +++ 1; //pieceInfrontright < 8

//forward to left
if (pieceInfrontleft > -1 & pieceInfront > -1){
if (board[pieceInfront][pieceInfrontleft].space === "filled"){

  if (board[pieceInfront][pieceInfrontleft].color === "white"){

    possibleMoves.push(board[pieceInfront][pieceInfrontleft].index);

  }


} else {

  possibleMoves.push(board[pieceInfront][pieceInfrontleft].index);

}

}

//forward to right
if (pieceInfront > -1 & pieceInfrontright < 8){
if (board[pieceInfront][pieceInfrontright].space === "filled"){

  if (board[pieceInfront][pieceInfrontright].color === "white"){

    possibleMoves.push(board[pieceInfront][pieceInfrontright].index);

  }


} else {

  possibleMoves.push(board[pieceInfront][pieceInfrontright].index);

}

}


//backward to left
if (pieceInfrontleft > -1 & pieceBehind < 8){
if (board[pieceBehind][pieceInfrontleft].space === "filled"){

  if (board[pieceBehind][pieceInfrontleft].color === "white"){

    possibleMoves.push(board[pieceBehind][pieceInfrontleft].index);

  }


} else {

  possibleMoves.push(board[pieceBehind][pieceInfrontleft].index);

}

}

//backward to right
if(pieceBehind < 8 & pieceInfrontright < 8){
if (board[pieceBehind][pieceInfrontright].space === "filled"){

  if (board[pieceBehind][pieceInfrontright].color === "white"){

    possibleMoves.push(board[pieceBehind][pieceInfrontright].index);

  }


} else {

  possibleMoves.push(board[pieceBehind][pieceInfrontright].index);

}

}

let upAttack = p1.index[0] - 1; // upAttack > -1
let downAttack = p1.index[0] +++ 1; //downAttack < 8
let leftSide = p1.index[1] - 2; //leftSide > -1
let rightSide = p1.index[1] +++ 2; //rightSide < 8

//leftside upattack
if (upAttack > -1 & leftSide > -1){

if (board[upAttack][leftSide].space === "filled"){

  if (board[upAttack][leftSide].color === "white"){

    possibleMoves.push(board[upAttack][leftSide].index);

  }


} else {

  possibleMoves.push(board[upAttack][leftSide].index);

}

}

//rightside upattack
if (rightSide < 8 & upAttack > -1){

if (board[upAttack][rightSide].space === "filled"){

  if (board[upAttack][rightSide].color === "white"){

    possibleMoves.push(board[upAttack][rightSide].index);

  }


} else {

  possibleMoves.push(board[upAttack][rightSide].index);

}

}

//leftside downattack
if (leftSide > -1 & downAttack < 8 ){

if (board[downAttack][leftSide].space === "filled"){

  if (board[downAttack][leftSide].color === "white"){

    possibleMoves.push(board[downAttack][leftSide].index);

  }


} else {

  possibleMoves.push(board[downAttack][leftSide].index);

}

}

//rightside downattack
if (downAttack < 8 & rightSide < 8){

if (board[downAttack][rightSide].space === "filled"){

  if (board[downAttack][rightSide].color === "white"){

    possibleMoves.push(board[downAttack][rightSide].index);

  }

} else {

  possibleMoves.push(board[downAttack][rightSide].index);

}

}

  let valid = findValidity(possibleMoves,p2);
  return valid


}


//logic function for white Bishop
function whiteBishopGameLogic(p1,p2){


  let possibleMoves = [];


//up right
  for (let i = 1; i < 8; i++) {

    if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){

      if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){

        possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)

      } else {

        if(board[p1.index[0] - i][p1.index[1] +++ i].color === "black"){
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
        }

        i = 8;
      }

    }

  }


  //up left

  for (let i = 1; i < 8; i++){

    if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){

      if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){

        possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)

      } else {

        if(board[p1.index[0] - i][p1.index[1] - i].color === "black"){
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
        }

        i = 8;
      }

    }

  }


  //down left
  for (let i = 1; i < 8; i++){


    if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){

      if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){

        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)

      } else {

        if(board[p1.index[0] +++ i][p1.index[1] - i].color === "black"){
          possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
        }

        i = 8;
      }

    }

  }

//down right
for (let i = 1; i < 8; i++){


  if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){

    if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){

      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)

    } else {

      if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "black"){
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
      }

      i = 8;
    }

  }

}


  let valid = findValidity(possibleMoves,p2);
  return valid
}

//logic function for Black Bishop
function blackBishopGameLogic(p1,p2){

  let possibleMoves = [];


  //up right
    for (let i = 1; i < 8; i++) {
  
      if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){
  
        if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){
  
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
  
        } else {
  
          if(board[p1.index[0] - i][p1.index[1] +++ i].color === "white"){
            possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
          }
  
          i = 8;
        }
  
      }
  
    }
  
  
    //up left
  
    for (let i = 1; i < 8; i++){
  
      if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){
  
        if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){
  
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
  
        } else {
  
          if(board[p1.index[0] - i][p1.index[1] - i].color === "white"){
            possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
          }
  
          i = 8;
        }
  
      }
  
    }
  
  
    //down left
    for (let i = 1; i < 8; i++){
  
  
      if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){
  
        if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){
  
          possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
  
        } else {
  
          if(board[p1.index[0] +++ i][p1.index[1] - i].color === "white"){
            possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
          }
  
          i = 8;
        }
  
      }
  
    }
  
  //down right
  for (let i = 1; i < 8; i++){
  
  
    if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){
  
      if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){
  
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
  
      } else {
  
        if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "white"){
          possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
        }
  
        i = 8;
      }
  
    }
  
  }
  
  
    let valid = findValidity(possibleMoves,p2);
    return valid

}

//logic function for White Queen
function whiteQueenGameLogic(p1,p2){

let possibleMoves = [];


//up right Diagonal Move
for (let i = 1; i < 8; i++) {

  if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){

    if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] +++ i].color === "black"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
      }

      i = 8;
    }

  }

}


//up left Diagonal Move
for (let i = 1; i < 8; i++){

  if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] - i].color === "black"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

}


//down left Diagonal Move
for (let i = 1; i < 8; i++){


  if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] +++ i][p1.index[1] - i].color === "black"){
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

}

//down right Diagonal Move
for (let i = 1; i < 8; i++){


if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){

  if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){

    possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)

  } else {

    if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "black"){
      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
    }

    i = 8;
  }

}

}

//moves directly up
  for (let rookIndex1 = (p1.index[0] - 1); rookIndex1 > 0; rookIndex1--){

    if (board[rookIndex1][(p1.index[1])].space === "empty" ){

    possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

 } else {

  if (board[rookIndex1][(p1.index[1])].color === "black" ){

possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

  }

  rookIndex1 = 0;

 }

}

//moves directly down
  for (let rookIndex2 = (p1.index[0] +++ 1); rookIndex2 < 8; rookIndex2++){


    if (board[rookIndex2][(p1.index[1])].space === "empty" ){

      possibleMoves.push(board[rookIndex2][(p1.index[1])].index);

      } else {

      if (board[rookIndex2][(p1.index[1])].color === "black" ){

        possibleMoves.push(board[rookIndex2][(p1.index[1])].index);
        
      }

      rookIndex2 = 8;

    }

  }

//moves directly right
  for (let rookIndex1 = p1.index[1] +++ 1; rookIndex1 < 8; rookIndex1++){

    if (board[p1.index[0]][rookIndex1].space === "empty" ) {

      possibleMoves.push(board[p1.index[0]][rookIndex1].index);

      } else {

      if (board[p1.index[0]][rookIndex1].color === "black" ) {

        possibleMoves.push(board[p1.index[0]][rookIndex1].index);
      
        rookIndex1 = 9;
      }

      
    
    }
    
  }

//moves directly left
  for (let rookIndex1 = (p1.index[1] - 1); rookIndex1 > -1; rookIndex1--){

   if (board[p1.index[0]][rookIndex1].space === "empty" ){

    possibleMoves.push(board[p1.index[0]][rookIndex1].index);

 } else {


  if (board[p1.index[0]][rookIndex1].color === "black" ){
    possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  }


  rookIndex1 = 0;

 }
}










  let valid = findValidity(possibleMoves,p2);
  return valid
}

//logic function for Black Queen
function blackQueenGameLogic(p1,p2){

  let possibleMoves = [];


  //up right Diagonal Move
  for (let i = 1; i < 8; i++) {
  
    if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){
  
      if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){
  
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
  
      } else {
  
        if(board[p1.index[0] - i][p1.index[1] +++ i].color === "white"){
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
        }
  
        i = 8;
      }
  
    }
  
  }
  
  
  //up left Diagonal Move
  for (let i = 1; i < 8; i++){
  
    if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){
  
      if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){
  
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
  
      } else {
  
        if(board[p1.index[0] - i][p1.index[1] - i].color === "white"){
          possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
        }
  
        i = 8;
      }
  
    }
  
  }
  
  
  //down left Diagonal Move
  for (let i = 1; i < 8; i++){
  
  
    if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){
  
      if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){
  
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
  
      } else {
  
        if(board[p1.index[0] +++ i][p1.index[1] - i].color === "white"){
          possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
        }
  
        i = 8;
      }
  
    }
  
  }
  
  //down right Diagonal Move
  for (let i = 1; i < 8; i++){
  
  
  if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){
  
    if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){
  
      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
  
    } else {
  
      if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "white"){
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
      }
  
      i = 8;
    }
  
  }
  
  }
  
  //moves directly up
    for (let rookIndex1 = (p1.index[0] - 1); rookIndex1 > 0; rookIndex1--){
  
      if (board[rookIndex1][(p1.index[1])].space === "empty" ){
  
      possibleMoves.push(board[rookIndex1][(p1.index[1])].index);
  
   } else {
  
    if (board[rookIndex1][(p1.index[1])].color === "white" ){
  
  possibleMoves.push(board[rookIndex1][(p1.index[1])].index);
  
    }
  
    rookIndex1 = 0;
  
   }
  
  }
  
  //moves directly down
    for (let rookIndex2 = (p1.index[0] +++ 1); rookIndex2 < 8; rookIndex2++){
  
  
      if (board[rookIndex2][(p1.index[1])].space === "empty" ){
  
        possibleMoves.push(board[rookIndex2][(p1.index[1])].index);
  
        } else {
  
        if (board[rookIndex2][(p1.index[1])].color === "white" ){
  
          possibleMoves.push(board[rookIndex2][(p1.index[1])].index);
          
        }
  
        rookIndex2 = 8;
  
      }
  
    }
  
  //moves directly right
    for (let rookIndex1 = p1.index[1] +++ 1; rookIndex1 < 8; rookIndex1++){
  
      if (board[p1.index[0]][rookIndex1].space === "empty" ) {
  
        possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  
        } else {
  
        if (board[p1.index[0]][rookIndex1].color === "white" ) {
  
          possibleMoves.push(board[p1.index[0]][rookIndex1].index);
        
          rookIndex1 = 9;
        }
  
        
      
      }
      
    }
  
  //moves directly left
    for (let rookIndex1 = (p1.index[1] - 1); rookIndex1 > -1; rookIndex1--){
  
     if (board[p1.index[0]][rookIndex1].space === "empty" ){
  
      possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  
   } else {
  
  
    if (board[p1.index[0]][rookIndex1].color === "white" ){
      possibleMoves.push(board[p1.index[0]][rookIndex1].index);
    }
  
  
    rookIndex1 = 0;
  
   }
  }
  
  
  
    let valid = findValidity(possibleMoves,p2);
    return valid

}

//logic function for White King 
function whiteKingGameLogic(p1,p2){

  let possibleMoves = [];

//Diagonal Directions

  //up right Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++) {

  if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){

    if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] +++ i].color === "black"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
      }

      i = 8;
    }

  }

  }

  //up left Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){

  if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] - i].color === "black"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

  }

  //down left Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){


  if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] +++ i][p1.index[1] - i].color === "black"){
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

  }

  //down right Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){


if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){

  if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){

    possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)

  } else {

    if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "black"){
      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
    }

    i = 8;
  }

}

  }


//Vertical & Horizontal Directions

  //directly above moves (only by 1)

  if (p1.index[0] - 1 != -1){

if (board[p1.index[0] - 1][p1.index[1]].space === "empty"){

  possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);

} else {
  if (board[p1.index[0] - 1][p1.index[1]].color === "black"){

    possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);
  }
  
}
  }

  //directly below moves (only by 1)

  if (p1.index[0] +++ 1 != "8"){

if (board[p1.index[0] +++ 1][p1.index[1]].space === "empty"){

  possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);

} else {
  if (board[p1.index[0] +++ 1][p1.index[1]].color === "black"){

    possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);
  }
  
}

  }

  //directly to the right moves (only by 1)
  if (p1.index[1] +++ 1 != "8"){

if (board[p1.index[0]][p1.index[1] +++ 1].space === "empty"){

  possibleMoves.push(board[p1.index[0]][p1.index[1] +++ 1].index);

} else {
  if (board[p1.index[0]][p1.index[1] +++ 1].color === "black"){

    possibleMoves.push(board[p1.index[0]][p1.index[1] +++ 1].index);

  }
  
}
}

  //directly to the left moves (only by 1)

  if (p1.index[1] - 1 != -1){

if (board[p1.index[0]][p1.index[1] - 1].space === "empty"){

  possibleMoves.push(board[p1.index[0]][p1.index[1] - 1].index);

} else {
  if (board[p1.index[0]][p1.index[1] - 1].color === "black"){

    possibleMoves.push(board[p1.index[0]][p1.index[1] - 1].index);
  }
  
}
  }



//king Casling Logic left

if (board[p1.index[0]][p1.index[1]].moved === false & board[7][0].moved === false ){


if (board[7][1].space === "empty" & board[7][2].space === "empty"){

  if (board[7][3].space === "empty") {

     possibleMoves.push(board[7][0].index + "C");

  }
}
}

//king Casling Logic right

if (board[[0]][[1]].moved === false & board[7][7].moved === false ){

  
  if (board[7][6].space === "empty" & board[7][5].space === "empty"){
  
  
       possibleMoves.push(board[7][7].index + "C");
  
    
  }
  }









let valid = findValidity(possibleMoves,p2);
return valid

}

//logic function for Black King 
function blackKingGameLogic(p1,p2){

  let possibleMoves = [];


//Diagonal Directions

  //up right Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++) {

  if (p1.index[0] - i > -1 & p1.index[1] +++ i < 8 ){

    if (board[p1.index[0] - i][p1.index[1] +++ i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] +++ i].color === "white"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] +++ i].index)
      }

      i = 8;
    }

  }

  }

  //up left Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){

  if (p1.index[0] - i > -1 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] - i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] - i][p1.index[1] - i].color === "white"){
        possibleMoves.push(board[p1.index[0] - i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

  }

  //down left Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){


  if (p1.index[0] +++ i < 8 & p1.index[1] - i > -1 ){

    if (board[p1.index[0] +++ i][p1.index[1] - i].space === "empty"){

      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)

    } else {

      if(board[p1.index[0] +++ i][p1.index[1] - i].color === "white"){
        possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] - i].index)
      }

      i = 8;
    }

  }

  }

  //down right Diagonal Move (only by 1)
  for (let i = 1; i < 2; i++){


if (p1.index[0] +++ i < 8 & p1.index[1] +++ i < 8 ){

  if (board[p1.index[0] +++ i][p1.index[1] +++ i].space === "empty"){

    possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)

  } else {

    if(board[p1.index[0] +++ i][p1.index[1] +++ i].color === "white"){
      possibleMoves.push(board[p1.index[0] +++ i][p1.index[1] +++ i].index)
    }

    i = 8;
  }

}

  }


//Vertical & Horizontal Directions


  //directly above moves (only by 1)

  if (p1.index[0] - 1 != -1){

if (board[p1.index[0] - 1][p1.index[1]].space === "empty"){

  possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);

} else {
  if (board[p1.index[0] - 1][p1.index[1]].color === "white"){

    possibleMoves.push(board[p1.index[0] - 1][p1.index[1]].index);
  }
  
}
  }

  //directly below moves (only by 1)

  if (p1.index[0] +++ 1 != "8"){

if (board[p1.index[0] +++ 1][p1.index[1]].space === "empty"){

  possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);

} else {
  if (board[p1.index[0] +++ 1][p1.index[1]].color === "white"){

    possibleMoves.push(board[p1.index[0] +++ 1][p1.index[1]].index);
  }
  
}

  }

  //directly to the right moves (only by 1)
  if (p1.index[1] +++ 1 != "8"){

if (board[p1.index[0]][p1.index[1] +++ 1].space === "empty"){

  possibleMoves.push(board[p1.index[0]][p1.index[1] +++ 1].index);

} else {
  if (board[p1.index[0]][p1.index[1] +++ 1].color === "white"){

    possibleMoves.push(board[p1.index[0]][p1.index[1] +++ 1].index);

  }
  
}
}

  //directly to the left moves (only by 1)

  if (p1.index[1] - 1 != -1){

if (board[p1.index[0]][p1.index[1] - 1].space === "empty"){

  possibleMoves.push(board[p1.index[0]][p1.index[1] - 1].index);

} else {
  if (board[p1.index[0]][p1.index[1] - 1].color === "white"){

    possibleMoves.push(board[p1.index[0]][p1.index[1] - 1].index);
  }
  
}
  }




//king Casling Logic left

if (board[p1.index[0]][p1.index[1]].moved === false & board[0][0].moved === false ){


  if (board[0][1].space === "empty" & board[0][2].space === "empty"){
  
    if (board[0][3].space === "empty") {
  
       possibleMoves.push(board[0][0].index + "C");
  
    }
  }
  }
  
  //king Casling Logic right
  
  if (board[p1.index[0]][p1.index[1]].moved === false & board[0][7].moved === false ){
  
    
    if (board[0][6].space === "empty" & board[0][5].space === "empty"){
    
    
         possibleMoves.push(board[0][7].index + "C");
    
      
    }
    }






let valid = findValidity(possibleMoves,p2);
return valid

}


//en passant Psuedo Code
  //get log of last past move
    //(if last move is enemy pawn moved 2 squares then add diagonal attack to possible moves)






//To Do List
  //en passant special move

  //-make a Check and CheckMate
  //-make a turns system
  //-make a game log like white moved wK (b1) to (b3)
  //-make a Black player View basically invert the board
  //-label the X and Y axis of board
  //-add more complex errors like King is in check, move other piece
  //organize/clean/refine code
    //-queen uses exact same bishop/rook code, could reuse functions
    //fix valid move/invalid move results
    //can we put all game logic in 1 switch instead of a black and white one

  //buid a cool front end
  //put it on a blockchain
  //make a checkers version
  //make a tic tac toe version

//https://codegolf.stackexchange.com/questions/148587/is-it-a-valid-chess-move

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//goal is to make a function (position1, position2)





function movePiece (player,position1,position2){

 

//which piece and where you want to move?
  let p1IN = chessPositionToIndexNotation(position1)
  let p2IN = chessPositionToIndexNotation(position2)
  let p1Object = board[p1IN[0]][p1IN[1]];
  let p2Object = board[p2IN[0]][p2IN[1]];
  let p1 = board[p1IN[0]][p1IN[1]];
  let p2 = board[p2IN[0]][p2IN[1]];



  
  globalp1object = board[p1IN[0]][p1IN[1]];
  globalp2object = board[p2IN[0]][p2IN[1]];
  globalPosition1 = position1;
  globalPosition2 = position2;
  globalPlayer = p1Object.color;

  let Gp1object = globalp1object;

  tempp1object = Gp1object;



//Make Sure Right Player moves right Color

let movePiece = "Invalid Move";

validPlayerAndColor = sameColorPlayerAndPiece(player,position1) 

movePiece = pieceLogicSwitch(p1,p2)



//valid moves, run this swap and return "move is valid statements"
if (movePiece[0].slice(0,5) == 'Valid' & validPlayerAndColor == "Valid"){

  if ( movePiece == "Valid Move Basic Swap") {

    //all Swap logic for basic moves

    console.log("your Move is Valid")
    let tempPiece = board[p1IN[0]][p1IN[1]].piece
    board[p2IN[0]][p2IN[1]].piece = tempPiece
    bSorwS(position1) 
    p1Object.space = "empty"
    p2Object.moved = "true"
    p2Object.space = "filled"
    p2Object.color = p1Object.color

  } 
  //if move piece
  if (movePiece == "Valid White Special Move"){

    whiteSpecialMovesSwitch()
    console.log("Valid Move")

  } 

  if (movePiece == "Valid Black Special Move"){

    blackSpecialMovesSwitch()
    console.log("Valid Move")

  }

  
//for Invalid moves, dont move anything, and return appropriate errors
} else if (movePiece == "Invalid Move" ){

console.log("your Move is Invalid");
console.log(" ")
 





}








  





return displayGame() + "result for that move"

}


//your move
movePiece("white","a2","a4")



////////////////////////////////////////////////////////////////////////////////////////////////////






/*
let turncount = 0;
let playersturn = "white"
let whiteplayer = "player 1";
let blackplayer = "player 2";
let chessLog = [];

function gameTurn () {

  return turncount += 1;
  
  }


function whichplayersturn (turncount){

if (turncount % 2 == 1){
  return playersturn = "white";
} else if (turncount % 2 == 0){
return playersturn = "black";
}

}

function whitePlayersName (name){
  return whiteplayer = name;
}

function blackPlayersName (name){
  return blackplayer = name;
}


//turn
console.log(gameTurn())
//which players turn
console.log(whichplayersturn(turncount))

//black and white players name
console.log(whitePlayersName("diego"))
console.log(blackPlayersName("bob"))



function combiner (){

let first = "#" + turncount + " ";
let second = whichplayersturn(turncount) + " player"
let third = " (" + whiteplayer + ") ";
let forth = globalPosition1 + " " + tempp1object.piece + " " + pieceToName(globalp1object.piece)
// let fifth = INSERT LOGIC FOR ACTION (LIKE attack = "attacked", moved = "moved to" );
let fifth = " moved to "
let sixth = globalPosition2 + " " + globalp2object.piece + " " + pieceToName(globalp2object.piece)

let total = first + second + third + forth + fifth + sixth;

 return total;
}

console.log(combiner())


    //Readable Chess Log
  //[color]:[move number][position1 lowercase letter & Number][piece & name][action] [position2 lowercase letter & Number][piece & name]
  //example: #1 White Player (gogoDiego) a2 ♙ Pawn moved to a3 ▮ Space

  */