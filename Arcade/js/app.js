// Enemies our player must avoid


var cWidth = 505;

var cHheight = 606;

var allEnemies = [];

var maxEnemies = 4;

var speed = 100

var enemyStart = [60, 140, 220 ]



var Enemy = function() {
    this.y = enemyStart[Math.floor((Math.random() * 3))];
    this.x = -100;
    this.enemys = this.x;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed * Math.floor((Math.random() * 2) + 1);
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

this.x += this.speed * dt ;

allEnemies = allEnemies.filter(function (enemy) {
    return enemy.x < cWidth;
});

for (var i = 0; i < maxEnemies - allEnemies.length; i++) {
allEnemies.push (new Enemy());
};


};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.x = 101;
    this.y = 101*4
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {}


Player.prototype.handleInput= function (key) {
    switch (key) {
        case "up":
            this.y -= 83;
            break;
        case "down":
            this.y += 83;
            break;
        case "left":
            this.x -= 100;
            break;
        case "right":
            this.x += 100;
    };

console.log(key)
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};


var player = new Player();

for (var i = 0; i <= maxEnemies; i++) {
allEnemies[i] = new Enemy();
};


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
