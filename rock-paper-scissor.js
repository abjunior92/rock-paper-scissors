
export class Game {
  constructor(playerOneMove, playerTwoMove){
    this.playerOneMove = playerOneMove;
    this.playerTwoMove = playerTwoMove;
  }

  validateMoves(){
    if(this.playerOneMove === '' || this.playerTwoMove === ''){
      throw new Error('there is no game without a move!');
    }
  }

  win(){
    var one = this.playerOneMove;
    var two = this.playerTwoMove;
    var winner;

    this.validateMoves();

    switch (one) {
      case 'rock':
        if(two === 'scissors'){
          winner = one;
        } else if(two === 'paper'){
          winner = two;
        } else if(two === one){
          winner = 'draw';
        } else {
          throw new Error('Unknown move!');
        }
        break;
      case 'paper':
        if(two === 'rock'){
          winner = one;
        } else if(two === 'scissors'){
          winner = two;
        } else if(two === one){
          winner = 'draw';
        } else {
          throw new Error('Unknown move!');
        }
        break;
      case 'scissors':
        if(two === 'paper'){
          winner = one;
        } else if(two === 'rock'){
          winner = two;
        } else if(two === one){
          winner = 'draw';
        } else {
          throw new Error('Unknown move!');
        }
        break;
      default:
        throw new Error('Unknown move!');
    }

    return winner;
  }
}
