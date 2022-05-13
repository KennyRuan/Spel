//rock = spöket


//variabler
var shooteffect = new Audio('lasersound.mp3');
var backgroundsong = new Audio("backgroundsound.mp3");
var jet2 = document.getElementById("shoota");
var jet = document.getElementById("shooter");
var board = document.getElementById("board");


window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet2).getPropertyValue("left"));
  if (e.key == "a" && left > 0) {
    jet2.style.left = left - 10 + "px";
  }

      else if (e.key == "d" && left <= 630) {
      jet2.style.left = left + 10 + "px";
    }

    if (e.key == "v" || e.keyCode == 16) {
      shooteffect.play();
      //16 står för shift key

      var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      board.appendChild(bullet);
  
      var movebullet = setInterval(() => {
        var rocks = document.getElementsByClassName("rocks");
  
        for (var i = 0; i < rocks.length; i++) {
          var rock = rocks[i];
          if (rock != undefined) {
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();
            
  
            //tittar ifall spöket och skotten är på samma ställe
            //Om de är på samma ställe förstörs stenen
  
            if (
              bulletbound.left >= rockbound.left &&
              bulletbound.right <= rockbound.right &&
              bulletbound.top <= rockbound.top &&
              bulletbound.bottom <= rockbound.bottom
              
  
            ) {
              rock.parentElement.removeChild(rock); //Tar bort stenen som blivit träffad
              //ger poäng
              document.getElementById("points").innerHTML =
                parseInt(document.getElementById("points").innerHTML) + 1;
                killSound.play();
            }
          }
        }
        var bulletbottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );
  
        //stoppar skotten ifrån att åka utanför boxen
        if (bulletbottom >= 700) {
          clearInterval(movebullet);
        }
  
        bullet.style.left = left + "px"; //gör så att skottet ligger ovanför
        bullet.style.bottom = bulletbottom + 2.5 + "px";
      });
    }
  });
  
  
  
 
 
      
  

  
  



















window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
   

  }
  //460  =>  spelbrädans bredd- shooter bredd
  else if (e.key == "ArrowRight" && left <= 630) {
    jet.style.left = left + 10 + "px";
    
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    shooteffect.play();
    //32 står för space bar
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();
          

            //tittar ifall spöket och skotten är på samma ställe
            //Om de är på samma ställe förstörs stenen

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
            

          ) {
            rock.parentElement.removeChild(rock); //tar bort stenen som har blivit träffad
            //ger poäng
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
              killSound.play();
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //stoppar skottet ifrån att åka utanför banan
      if (bulletbottom >= 700) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //gör så att skottet är ovanför shooter
      bullet.style.bottom = bulletbottom + 2.5 + "px";
    });
  }
});

var generaterocks = setInterval(() => {
  var rock = document.createElement("div");
  rock.classList.add("rocks");
  //ger random ställe
  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //genererar ett värde mellan 0 till 650 där 650 => spelbrädans bredd - spöke bredd
  rock.style.left = Math.floor(Math.random() * 650) + "px";

  board.appendChild(rock);
}, 1000);

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("rocks");

  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      //Now I have to increase the top of each rock,so that the rocks can move downwards..
      var rock = rocks[i]; //getting each rock
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );
      //675 => spelbrädans höjd - spökens höjd + 25
      if (rocktop >= 675) {
        alert("Game Over");
        clearInterval(moverocks);
        window.location.reload();
      }

      rock.style.top = rocktop + 25 + "px";
    }
  }
  backgroundsong.play();
}, 650);
      
