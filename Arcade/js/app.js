
var cWidth = 505;
var allEnemies = [];
var allGems = [];
var maxEnemies = 4
var speed = 70
var lives = 3
var maxGem = 3
var gemY = [170, 240, 90]
var gemX = [115, 315, 215]
var enemyStarty = [140, 240, 70]
var enemyStartx = [115, 315, 215]
var Score = 0

//Enemy class
var Enemy = function() {
    this.y = enemyStarty[Math.floor((Math.random() * 3))];
    this.x = -100
    this.enemys = this.x;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed * Math.floor((Math.random() * 4));
};

//Player Class
var Player = function() {
    this.x = 201;
    this.y = 404;
    this.sprite = 'images/char-boy.png';

};

//Gem Class
var Gem = function() {
    this.x = Math.floor((Math.random() * 3));
    this.xplace = gemX[this.x]
    this.y = gemY[Math.floor((Math.random() * 3))];

    this.sprite = 'images/Gem Orange.png';
    this.value = 1;
}


Enemy.prototype.update = function(dt) {

    //Update enemy location 
    this.x += this.speed * dt;

    //defaults enemy speed to 60 if originally set to 0
    if (this.speed == 0) {
        this.speed = 60
    }

    //Check for enemy's out of bands and re-initialize new Enemy
    allEnemies = allEnemies.filter(function(enemy) {
        return enemy.x <= cWidth;
    });

    for (var i = 0; i < maxEnemies - allEnemies.length; i++) {
        allEnemies.push(new Enemy());
    };
    //function to determine if player has collided with an enemy
    this.Collisions();
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//empty method
Player.prototype.update = function() {

}

//handles user inputs
Player.prototype.handleInput = function(key) {
    switch (key) {
        case "up":
            if (this.y > 60)
                this.y -= 83;
            break;
        case "down":
            if (this.y < 404)
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

//render the plaeyr on the screen as well as text for score and lives
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)

    ctx.font = '20px Copperplate';
    ctx.fillStyle = '#5F9EA0';
    ctx.fillText('Score: ' + Score, 0, 30);

    ctx.font = '20px Copperplate';
    ctx.fillStyle = '#5F9EA0';
    ctx.fillText('Lives: ' + lives, 425, 30);
};


//initialise new player, enemies, and gems
var player = new Player();

for (var i = 0; i <= maxEnemies; i++) {
    allEnemies[i] = new Enemy();
};

for (var i = 0; i < maxGem; i++) {
    allGems[i] = new Gem();
    gemX.splice(allGems[i].x, 1)

    
}



//collision method for Enemy 

Enemy.prototype.Collisions = function() {

    // right            // left
    if (this.x < player.x + 50 && this.x + 70 > player.x &&
        this.y < player.y + 20 && this.y + 20 > player.y) {

        player.Reset()
        lives -= 1

        if (lives > 0) {
            ctx.clearRect(0, 0, 505, 505);
        } else {
            allEnemies = [];
            maxGem = 0
            allGems = []
            maxEnemies = 0
            ctx.clearRect(0, 0, 505, 505);
            ctx.font = '50px Verdana';
            ctx.fillStyle = 'red';
            ctx.fillText('Game Over', 125, 45);
        }

    }

}

//resets player location
Player.prototype.Reset = function() {

    player.x = 201
    player.y = 404

}

//invoke the draw method as well as ensure each gem is assigned a unique location on x axis
Gem.prototype.render = function() {

    this.Draw();


    allGems.forEach(function(gem) {
        if (gem.xplace == null) {
            gem.xplace = gemX[Math.floor((Math.random() * 3))];
             

         if (gem.xplace != null && isInArray (gem.x, allGems) ) {
         var x = allGems.indexOf(gem.xplace)
         gemX.splice(allGems[gem].x, 1)  
        }
           
        }
    })
}

//function to support index removal from allGems array 
function isInArray (value, array) {
    return array.indexOf(value) > -1;
}

//draw gems
Gem.prototype.Draw = function() {
    ctx.drawImage(Resources.get(this.sprite), this.xplace, this.y)
}

//update method which checks for collisions
Gem.prototype.update = function() {
    this.collision();

}

//collision method 
Gem.prototype.collision = function() {
    if (this.xplace < player.x + 50 && this.xplace + 50 > player.x &&
        this.y < player.y + 20 && this.y + 20 > player.y) {

        this.xplace = -100
        Score += this.value

        if (Score == 3) {
            ctx.clearRect(0, 0, 400, 505);
            allEnemies = [];
            maxGem = 0

            allGems = []
            maxEnemies = 0
            ctx.clearRect(0, 0, 505, 505);
            ctx.font = '50px Verdana';
            ctx.fillStyle = 'blue';
            ctx.fillText('VICTORY', 150, 45);
        } else {
            ctx.clearRect(0, 0, 400, 505);

        }

    }

}

//event listenter for keys
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});