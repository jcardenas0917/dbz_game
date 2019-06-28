$(document).ready(function () {


    //OBJECT
    //crate player object 
    var player = {
        baseAttack: 0,
        health: 0,
        currentAttack: 0,
        userStats: $("#userStats"),
        name: $("#player")
    }

    var enemy = {
        counterAttack: 0,
        health: 0,
        enemyStats: $("#enemyStats"),
        name: $("#enemy")
    }

    var game = {
        characters: $("#characters"),
        enemies: $("#enemies"),
        defenders: $("#defenders"),
        userChar: [$("#gokuchar"), $("#vegetachar"), $("#friezachar"), $("#buuchar")],
        enCharts: [$("#gokuen"), $("#vegetaen"), $("#friezaen"), $("#buuen")],
        defCharts: [$("#gokudef"), $("#vegetadef"), $("#friezadef"), $("#buudef")],
        listOfNames:["Goku","Vegeta","Frieza","Maijin Buu"],
        attack: $("#attack"),
        reset: $("#reset"),
        //Functions
        //==============================================================================================================================================
        startGame: function () {
            this.enemies.hide();
            this.defenders.hide();
            this.reset.hide();
            enemy.counterAttack = 0;
            enemy.health = 0;
            player.baseAttack = 0;
            player.health = 0;
            player.currentAttack = 0;
        },

        //This section manipulates the character selection

        selectGoku: function () {
            this.userChar[1].hide();
            this.userChar[2].hide();
            this.userChar[3].hide();
            this.enemies.show();
            this.enCharts[0].hide()
        },
        selectVegeta: function () {
            this.userChar[0].hide();
            this.userChar[2].hide();
            this.userChar[3].hide();
            this.enemies.show();
            this.enCharts[1].hide()
        },
        selectFrieza: function () {
            this.userChar[0].hide();
            this.userChar[1].hide();
            this.userChar[3].hide();
            this.enemies.show();
            this.enCharts[2].hide()
        },
        selectBuu: function () {
            this.userChar[0].hide();
            this.userChar[1].hide();
            this.userChar[2].hide();
            this.enemies.show();
            this.enCharts[3].hide()
        },
        selectGokuEnemy: function () {
            this.enCharts[0].hide();
            this.defenders.show();
            this.defCharts[0].show();
            this.defCharts[1].hide();
            this.defCharts[2].hide();
            this.defCharts[3].hide();
        },
        selectVegetaEnemy: function () {
            this.enCharts[1].hide();
            this.defenders.show();
            this.defCharts[0].hide();
            this.defCharts[1].show();
            this.defCharts[2].hide();
            this.defCharts[3].hide();
        },
        selectFriezaEnemy: function () {
            this.enCharts[2].hide();
            this.defenders.show();
            this.defCharts[0].hide();
            this.defCharts[1].hide();
            this.defCharts[2].show();
            this.defCharts[3].hide();
        },
        selectBuuEnemy: function () {
            this.enCharts[3].hide();
            this.defenders.show();
            this.defCharts[0].hide();
            this.defCharts[1].hide();
            this.defCharts[2].hide();
            this.defCharts[3].show();
        },
        //function controls the fight outcome
        fight: function () {
            enemy.health -= player.baseAttack;
            player.baseAttack += player.currentAttack;
            console.log(enemy.health);
            console.log(player.baseAttack);
            player.health -= enemy.counterAttack;
            console.log(player.health);
            player.userStats.text("Attacked for " + player.currentAttack + " damage remaining health " + player.health );
            enemy.enemyStats.text("Attacked you for " + enemy.counterAttack + " damage remaining health " +enemy.health);
            if (enemy.health <= 0) {
                console.log("pick a new character")
                this.defenders.hide();
                this.attack.attr("disabled", true);

            } else if (player.health <= 0) {
                console.log("you lose")
                this.enemies.hide();
                this.attack.attr("disabled", true);
                this.reset.show();
            }


        },
        nextFight: function(){
            this.attack.attr("disabled",false);
        },

        // ___________________ ///
        setPlayerValue : function( baseAttack, currentAttack, health, name){
            player.baseAttack = baseAttack;
            player.currentAttack = currentAttack;
            player.health = health;
            player.name.text(name + " " + player.health);
        },
        
        // _____________________ ///
        setEnemyValue : function( counterAttack, health, name){
            enemy.counterAttack = counterAttack;
            enemy.health = health;
            enemy.name.text(name + " " + enemy.health);
        }
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startGame();
    }
    // User selects a character
    $("#gokuchar").on("click", function () {
        
        game.setPlayerValue(6,6,140,game.listOfNames[0]);
        game.selectGoku();

    });

    $("#vegetachar").on("click", function () {
        player.name.text(game.listOfNames[1]);
        game.setPlayerValue(10,10,100);
        game.selectVegeta();
    });

    $("#friezachar").on("click", function () {
        player.name.text(game.listOfNames[2]);
        game.setPlayerValue(8,8,120);
        game.selectFrieza();

    });

    $("#buuchar").on("click", function () {
        player.name.text(game.listOfNames[3]);
        game.setPlayerValue(10,10,180);
        game.selectBuu();

    });

    //User selects enemy
    $("#gokuen").on("click", function () {
        enemy.name.text(game.listOfNames[1]);
        game.setEnemyValue(50,1500);
        game.nextFight();
        game.selectGokuEnemy();

    });

    $("#vegetaen").on("click", function () {
        enemy.name.text(game.listOfNames[1]);
        game.setEnemyValue(10, 200,"Vegeta");
        game.nextFight();
        game.selectVegetaEnemy();
    });
    $("#friezaen").on("click", function () {
        enemy.name.text(game.listOfNames[2]);
        game.setEnemyValue(10, 100);
        game.nextFight();
        game.selectFriezaEnemy();
    });
    $("#buuen").on("click", function () {
        enemy.name.text(game.listOfNames[3]);
        game.setEnemyValue(50,1500);
        game.nextFight();
        game.selectBuuEnemy();
    });
    game.attack.click(function () {
        game.fight();
    });
    game.reset.click(function (){
        location.reload();
    })
});