


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
let wKn = ("♘")
let wPawn1 = ("♙")
let wPawn2 = ("♙")
let wPawn3 = ("♙")
let wPawn4 = ("♙")
let wPawn5 = ("♙")
let wPawn6 = ("♙")
let wPawn7 = ("♙")
let wPawn8 = ("♙")
let wS = ("▯")
let white = "white"
let line = ("]")

//black pieces
let bK = ("♚")
let bQ = ("♛")
let bR = ("♜")
let bB = ("♝")
let bKn = ("♞")
let bPawn1 = ("♟")
let bPawn2 = ("♟")
let bPawn3 = ("♟")
let bPawn4 = ("♟")
let bPawn5 = ("♟")
let bPawn6 = ("♟")
let bPawn7 = ("♟")
let bPawn8 = ("♟")
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
    [a8={piece:bR,moved:false,index:"00",color:black,space:"filled"},b8={piece:bKn,moved:false,index:"01",color:black,space:"filled"},c8={piece:bB,moved:false,index:"02",color:black,space:"filled"},d8={piece:bK,moved:false,index:"03",color:black,space:"filled"},e8={piece:bQ,moved:false,index:"04",color:black,space:"filled"},f8={piece:bB,moved:false,index:"05",color:black,space:"filled"},g8={piece:bKn,moved:false,index:"06",color:black,space:"filled"},h8={piece:bR,moved:false,index:"07",color:black,space:"filled"}],
    
    [a7={piece:bPawn1,moved:false,index:"10",color:black,space:"filled"},b7={piece:bPawn2,moved:false,index:"11",color:black,space:"filled"},c7={piece:bPawn3,moved:false,index:"12",color:black,space:"filled"},d7={piece:bPawn4,moved:false,index:"13",color:black,space:"filled"},e7={piece:bPawn5,moved:false,index:"14",color:black,space:"filled"},f7={piece:bPawn6,moved:false,index:"15",color:black,space:"filled"},g7={piece:bPawn7,moved:false,index:"16",color:black,space:"filled"},h7={piece:bPawn1,moved:false,index:"17",color:black,space:"filled"}],
    
    [a6={piece:wS,moved:false,index:"20",color:white,space:"empty"},b6={piece:bS,moved:false,index:"21",color:black,space:"empty"},c6={piece:wS,moved:false,index:"22",color:white,space:"empty"},d6={piece:bS,moved:false,index:"23",color:black,space:"empty"},e6={piece:wS,moved:false,index:"24",color:white,space:"empty"},f6={piece:bS,moved:false,index:"25",color:black,space:"empty"},g6={piece:wS,moved:false,index:"26",color:white,space:"empty"},h6={piece:bS,moved:false,index:"27",color:black,space:"empty"}],
    
    [a5={piece:bS,moved:false,index:"30",color:black,space:"empty"},b5={piece:wS,moved:false,index:"31",color:white,space:"empty"},c5={piece:bS,moved:false,index:"32",color:black,space:"empty"},d5={piece:wS,moved:false,index:"33",color:white,space:"empty"},e5={piece:bS,moved:false,index:"34",color:black,space:"empty"},f5={piece:wS,moved:false,index:"35",color:white,space:"empty"},g5={piece:bS,moved:false,index:"36",color:black,space:"empty"},h5={piece:wS,moved:false,index:"37",color:white,space:"empty"}],
    
    [a4={piece:wS,moved:false,index:"40",color:white,space:"empty"},b4={piece:bS,moved:false,index:"41",color:black,space:"empty"},c4={piece:wS,moved:false,index:"42",color:white,space:"empty"},d4={piece:bS,moved:false,index:"43",color:black,space:"empty"},e4={piece:wS,moved:false,index:"44",color:white,space:"empty"},f4={piece:bS,moved:false,index:"45",color:black,space:"empty"},g4={piece:wS,moved:false,index:"46",color:white,space:"empty"},h4={piece:bS,moved:false,index:"47",color:black,space:"empty"}],
    
    [a3={piece:bS,moved:false,index:"50",color:black,space:"empty"},b3={piece:wS,moved:false,index:"51",color:white,space:"empty"},c3={piece:bS,moved:false,index:"52",color:black,space:"empty"},d3={piece:wS,moved:false,index:"53",color:white,space:"empty"},e3={piece:bPawn2,moved:true,index:"54",color:black,space:"filled"},f3={piece:wS,moved:false,index:"55",color:white,space:"empty"},g3={piece:bS,moved:false,index:"56",color:black,space:"empty"},h3={piece:wS,moved:false,index:"57",color:white,space:"empty"}],
    
    [a2={piece:wPawn1,moved:false,index:"60",color:white,space:"filled"},b2={piece:wPawn2,moved:false,index:"61",color:white,space:"filled"},c2={piece:wPawn3,moved:false,index:"62",color:white,space:"filled"},d2={piece:wPawn4,moved:false,index:"63",color:white,space:"filled"},e2={piece:wPawn5,moved:false,index:"64",color:white,space:"filled"},f2={piece:wPawn6,moved:false,index:"65",color:white,space:"filled"},g2={piece:wPawn7,moved:false,index:"66",color:white,space:"filled"},h2={piece:wPawn8,moved:false,index:"67",color:white,space:"filled"}],
    
    [a1={piece:wR,moved:false,index:"70",color:white,space:"filled"},b1={piece:wKn,moved:false,index:"71",color:white,space:"filled"},c1={piece:wB,moved:false,index:"72",color:white,space:"filled"},d1={piece:wK,moved:false,index:"73",color:white,space:"filled"},e1={piece:wQ,moved:false,index:"74",color:white,space:"filled"},f1={piece:wB,moved:false,index:"75",color:white,space:"filled"},g1={piece:wKn,moved:false,index:"76",color:white,space:"filled"},h1={piece:wR,moved:false,index:"77",color:white,space:"filled"}]
    ]


