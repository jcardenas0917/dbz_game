$(document).ready(function () {


    //OBJECT
    //crate player object 
    var player = {
        baseAttack: 0,
        health: 0,
        currentAttack: 0,
        name: "",
    }

    var enemy = {
        counterAttack: 0,
        health: 0,
        name: "",
        healthDiplay: "",
    }

    var game = {
        listOfNames: ["Goku", "Vegeta", "Frieza", "Maijin Buu"],
        count: [1, 2, 3, 4],
        //Functions
        //==============================================================================================================================================
        //Game starts showing only main charactes for user to select
        startGame: function (goku, vegeta, frieza, buu) {

            $("#enemies").hide();
            $("#defenders").hide();
            $("#reset").hide();
            $("#attack").attr("disabled", true);
            $(".gokuHealth").text(goku);
            $(".vegetaHealth").text(vegeta);
            $(".friezaHealth").text(frieza);
            $(".buuHealth").text(buu);

        },

        //This section manipulates the character selection
        //It will manipulate the DOM based on character Selected

        //User selects Goku Settings
        selectGoku: function () {
            $("#vegetachar").hide();
            $("#friezachar").hide();
            $("#buuchar").hide();
            $("#enemies").show();
            $("#gokuen").hide();
        },

        //User selects Vegeta Settings
        selectVegeta: function () {
            $("#gokuchar").hide();
            $("#friezachar").hide();
            $("#buuchar").hide();
            $("#enemies").show();
            $("#vegetaen").hide()
        },

        //User selects Frieza Settings
        selectFrieza: function () {
            $("#gokuchar").hide();
            $("#vegetachar").hide();
            $("#buuchar").hide();
            $("#enemies").show();
            $("#friezaen").hide();
        },

        //User selects Maijin Buu Settings
        selectBuu: function () {
            $("#gokuchar").hide();
            $("#vegetachar").hide();
            $("#friezachar").hide();
            $("#enemies").show();
            $("#buuen").hide()
        },

        //User selects Goku as Enemy Settings
        selectGokuEnemy: function () {
            $("#gokuen").hide();
            $("#defenders").show();
            $("#gokudef").show();
            $("#vegetadef").hide();
            $("#friezadef").hide();
            $("#buudef").hide();
        },

        //User selects Vegeta as Enemy Settings
        selectVegetaEnemy: function () {
            $("#vegetaen").hide();
            $("#defenders").show();
            $("#gokudef").hide();
            $("#vegetadef").show();
            $("#friezadef").hide();
            $("#buudef").hide();
        },

        //User selects Frieza as Enemy Settings
        selectFriezaEnemy: function () {
            $("#friezaen").hide();
            $("#defenders").show();
            $("#gokudef").hide();
            $("#vegetadef").hide();
            $("#friezadef").show();
            $("#buudef").hide();
        },

        //User selects Maijin Buu as Enemy Settings
        selectBuuEnemy: function () {
            $("#buuen").hide();
            $("#defenders").show();
            $("#gokudef").hide();
            $("#vegetadef").hide();
            $("#friezadef").hide();
            $("#buudef").show();
        },

        //function that controls the fight outcome
        fight: function () {
            document.getElementById("music").play();
            //displays the action of the fight 
            $("#userStats").text("You attacked " + enemy.name + " for " + player.baseAttack + " damage");
            $("#enemyStats").text(enemy.name + " attacked you for " + enemy.counterAttack + " damage");

            //Calculate the enemy health after each hit from player
            enemy.health -= player.baseAttack;


            //Calculate the players health after each hit from enemy
            //Increments player attack after each attack
            player.baseAttack += player.currentAttack;
            player.health -= enemy.counterAttack;


            //Check which character was chosen to diplay 
            //the players health next to the character
            if (player.name === this.listOfNames[0]) {
                $(".gokuHealth").text(player.health);
            } else if (player.name === this.listOfNames[1]) {
                $(".vegetaHealth").text(player.health);
            } else if (player.name === this.listOfNames[2]) {
                $(".friezaHealth").text(player.health);
            } else if (player.name === this.listOfNames[3]) {
                $(".buuHealth").text(player.health);
            };

            //Check which character was chosen to diplay 
            //the enemies health next to the character
            if (enemy.name === this.listOfNames[0]) {
                $(".gokuHealth").text(enemy.health);
            } else if (enemy.name === this.listOfNames[1]) {
                $(".vegetaHealth").text(enemy.health);
            } else if (enemy.name === this.listOfNames[2]) {
                $(".friezaHealth").text(enemy.health);
            } else if (enemy.name === this.listOfNames[3]) {
                $(".buuHealth").text(enemy.health);
            };

            //Check if the enemy was defeated and if there are
            //more enemies available if not the player wins
            if (enemy.health <= 0 && game.count.length === 0) {
                $("#userStats").text("YOU WIN");
                $("#reset").show();
                $("#enemyStats").text("");
                $("#defenders").hide();
                $("#attack").attr("disabled", true);


                //checks if the player's health reached zero to lose the game.
            } else if (player.health <= 0) {
                $("#userStats").text("you lost");
                $("#enemyStats").text("");
                $("#enemies").hide();
                $("#attack").attr("disabled", true);
                $("#reset").show();

                //Check for each for health of each enemy
                //after being defeated will move on to the next fight
            } else if (enemy.health <= 0) {
                $("#userStats").text("pick a new character")
                $("#enemyStats").text("");
                $("#defenders").hide();
                $("#attack").attr("disabled", true);
            }
        },

        //function to disable the attack after each fight.
        nextFight: function () {
            $("#attack").attr("disabled", false);
        },

        // Sets players values after choosing a fighter///
        setPlayerValue: function (baseAttack, currentAttack, health, name) {
            player.baseAttack = baseAttack;
            player.currentAttack = currentAttack;
            player.health = health;
            player.name = name;
        },

        // Sets enemies values after selecting an enemy ///
        setEnemyValue: function (counterAttack, health, name) {
            enemy.counterAttack = counterAttack;
            enemy.health = health;
            enemy.name = name;
        },
    };

    //User interaction
    //=====================================================================================================
    window.onload = function () {

        game.startGame(140, 120, 150, 180);
    }
    // User selects a character

    //Goku Character passes the players attributes
    $("#gokuchar").on("click", function () {
        game.setPlayerValue(10, 10, 140, game.listOfNames[0]);
        game.count.pop();
        game.selectGoku();
        console.log(game.count)

    });

    //Vegeta Character passes the players attributes
    $("#vegetachar").on("click", function () {

        game.setPlayerValue(8, 8, 120, game.listOfNames[1]);
        game.count.pop();
        game.selectVegeta();
    });

    //Frieza Character passes the players attributes
    $("#friezachar").on("click", function () {
        game.setPlayerValue(8, 8, 150, game.listOfNames[2]);
        game.count.pop();
        game.selectFrieza();

    });

    //Maijin Buu Character passes the players attributes
    $("#buuchar").on("click", function () {
        game.setPlayerValue(10, 10, 180, game.listOfNames[3]);
        game.count.pop();
        game.selectBuu();

    });

    //User selects enemy

    //Goku Enemy Character passes the enemy's attributes
    $("#gokuen").on("click", function () {
        game.setEnemyValue(15, 120, game.listOfNames[0]);
        game.selectGokuEnemy();
        game.count.pop();
        console.log(game.count)
        game.nextFight();

    });
    //Vegeta Enemy Character passes the enemy's attributes
    $("#vegetaen").on("click", function () {
        game.setEnemyValue(5, 100, game.listOfNames[1]);
        game.selectVegetaEnemy();
        game.count.pop();
        console.log(game.count)
        game.nextFight();
    });

    //Frieza Enemy Character passes the enemy's attributes
    $("#friezaen").on("click", function () {
        game.setEnemyValue(20, 150, game.listOfNames[2]);
        game.selectFriezaEnemy();
        game.count.pop();
        console.log(game.count)
        game.nextFight();
    });

    //Maijin Buu Enemy Character passes the enemy's attributes
    $("#buuen").on("click", function () {
        game.setEnemyValue(25, 180, game.listOfNames[3]);
        game.selectBuuEnemy();
        game.count.pop();
        console.log(game.count)
        game.nextFight();
    });

    //Calls fight function to start
    $("#attack").click(function () {
        game.fight();
    });

    //Reset the game
    $("#reset").click(function () {
        location.reload();
    })
});