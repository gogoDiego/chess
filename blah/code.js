function movePiece (player,position1,position2){


  //which piece and where you want to move?
  let p1IN = chessPositionToIndexNotation(position1)
  let p2IN = chessPositionToIndexNotation(position2)
  let p1Object = board[p1IN[0]][p1IN[1]];
  let p2Object = board[p2IN[0]][p2IN[1]];
  
  globalPosition2 = position2;
  globalPlayer = p1Object.color
  
  
  
  
  //can they move?
  
  
  
  
  let move = "Invalid Move";
  
  //this If else Statements make sure White Player only move white Piece, if true relays to whitepieceSwitcher, to whitepiecesLogic and pass "Valid Move"
  

  
function sameColorPlayerAndPiece (player,position1){

  let p1IN = chessPositionToIndexNotation(position1)
  let p1Object = board[p1IN[0]][p1IN[1]];




  if (player == "white"){
  
    if (p1Object.color == "white"){
  
      return "White player moves White Piece"
  
  } else {
    console.log("White needs to move white Piece")
  }
  
  } else {
  
    if (p1Object.color == "black"){
  
    return "Black player moves Black Piece"
  
  } else {
    console.log("Black needs to move Black Piece")
  } 
  
  }


}
















  



dog = sameColorPlayerAndPiece(player,position1)  
movePiece = "Invalid Move"


if (dog = "White player moves White Piece"){

  movePiece = whitePieceLogicSwitch(p1Object,p2Object)

} else if (dog = "Black player moves Black Piece"){

  movePiece = blackPieceLogicSwitch(p1Object,p2Object)
}
  
  
  //if position1 to position2 is = "valid Move", then run this code
    //lets move that piece to position2, and fill empty square of position1
  
    if ( move == "Invalid Move") {
  
    console.log("your Move is Invalid")
  
    } else {
    
    console.log("your Move is Valid")
  
  //if it equal valid run basic swap
  
      //else then run these special moves
  
  
  
  
  
  //Pawn Promotion Logic, Casling logic, optional commands
  
      if (position2.length == 3){
  
      let prom = position2[2]
  
        if (prom != "C"){
  
          //Pawn Promotion Logic
          let setterPromotion = "N/A";
      
      
          if (player == "white"){
      
          setterPromotion = whitepromoTime(prom)
      
          } else {
      
          setterPromotion = blackpromoTime(prom)
      
          }
      
          if (setterPromotion != ""){
      
            p2Object.piece = setterPromotion;
            
          } else {
            console.log(" ")
            console.log("please pick a piece")
      
          }
  
  
  
        } else {
  
          //Casling Logic
          
          
  
  
  
  
  
  
        }
  
  
      } else{
  
        //if no special commands (like promotion/castling) then just move and replace
        let tempPiece = board[p1IN[0]][p1IN[1]].piece
        board[p2IN[0]][p2IN[1]].piece = tempPiece
        bSorwS(position1) 
        p1Object.space = "empty"
        p2Object.moved = "true"
        p2Object.space = "filled"
        p2Object.color = p1Object.color
  
  
  
      }
  
  
  
  
  
    }
  
  
  
  return displayGame() + "result for that move"
  
  }