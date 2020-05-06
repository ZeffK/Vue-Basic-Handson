new Vue(
    {
        el:'#app',
        data:{
            playerHealth:100,
            monsterHealth:100,
            gameIsRunning:false
        },

        methods :{
            startGame:function(){
                this.gameIsRunning=true;
                this.playerHealth=100;
                this.monsterHealth=100;
            },

            attack: function(){
               
                var damage=this.calculateDamage(5,7)
                this.monsterHealth-=damage;
                if(this.checkWin()){
                return;
            }            
                              
                damage=this.calculateDamage(3,10)
                this.playerHealth-=damage;
                if(this.checkWin());
                
            

            },

            specialAttack:function(){
                this.monsterHealth-=this.calculateDamage(10,20);
                if(this.checkWin()){
                return;}

                damage=this.calculateDamage(3,10)
                this.playerHealth-=damage;
                if(this.checkWin());


                

            },

            heal:function(){

                if(this.playerHealth <=90){
                    this.playerHealth +=10;
                }
                else{
                    this.playerHealth=100;
                }

                damage=this.calculateDamage(3,10)
                this.playerHealth-=damage;
                if(this.checkWin());





            },

            giveUp: function(){
                this.gameIsRunning=false;
                this.startGame;

            },

            calculateDamage:function(min,max){

                return Math.max(Math.floor (Math.random( )* max + 1 ,min) ) 
            },

            checkWin: function(){
                if(this.monsterHealth <=0){
                    if (confirm('you won this game New game ?'))
                     {
                         this.startGame();
                     }
                     else{
                         this.gameIsRunning=false;

                     }
                    return true ;
                }

                else if(this.playerHealth <=0){

                    if (confirm('you Lost this game New game ?'))
                     {
                         this.startGame();
                     }
                     else{
                         this.gameIsRunning=false;

                     }
                    return true ;
                
                }
                return false;


            }


        }

    }
);