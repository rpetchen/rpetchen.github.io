// Enemies our player must avoid


var cWidth = 505;

var cHheight = 606;

var allEnemies = [];

var maxEnemies = 1

var speed = 60

var enemyStartx = [-100, -50, - 150, -200]

var enemyStarty = [60, 140, 220]


//Enemy class
var Enemy = function() {
    this.y = enemyStarty[Math.floor((Math.random() * 3))];
    this.x = enemyStartx[Math.floor((Math.random() * 4))];
    this.enemys = this.x;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed * Math.floor((Math.random() * 4) );
};

//Player Class
var Player = function () {
    this.x = 201;
    this.y = 404;
    this.sprite = 'images/char-boy.png';
}

Enemy.prototype.update = function(dt) {

//Update enemy location 
this.x += this.speed * dt ;

//defaults enemy speed to 60 if originally set to 0
if (this.speed == 0) {
    this.speed = 60
}

//Check for enemy's out of bands and re-initialize new Enemy
allEnemies = allEnemies.filter(function (enemy) {
    return enemy.x <= cWidth;
});

for (var i = 0; i < maxEnemies - allEnemies.length; i++) {
allEnemies.push (new Enemy());
};

this.Collisions();

};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update = function() {}


Player.prototype.handleInput= function (key) {
    switch (key) {
        case "up":
            if (this.y > 60) 
            this.y -= 83;
            break;
        case "down":
            if(this.y < 404 )        
            this.y += 83;
            break;
        case "left":
            if (this.x > 1)
            this.x -= 100;
            break;
        case "right":
            if (this.x < 401)
            this.x += 100;
    };

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};


var player = new Player();

for (var i = 0; i <= maxEnemies; i++) {
allEnemies[i] = new Enemy();
};


//collision method for Enemy 

Enemy.prototype.Collisions = function () {

    // right            // left
if (this.x < player.x + 50 && this.x + 70 > player.x 
    && this.y < player.y + 20 && this.y + 20 > player.y ) {

    player.x = 201
    player.y = 404

}


}



Player.prototype.Reset = function () {


}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