/*


let board = [
[a8={piece:bR,moved:false,index:"00",color:black,space:"filled"},b8={piece:bKn,moved:false,index:"01",color:black,space:"filled"},c8={piece:bB,moved:false,index:"02",color:black,space:"filled"},d8={piece:bK,moved:false,index:"03",color:black,space:"filled"},e8={piece:bQ,moved:false,index:"04",color:black,space:"filled"},f8={piece:bB,moved:false,index:"05",color:black,space:"filled"},g8={piece:bKn,moved:false,index:"06",color:black,space:"filled"},h8={piece:bR,moved:false,index:"07",color:black,space:"filled"}],

[a7={piece:bPawn1,moved:false,index:"10",color:black,space:"filled"},b7={piece:bPawn2,moved:false,index:"11",color:black,space:"filled"},c7={piece:bPawn3,moved:false,index:"12",color:black,space:"filled"},d7={piece:bPawn4,moved:false,index:"13",color:black,space:"filled"},e7={piece:bPawn5,moved:false,index:"14",color:black,space:"filled"},f7={piece:bPawn6,moved:false,index:"15",color:black,space:"filled"},g7={piece:bPawn7,moved:false,index:"16",color:black,space:"filled"},h7={piece:bPawn1,moved:false,index:"17",color:black,space:"filled"}],

[a6={piece:wS,moved:false,index:"20",color:white,space:"empty"},b6={piece:bS,moved:false,index:"21",color:black,space:"empty"},c6={piece:wS,moved:false,index:"22",color:white,space:"empty"},d6={piece:bS,moved:false,index:"23",color:black,space:"empty"},e6={piece:wS,moved:false,index:"24",color:white,space:"empty"},f6={piece:bS,moved:false,index:"25",color:black,space:"empty"},g6={piece:wS,moved:false,index:"26",color:white,space:"empty"},h6={piece:bS,moved:false,index:"27",color:black,space:"empty"}],

[a5={piece:bS,moved:false,index:"30",color:black,space:"empty"},b5={piece:wS,moved:false,index:"31",color:white,space:"empty"},c5={piece:bS,moved:false,index:"32",color:black,space:"empty"},d5={piece:wS,moved:false,index:"33",color:white,space:"empty"},e5={piece:bS,moved:false,index:"34",color:black,space:"empty"},f5={piece:wS,moved:false,index:"35",color:white,space:"empty"},g5={piece:bS,moved:false,index:"36",color:black,space:"empty"},h5={piece:wS,moved:false,index:"37",color:white,space:"empty"}],

[a4={piece:wS,moved:false,index:"40",color:white,space:"empty"},b4={piece:bS,moved:false,index:"41",color:black,space:"empty"},c4={piece:wS,moved:false,index:"42",color:white,space:"empty"},d4={piece:bS,moved:false,index:"43",color:black,space:"empty"},e4={piece:wS,moved:false,index:"44",color:white,space:"empty"},f4={piece:bS,moved:false,index:"45",color:black,space:"empty"},g4={piece:wS,moved:false,index:"46",color:white,space:"empty"},h4={piece:bS,moved:false,index:"47",color:black,space:"empty"}],

[a3={piece:bS,moved:false,index:"50",color:black,space:"empty"},b3={piece:wS,moved:false,index:"51",color:white,space:"empty"},c3={piece:bS,moved:false,index:"52",color:black,space:"empty"},d3={piece:wS,moved:false,index:"53",color:white,space:"empty"},e3={piece:bS,moved:false,index:"54",color:black,space:"empty"},f3={piece:wS,moved:false,index:"55",color:white,space:"empty"},g3={piece:bS,moved:false,index:"56",color:black,space:"empty"},h3={piece:wS,moved:false,index:"57",color:white,space:"empty"}],

[a2={piece:wPawn1,moved:false,index:"60",color:white,space:"filled"},b2={piece:wPawn2,moved:false,index:"61",color:white,space:"filled"},c2={piece:wPawn3,moved:false,index:"62",color:white,space:"filled"},d2={piece:wPawn4,moved:false,index:"63",color:white,space:"filled"},e2={piece:wPawn5,moved:false,index:"64",color:white,space:"filled"},f2={piece:wPawn6,moved:false,index:"65",color:white,space:"filled"},g2={piece:wPawn7,moved:false,index:"66",color:white,space:"filled"},h2={piece:wPawn8,moved:false,index:"67",color:white,space:"filled"}],

[a1={piece:wR,moved:false,index:"70",color:white,space:"filled"},b1={piece:wKn,moved:false,index:"71",color:white,space:"filled"},c1={piece:wB,moved:false,index:"72",color:white,space:"filled"},d1={piece:wK,moved:false,index:"73",color:white,space:"filled"},e1={piece:wQ,moved:false,index:"74",color:white,space:"filled"},f1={piece:wB,moved:false,index:"75",color:white,space:"filled"},g1={piece:wKn,moved:false,index:"76",color:white,space:"filled"},h1={piece:wR,moved:false,index:"77",color:white,space:"filled"}]
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



//just empty space lol



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

let target = p2.index;

 console.log(array)

    function approvedMoveInArray (item){
  return (item == target)
  }

  let validQuestionMark = array.some(approvedMoveInArray);

  let valid = "Invalid Move"

if (validQuestionMark == true){
  valid = "Valid Move"
} else {
  valid = "Invalid Move"
}


return valid
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


function whitePieceLogicSwitch (p1,p2){

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
        answer = "INSERT Knight LOGIC FUNCTION";
        break;
      case "♗":  
        answer = "INSERT Bishop LOGIC FUNCTION";
        break;
      case "♔":  
        answer = "INSERT King LOGIC FUNCTION";
        break;
      case "♕":  
        answer = "INSERT Queen LOGIC FUNCTION";
        break;
    }
    return answer;

}


function blackPieceLogicSwitch (p1,p2){

  let answer = "unregistered logic"

    switch(p1.piece) {    

      case "▮":
        answer = ["Invalid Move"];
        break;
        case "♟": 
        answer = [blackPawnGameLogic(p1,p2)];
        break;
      case "♜": 
        answer = [blackRookValidity(p1,p2)];
        break;
      case "♞": 
        answer = "INSERT Knight LOGIC FUNCTION";
        break;
      case "♝":
        answer = "INSERT Bishop LOGIC FUNCTION";
        break;
      case "♚": 
        answer = "INSERT King LOGIC FUNCTION";
        break;
      case "♛":  
        answer = "INSERT Queen LOGIC FUNCTION";
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
                                  _O      _/____\_   _/____\_
           _  _  _     ^^__      / //\    \      /   \      /
          | || || |   /  - \_   {     }    \____/     \____/
          |_______| <|    __<    \___/     (____)     (____)
    _     \__ ___ / <|    \      (___)      |  |       |  |
   (_)     |___|_|  <|     \      |_|       |__|       |__|
  (___)    |_|___|  <|______\    /   \     /    \     /    \
  _|_|_    |___|_|   _|____|_   (_____)   (______)   (______)
 (_____)  (_______) (________) (_______) (________) (________)
 /_____\  /_______\ /________\ /_______\ /________\ /________\

*/



