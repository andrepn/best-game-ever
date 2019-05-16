console.log('wow our game is cool');

//Warn that the british are coming
function yell() {
  alert("the british are coming");
}

var key_pressed = {};
window.onkeyup = function(event) { key_pressed[event.keyCode] = false; }
window.onkeydown = function(event) { key_pressed[event.keyCode] = true; }

//Class of Paddle which is rectangle on each side of the screen
class Paddle {

  //Initialize a new Paddle
    //vertical_length and horizontal_length are the dimensions of new paddle
    //initial position is the percentage of total distance the paddle is from the top
  constructor(player_id, vertical_length, horizontal_length, position) {
    this.player_id = player_id;
    this.vertical_length = vertical_length;
    this.horizontal_length = horizontal_length;
    this.position = position;
  }

  move(percentage_move) {
    this.position = this.position - percentage_move;
  }

  render() {
    //access html element of the paddle and update everything to be this object
    var paddle = document.querySelector(".paddle[data-player='" + this.player_id + "']");
    paddle.style.background = "red";
    paddle.style.top = this.position + "%";
    paddle.style.height = this.vertical_length;
    paddle.style.width = this.horizontal_length;

    return paddle;
  }
}

var player_one_paddle = new Paddle(1, 80, 5, 50);
var player_two_paddle = new Paddle(2, 80, 5, 50);

setInterval(function() {player_one_paddle.render()}, 1000);
setInterval(function() {player_two_paddle.render()}, 1000);
