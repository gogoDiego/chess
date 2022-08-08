






function promoTime (p1,p2,Set2){

    //The Message
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


let piecePromotion = promotion;

function promoToPiece (piecePromotion,p2){
switch(piecePromotion) {    
  case "Q": 
    answer = (console.log("you have chosen Queen"), board(set2).piece === "wQ");
    break;
  case "B": 
    answer = (console.log("you have chosen Bishop"), board(set2).piece === "wB");
    break;
  case "R": 
    answer = (console.log("you have chosen Rook"), board(set2).piece === "wR");
    break;
  case "N": 
    answer = (console.log("you have chosen Knight"), board(set2).piece === "wN");
    break;
}
return answer;
}

}