//logic functions for the WHITE Pawn
function whitePawnGameLogic (p1,p2){

    let possibleMoves = [];

    let pieceInfront = p1.index[0] - 1;
    let pieceInfrontleft = p1.index[1] - 1;
    let pieceInfrontright = p1.index[1] +++ 1;
    
    
    
    //2 options
      //if statement hasnt moved then can go forward 1 or 2 square(and if empty space)
      // else statement moved then only 1 forward, or if one is infront and to left/right, then attack
    
    if (p1.moved === false ){
    
        for (let pawnforloopCounter = (p1.index[0] - 1); pawnforloopCounter < 4 ; pawnforloopCounter--){
    
            if (board[pawnforloopCounter][(p1.index[1])].space === "empty" ){
      
            possibleMoves.push(board[pawnforloopCounter][(p1.index[1])].index);
      
       } else {
          pawnforloopCounter = 5
       }
      
      }
    
    } else {
    
    
    if ( board[(pieceInfront)][(p1.index[1])].space === "empty" ) {
    
    possibleMoves.push( board[(pieceInfront)][(p1.index[1])].index)
    
    } else {
    
    
    //(we know theres 1 piece infront of pawn)
      //if theres a piece infront left add it to array
       //if theres a piece infront right add it to array
    
     if (pieceInfrontright != 8 ){
    
      //right infront
      if (board[(pieceInfront)][(pieceInfrontright)].space === "filled" & board[pieceInfront][(pieceInfrontright)].color === "black") {
    
        possibleMoves.push(board[(pieceInfront)][(pieceInfrontright)].index)
     
     }
    
    }
    
    }
    
    
    
    if (pieceInfrontleft !== -1 ){
    
       //left infront
    
       if (board[(pieceInfront)][(pieceInfrontleft)].space === "filled" & board[(pieceInfront)][(pieceInfrontleft)].color === "black"){
    
        possibleMoves.push(board[(pieceInfront)][(pieceInfrontleft)].index)
      
      }
     }
    }
    
    let valid = findValidity(possibleMoves,p2);
    
    return valid;

 
}











