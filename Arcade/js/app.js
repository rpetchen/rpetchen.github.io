// Enemies our player must avoid


var cWidth = 505;

var allEnemies = [];
var allGems = [];
var maxEnemies = 4

var speed = 70

var lives 

var maxGem = 3
var gemY = [140, 240, 40]
var gemX =  [115, 315, 215]

var enemyStarty = [140, 240, 40]
var enemyStartx = [115, 315, 215]


//Enemy class
var Enemy = function() {
    this.y = enemyStarty[Math.floor((Math.random() * 3))];
    this.x = -100
    this.enemys = this.x;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed * Math.floor((Math.random() * 4) );
};

//Player Class
var Player = function () {
    this.x = 201;
    this.y = 404;
    this.sprite = 'images/char-boy.png';
    this.score = 0 ;
};



//Gem Class
var Gem = function () {
    this.x = Math.floor((Math.random() * 3));
    this.xplace = gemX[this.x]
    this.y = gemY[Math.floor((Math.random() * 3))];
    this.dis = true;
    this.sprite = 'images/Gem Orange.png';
    this.value = 1;
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


Player.prototype.update = function() {
 
}


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

for (var i = 0; i < maxGem; i++) {
    allGems[i] = new Gem();
    gemX.splice(allGems[i].x, 1)
}



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

Gem.prototype.render = function () {
   if (this.dis == true) {
    this.Draw();
   }

   allGems.forEach(function(gem) {
    if (gem.xplace == null) {
        gem.xplace = gemX[Math.floor((Math.random() * 3))];
    }
})
}

Gem.prototype.Draw = function () {
         ctx.drawImage(Resources.get(this.sprite), this.xplace, this.y)
}

Gem.prototype.update = function () {
this.collision();

}


Gem.prototype.collision = function () {

    if (this.x < player.x + 90 && this.x + 40 > player.x 
    && this.y < player.y + 40 && this.y + 40 > player.y ) {
    this.dis = false;
    this.x = -100
    player.score += this.value
  }
    
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
