$(document).ready(function () {


    //OBJECT
    //crate player object 
    var player = {
        hit: 0,
        health: 0,
        attack: 0,
    }

    var enemy = {
        hit: 0,
        health: 0,
    }

    var game = {
        characters: $("#characters"),
        enemies: $("#enemies"),
        defenders: $("#defenders"),
        userChar: [$("#gokuchar"), $("#vegetachar"), $("#friezachar"), $("#buuchar")],
        enCharts: [$("#gokuen"), $("#vegetaen"), $("#friezaen"), $("#buuen")],
        defCharts: [$("#gokudef"), $("#vegetadef"), $("#friezadef"), $("#buudef")],
        attack: $("#attack"),
        fightText: $("#fight"),
        reset: $("#reset"),
        //Functions
        //==============================================================================================================================================
        startGame: function () {
            this.enemies.hide();
            this.defenders.hide();
            this.reset.hide();
            enemy.hit = 0;
            enemy.health = 0;
            player.hit = 0;
            player.health = 0;
            player.attack = 0;
        },
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

        fight: function () {
            enemy.health -= player.hit;
            player.hit += player.attack
            console.log(enemy.health);
            console.log(player.hit);
            player.health -= enemy.hit;
            console.log(player.health)
            // game.fightText.text(enemy.health)
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
        showOnScreen:function(){

        }
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startGame();
    }
    // User selects a character
    $("#gokuchar").on("click", function () {
        player.attack = 6;
        player.hit = 12;
        player.health = 140;
        game.selectGoku();

    });

    $("#vegetachar").on("click", function () {
        player.attack = 10;
        player.hit = 10;
        player.health = 100;
        game.selectVegeta();
    });

    $("#friezachar").on("click", function () {
        player.attack = 8;
        player.hit = 8;
        player.health = 120;
        game.selectFrieza();

    });

    $("#buuchar").on("click", function () {
        player.attack = 10;
        player.hit = 10;
        player.health = 180;
        game.selectBuu();

    });

    //User selects enemy
    $("#gokuen").on("click", function () {
        game.enCharts[0] = $("#gokuen")
        enemy.hit = 50;
        enemy.health = 1500;
        game.nextFight();
        game.selectGokuEnemy();

    });

    $("#vegetaen").on("click", function () {
        game.enCharts[1] = $("#vegetaen")
        enemy.hit = 10;
        enemy.health = 200;
        game.nextFight();
        game.selectVegetaEnemy();
    });
    $("#friezaen").on("click", function () {
        game.enCharts[1] = $("#friezaen")
        enemy.hit = 10;
        enemy.health = 1000;
        game.nextFight();
        game.selectFriezaEnemy();
    });
    $("#buuen").on("click", function () {
        game.enCharts[1] = $("#buuen")
        enemy.hit = 40;
        enemy.health = 1400;
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