$(document).ready(function () {


    //OBJECT
    //crate player object 
    var player = {
        startingAttack: 0,
        health: 0,
        attack: 0,
    }

    var enemy = {
        startingAttack: 0,
        health: 0,
        attack: 0,
    }

    var game = {
        characters: $("#characters"),
        enemies: $("#enemies"),
        defenders: $("#defenders"),
        userChar: [$("#gokuchar"), $("#vegetachar"), $("#friezachar"), $("#buuchar")],
        enCharts: [$("#gokuen"), $("#vegetaen"), $("#friezaen"), $("#buuen")],
        defCharts: [$("#gokudef"), $("#vegetadef"), $("#friezadef"), $("#buudef")],
        attack : $("#attack"),
        fightText : $("#fight"),
        //Functions
        //==============================================================================================================================================
        startplayer: function () {
            this.enemies.hide();
            this.defenders.hide();

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
           
            enemy.health -= player.attack;
            // game.fightText.text(enemy.health)
           

        }
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startplayer();
    }
    // User selects a character
    $("#gokuchar").on("click", function () {
        player.attack = 12;
        player.startingAttack = 12;
        player.health = 140;
        game.selectGoku();
        
    });

    $("#vegetachar").on("click", function () {
        player.attack = 10;
        player.startingAttack = 8;
        player.health = 100;
        game.selectVegeta();  
    });

    $("#friezachar").on("click", function () {
        player.attack = 10;
        player.startingAttack = 8;
        player.health = 120;
        game.selectFrieza();
        
    });

    $("#buuchar").on("click", function () {
        player.attack = 10;
        player.startingAttack = 10;
        player.health = 180;
        game.selectBuu();
        
    });

    //User selects enemy
    $("#gokuen").on("click", function () {
        game.enCharts[0] = $("#gokuen")
        game.selectGokuEnemy();
        
    });

    $("#vegetaen").on("click", function () {
        game.enCharts[1] = $("#vegetaen")
        enemy.attack = 10;
        enemy.startingAttack = 8;
        enemy.health = 120;
        game.selectVegetaEnemy();
    });
    $("#vegetaen").on("click", function () {
        game.enCharts[1] = $("#vegetaen")
        game.selectVegetaEnemy();
    });
    $("#friezaen").on("click", function () {
        game.enCharts[1] = $("#friezaen")
        game.selectFriezaEnemy();
    });
    $("#buuen").on("click", function () {
        game.enCharts[1] = $("#buuen")
        game.selectBuuEnemy();
    });
    game.attack.click(function(){
        game.fight();
    });
});