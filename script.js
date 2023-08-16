function moveLeft() {
  var ball = document.getElementById("ball");
  var leftPosition = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  ball.style.left = (leftPosition - 10) + "px";
}

function moveRight() {
  var ball = document.getElementById("ball");
  var leftPosition = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  ball.style.left = (leftPosition + 10) + "px";
}

function moveUp() {
  var ball = document.getElementById("ball");
  var topPosition = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  ball.style.top = (topPosition - 10) + "px";
}

function moveDown() {
  var ball = document.getElementById("ball");
  var topPosition = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  ball.style.top = (topPosition + 10) + "px";
}

window.onload = function() {
    var wall = document.getElementById("wall");
    var position = window.innerWidth - 100;

    setInterval(moveWall, 10); 
    function moveWall() {
        position -= 1;
        wall.style.left = position + "px";

        if (position <= -100) {
            position = window.innerWidth - 100;
            wall.style.left = position + "px";
            wall.style.transform = "translateX(0)"; 
        }
        wall.style.transform = "translateX(100%)"; 
    } 



	var wallA = document.getElementById("wallA");
    var positionA = window.innerWidth - 100;

    setInterval(moveWallA, 10); 
    function moveWallA() {
        positionA -= 1;
        wallA.style.left = positionA + "px";

        if (positionA <= -100) {
            positionA = window.innerWidth - 100;
            wallA.style.left = positionA + "px";
            wallA.style.transform = "translateX(0)"; 
        }
        wallA.style.transform = "translate(100%)"; 
    }


	var wallB = document.getElementById("wallB");
    var positionB = window.innerWidth - 100;

    setInterval(moveWallB, 10); 
    function moveWallB() {
        positionB -= 1;
        wallB.style.left = positionB + "px";

        if (positionB <= -100) {
            positionB = window.innerWidth - 100;
            wallB.style.left = positionB + "px";
            wallB.style.transform = "translateX(0)"; 
        }
        wallB.style.transform = "translateX(100%)"; 
    }
	
	
	var wallC = document.getElementById("wallC");
    var positionC = window.innerWidth - 100;

    setInterval(moveWallC, 10); 
    function moveWallC() {
        positionC -= 1;
        wallC.style.left = positionC + "px";

        if (positionC <= -100) {
            positionC = window.innerWidth - 100;
            wallC.style.left = positionC + "px";
            wallC.style.transform = "translateX(0)"; 
        }
        wallC.style.transform = "translateX(100%)"; 
    }	
	
	var wallD = document.getElementById("wallD");
    var positionD = window.innerWidth - 100;

    setInterval(moveWallD, 10); 
    function moveWallD() {
        positionD -= 1;
        wallD.style.left = positionD + "px";

        if (positionD <= -100) {
            positionD = window.innerWidth - 100;
            wallD.style.left = positionD + "px";
            wallD.style.transform = "translateX(0)"; 
        }
        wallD.style.transform = "translateX(100%)"; 
    }
	
};



var ballS = document.getElementById("ball");
var x = 331;
var y = 351;

document.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 38: 
      y -= 50;
      break;
    case 40: 
      y += 50;
      break;
  }

  ballS.style.left = x + "px";
  ballS.style.top = y + "px";
});


//SCORE
  var ballA = document.getElementById("ball");
  var ballG = document.getElementById("ball");
  var wallA = document.getElementById("wall");
  var score = 0;

    function checkCollision() {
      var ballRect = ballA.getBoundingClientRect();
      var wallRect = wallA.getBoundingClientRect();

      if (
        ballRect.bottom >= wallRect.top &&
        ballRect.top <= wallRect.bottom 
      ) {
        resetBall();
        score += 5;
        console.log("Score: " + score);
      }
    }
        function checkCollision() {
          var ballRect = ballA.getBoundingClientRect();
          var wallRect = wallA.getBoundingClientRect();

          if (
            ballRect.bottom >= wallRect.top &&
            ballRect.top <= wallRect.bottom 
          ) {
            return true;
          } else {
            return false;
          }
        }

        // Function to move the ball
        function moveBall() {
          var positionP = ballA.offsetTop;
          positionP += 5;
          ballA.style.top = positionP + "px";

          if (positionP >= window.innerHeight) {
            clearInterval(ballInterval);
            alert("Game Over! Your score is: " + score);
          }

          if (checkCollision()) {
            score += 1;
          }
        }
        // Start the ball movement
        var ballInterval = setInterval(moveBall, 500);
		
