   

   var player1 = "Player 1"; 

    var player2 = "Player 2"; 



    function rollTheDice() { 

        setTimeout(function () { 

            var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

            var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

  

            document.querySelector(".dice1").setAttribute("src", 

                "kahitano" + randomNumber1 + ".png"); 

            document.querySelector(".dice2").setAttribute("src", 

                "kahitano" + randomNumber2 + ".png"); 


            if (randomNumber1 === randomNumber2) { 

                document.querySelector("h1").innerHTML = "Draw!"; 

            } 

            else if (randomNumber1 < randomNumber2) { 

                document.querySelector("h1").innerHTML 

                                = (player2 + " WINS!"); 

            } 

  

            else { 

                document.querySelector("h1").innerHTML 

                                = (player1 + " WINS!"); 

            } 

        }, 2500); 

    } 
 






