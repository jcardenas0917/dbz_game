$(document).ready(function () {


    //OBJECT
    //crate game object 
    var game = {
        userHealth: 0,
        userAttack: 0,
        userCounterAttack: 0,
        enemyHealth: 0,
        enemyAttack: 0,
        enemyCounterAttack: 0,
        characters: $("#characters"),
        enemies: $("#enemies"),
        defenders: $("#defenders"),
        userChar: [$("#gokuchar"), $("#vegetachar"), $("#friezachar"), $("#buuchar")],
        enCharts: [$("#gokuen"), $("#vegetaen"), $("#friezaen"), $("#buuen")],
        defCharts: [$("#gokudef"), $("#vegetadef"), $("#friezadef"), $("#buudef")],


        //Functions
        //==============================================================================================================================================
        startGame: function () {
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

        attackPower: function () {
                this.userAttack = Math.floor(Math.random() * 49) + 1;
                console.log(this.userAttack);
                console.log("hello");
        },
        counterDamage: function () {

        },
        increaseAttack: function () {

        },
        healthDamge: function () {

        },
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startGame();
    }
    // User selects a character
    $("#gokuchar").on("click", function () {
        game.selectGoku();
        game.attackPower();
    });

    $("#vegetachar").on("click", function () {
        game.selectVegeta();
        game.attackPower();
    });

    $("#friezachar").on("click", function () {
        game.selectFrieza();
        game.attackPower();
    });

    $("#buuchar").on("click", function () {
        game.selectBuu();
        game.attackPower();
    });

    //User selects enemy
    $("#gokuen").on("click", function () {
        game.enCharts[0] = $("#gokuen")
        game.selectGokuEnemy();
    });

    $("#vegetaen").on("click", function () {
        game.enCharts[1] = $("#vegetaen")
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

});