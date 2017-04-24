// Enemies our player must avoid


var cWidth = 505;

var cHheight = 606;

var allEnemies = [];

var maxEnemies = 10;

var speed = 200

var Enemy = function() {
    this.y = 300;
    this.x = 50;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

this.x += speed ;

    if (this.x > cWidth-50) {
    speed = -speed
}
   if(this.x <= cWidth -500) {
    speed = Math.abs(speed)
    }

};
for (var i = 0; i <= maxEnemies; i++) {
allEnemies[i] = new Enemy();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.x = cWidth/2;
    this.y = 0;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {}


Player.prototype.handleInput= function () {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};


var player = new Player();


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