//logic functions for the BLACK Pawn
function blackPawnGameLogic (p1,p2) {

let possibleMoves = [];

let pieceInfront = p1.index[0] +++ 1;
let pieceInfrontleft = p1.index[1] - 1;
let pieceInfrontright = p1.index[1] +++ 1;



//2 options
  //if statement hasnt moved then can go forward 1 or 2 square(and if empty space)
  // else statement moved then only 1 forward, or if one is infront and to left/right, then attack

if (p1.moved === false ){

    for (let pawnforloopCounter = (p1.index[0] +++ 1); pawnforloopCounter < 4 ; pawnforloopCounter++){

        if (board[pawnforloopCounter][(p1.index[1])].space === "empty" ){
  
        possibleMoves.push(board[pawnforloopCounter][(p1.index[1])].index);
  
   } else {
      pawnforloopCounter = 5
   }
  
  }

} else {


if ( board[(pieceInfront)][(p1.index[1])].space === "empty" ) {

possibleMoves.push( board[(pieceInfront)][(p1.index[1])].index)

} else {


//(we know theres 1 piece infront of pawn)
  //if theres a piece infront left add it to array
   //if theres a piece infront right add it to array

 if (pieceInfrontright != 8 ){

  //right infront
  if (board[(pieceInfront)][(pieceInfrontright)].space === "filled" & board[pieceInfront][(pieceInfrontright)].color === "white") {

    possibleMoves.push(board[(pieceInfront)][(pieceInfrontright)].index)
 
 }

}

}



if (pieceInfrontleft !== -1 ){

   //left infront

   if (board[(pieceInfront)][(pieceInfrontleft)].space === "filled" & board[(pieceInfront)][(pieceInfrontleft)].color === "white"){

    possibleMoves.push(board[(pieceInfront)][(pieceInfrontleft)].index)
  
  }
 }
}

let valid = findValidity(possibleMoves,p2);

return valid;

}












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
  for (let rookIndex1 = (p1.index[0] +++ 1); rookIndex1 < 8; rookIndex1++){

    if (board[rookIndex1][(p1.index[1])].space === "empty" ){

    possibleMoves.push(board[rookIndex1][(p1.index[1])].index);

 } else {

  if (board[rookIndex1][(p1.index[1])].color === "black" ){
    possibleMoves.push(board[rookIndex1][(p1.index[1])].index);
  }

  rookIndex1 = 7;

 }
}




  //all possible moves right

  for (let rookIndex1 = (p1.index[1] +++ 1); rookIndex1 < 8; rookIndex1++){

   if (board[p1.index[0]][rookIndex1].space === "empty" ){

    possibleMoves.push(board[p1.index[0]][rookIndex1].index);

 } else {

  if (board[p1.index[0]][rookIndex1].color === "black" ){
    possibleMoves.push(board[p1.index[0]][rookIndex1].index);
  }

  rookIndex1 = 7;

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




let valid = findValidity(possibleMoves,p2);

return valid



}














function blackRookGameLogic(piece){
 
}

function blackRookValidity (p1,p2){

}













////////////////////////////////////////////////////////////////////////////////////////////////////////////


//goal is to make a function (position1, position2)


function movePiece (player,position1,position2){


//which piece and where you want to move?
let p1IN = chessPositionToIndexNotation(position1)
let p2IN = chessPositionToIndexNotation(position2)
let p1Object = board[p1IN[0]][p1IN[1]];
let p2Object = board[p2IN[0]][p2IN[1]];

//can they move?




let move = "Invalid Move";

//this If else Statements make sure White Player only move white Piece, if true relays to whitepieceSwitcher, to whitepiecesLogic and pass "Valid Move"

if (player == "white"){

  if (p1Object.color == "white"){

  move = whitePieceLogicSwitch(p1Object,p2Object)

} else {
  console.log("White needs to move white Piece")
}

} else {

  if (p1Object.color == "black"){

  move = blackPieceLogicSwitch(p1Object,p2Object)

} else {
  console.log("Black needs to move Black Piece")
}

}




//if position1 to position2 is = "valid Move", then run this code
  //lets move that piece to position2, and fill empty square of position1

  if ( move == "Invalid Move") {

  console.log("your Move is Invalid")

  } else {
  
  let tempPiece = board[p1IN[0]][p1IN[1]].piece
  board[p2IN[0]][p2IN[1]].piece = tempPiece
  bSorwS(position1) 
  p1Object.space = "empty"
  }

return displayGame() + "result for that move"

}



console.log(movePiece("black","c7","a6"))

////////////////////////////////////////////////////////////////////////////////////////////////////