$(document).ready(function () {


    //OBJECT
    //crate player object 
    var player = {
        baseAttack: 0,
        health: 0,
        currentAttack: 0,
        userStats: $("#userStats"),
        name: "",
        healthDiplay: "",
    }

    var enemy = {
        counterAttack: 0,
        health: 0,
        enemyStats: $("#enemyStats"),
        name: "",
        healthDiplay: "",
    }

    var game = {
        characters: $("#characters"),
        enemies: $("#enemies"),
        defenders: $("#defenders"),
        userChar: [$("#gokuchar"), $("#vegetachar"), $("#friezachar"), $("#buuchar")],
        enCharts: [$("#gokuen"), $("#vegetaen"), $("#friezaen"), $("#buuen")],
        defCharts: [$("#gokudef"), $("#vegetadef"), $("#friezadef"), $("#buudef")],
        listOfNames:["Goku","Vegeta","Frieza","Maijin Buu"],
        gokuHealth: $(".gokuHealth"),
        vegetaHealth: $(".vegetaHealth"),
        friezaHealth: $(".friezaHealth"),
        buuHealth:  $(".buuHealth"),
        attack: $("#attack"),
        reset: $("#reset"),
        //Functions
        //==============================================================================================================================================
        startGame: function (goku,vegeta,frieza,buu) {
            // this.enemies.hide();
            this.defenders.hide();
            this.reset.hide();
            this.gokuHealth.text(goku);
            this.vegetaHealth.text(vegeta);
            this.friezaHealth.text(frieza);
            this.buuHealth.text(buu);
        },

        //This section manipulates the character selection

        selectGoku: function () {
            this.userChar[1].hide();
            this.userChar[2].hide();
            this.userChar[3].hide();
            this.enemies.show();
            this.enCharts[0].hide();
            
            
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
            player.userStats.text("You attacked " + enemy.name + " for " + player.baseAttack  + " damage");
            enemy.enemyStats.text(enemy.name + " attacked you for " + enemy.counterAttack + " damage");
            enemy.health -= player.baseAttack;
            player.baseAttack += player.currentAttack;
            player.health -= enemy.counterAttack;
            
            
            if (player.name === this.listOfNames[0]){
                this.gokuHealth.text(player.health); 
            }else if (player.name === this.listOfNames[1]){
                this.vegetaHealth.text(player.health); 
            }else if (player.name === this.listOfNames[2]){
                this.friezaHealth.text(player.health);
            }else if (player.name === this.listOfNames[3]){
                this.buuHealth.text(player.health);
            };

            if (enemy.name === this.listOfNames[0]){
                this.gokuHealth.text(enemy.health); 
            }else if (enemy.name === this.listOfNames[1]){
                this.vegetaHealth.text(enemy.health); 
            }else if (enemy.name === this.listOfNames[2]){
                this.friezaHealth.text(enemy.health);
            }else if (enemy.name === this.listOfNames[3]){
                this.buuHealth.text(enemy.health);
            };

            if (enemy.health <= 0) {
                player.userStats.text("pick a new character")
                enemy.enemyStats.text("");
                this.defenders.hide();
                this.attack.attr("disabled", true);

            } else if (player.health <= 0) {
                player.userStats.text("you lost");
                enemy.enemyStats.text("");
                this.enemies.hide();
                this.attack.attr("disabled", true);
                this.reset.show();
            }
                if ((enCharts.length===1)){
                    player.userStats.text("You Lost");
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
            player.name = name;
        },
        
        // _____________________ ///
        setEnemyValue : function( counterAttack, health, name){
            enemy.counterAttack = counterAttack;
            enemy.health = health;
            enemy.name = name;
        },
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startGame(120,100,150,180);
    }
    // User selects a character
    $("#gokuchar").on("click", function () {
        game.setPlayerValue(6,6,120,game.listOfNames[0]);
        game.selectGoku();
        
    });

    $("#vegetachar").on("click", function () {

        game.setPlayerValue(10,10,100,game.listOfNames[1]);
        game.selectVegeta();
    });

    $("#friezachar").on("click", function () {
        game.setPlayerValue(8,8,150,game.listOfNames[2]);
        game.selectFrieza();

    });

    $("#buuchar").on("click", function () {
        game.setPlayerValue(10,10,180,game.listOfNames[3]);
        game.selectBuu();

    });

    //User selects enemy
    $("#gokuen").on("click", function () {
        game.setEnemyValue(6,120,game.listOfNames[0]);
        game.selectGokuEnemy();
        // enCharts.splice(0,0);
        game.nextFight();

    });

    $("#vegetaen").on("click", function () {
        game.setEnemyValue(10, 100,game.listOfNames[1]);
        game.selectVegetaEnemy();
        // enCharts.splice(1,1);
        game.nextFight();
    });
    $("#friezaen").on("click", function () {
        game.setEnemyValue(8, 150,game.listOfNames[2]);
        game.selectFriezaEnemy();
        // enCharts.splice(2,2);
        game.nextFight();
    });
    $("#buuen").on("click", function () {
        game.setEnemyValue(10,180,game.listOfNames[3]);
        game.selectBuuEnemy();
        // enCharts.splice(3,3);
        game.nextFight();
    });
    game.attack.click(function () {
        game.fight();
    });
    game.reset.click(function (){
        location.reload();
    })
});