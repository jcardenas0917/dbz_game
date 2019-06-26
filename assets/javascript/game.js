$(document).ready(function() {


    //OBJECT
 //crate game object 
    var game = {
        health : 0,
        attack : 0,
        counterAttack : 0,
        enemies : $("#enemies"),
        defenders : $("#defenders"),
        gokuChar : $("#gokuchar"),
        gokuSel : $("#gokusel"),
        gokuEn : $("#gokuen"),
        vegeta : Object,
        frieza : Object,
        buu : Object,
        startGame : function(){
            $("#attack").on("click", function() {
            this.gokuSel.hide();
            this.defenders.hide();
            });
        },
        attackDamage: function(){

        },
        counterDamage: function(){

        },
        increaseAttack: function(){

        },
        healthDamge: function(){

        }
    };

    //User interaction
    //=====================================================================================================
   
        $("#gokuchar").on("click", function() {
            game.gokuChar.hide();
        });
    
});