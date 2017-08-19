var gameId;
var btn = document.createElement("Button");
// create a <button> element
var t = document.createTextNode ("Pause")
// create a textnode
// btn.appendChild(t);
// Append the text to <button>
// document.body.appendChild(btn);
// Append <button> to <body>

var button = document.getElementById('button');
console.log(button);
var gamePaused = false;

function pauseGame() {
  gamePaused = !gamePaused;
  document.getElementById('gamePausedLabel').innerHTML = gamePaused ? 'Paused' : "";
  clearForce();
  console.log('Game Paused:'+gamePaused);
}

function clearForce(){

  player2.clearForce();
  player2.clearVelocity();
}
function keyDown(e) {
     console.log('Is Game Paused:'+gamePaused);
     if(gamePaused){
       // don't move
       return;
     }else{
        if (e.keyCode == 80) pauseGame(t);
     }

}
function fire(){

}


gameActive = true;
var gameScore = 0

var scoreSpan = document.getElementById('score-span');


var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

// // var player = world.createEntity({
//     name: "player",
//     shape: "circle",
//     radius: 2,
//     image: "34127.png",
//     imageStretchToFit: true,
//     density: 4,
//     x: 4,
//     onKeyDown: function(e) {
//         if(gamePaused){
//           return;
//         }
//         this.applyImpulse(200, 60);
//     }
// });

// var player2[].x;
// var player2[].y;
//
// var direction = player2;
//   if (direction == 'right') {
//     player2++;
//   } else if (direction == 'left') {
//     player2--;
//   } else if ( direction == 'up') {
//     player2--;
//   } else if ( direction == 'down') {
//     player2++;
//   }



var navKeys = {
  left: 37,
  up: 38,
  right: 39,
  down:  40,
  fire: 32
};
var fire = {
  name: "fire",
  shape: "circle",
  color: "red",
  image: "fire_img.png",

  radius: 2,
  imageStretchToFit: false,
  density: 1,
  x: 1,
  onImpact: function(entity, force) {

      if (entity.name() !== "ground" && entity.name() !== "player2") {
          this.destroy();
      }

      if (entity.name() !== "player2" && entity.name() === "ground") {
        gameOver();
      }
  }
};

var player2 = world.createEntity({
    name: "player2",
    shape: "circle",
    radius: 2,
    image: "mewtwo.png",
    imageStretchToFit: true,
    density: 4,
    x: 3,
    y: 12,
    onKeyDown: function(e) {
        if(gamePaused){
          return;
        }
        console.log('Key Press: '+e.keyCode);
        switch(e.keyCode){
          case navKeys.left:
           // move left
           //this.clearForce();
           //this.clearVelocity();
           this.applyImpulse(200, -145);
           break;
          case navKeys.up:
          // move up
          this.applyImpulse(200, 90);
          break;
          case navKeys.right:
          // move right
          this.applyImpulse(200, 145);
          break;
          case navKeys.down:
          // move down
          this.applyImpulse(200, -180);
          break;
          case navKeys.fire:
          var fire = world.createEntity({
            name: "fire",
            shape: "circle",
            color: "red",
            image: "fire_img.png",

            radius: 1,
            imageStretchToFit: false,
            density: 2,
            x: 7,
            y:10,
            onImpact: function(entity, force) {
                if (entity.name() !== "ground" && entity.name() !== "player2") {
                    this.destroy();
                }
            }
          }, {
            x: 5,

            width: '.5',
            height: '.5'
          });
          fire.applyImpulse(300, 130);
          default:
           /// do default here
           break;

        }

    }
});



world.createEntity({
    name: "ground",
    shape: "square",
    type: "static",
    color: "rgb(#deb887)",
    width: 100,
    height: '1.5',
    y: 20
});

// world.createEntity({
//   name: "block2",
//   shape: "square",
//   color: "purple",
//   width: .5,
//   height: 5,
//   x: 5
// });

world.createEntity({
  name: "block3",
  shape: "square",
  color:"purple",
  image: "boulder2.png",
  width: 5,
  height: 5,
  x: 3,
  y: 13
});

// world.createEntity({
//   name: "block4",
//   shape: "square",
//   color: "purple",
//   width: .5,
//   height: 5,
//   x: 4,
//   y: 2,
// });

 var block = {
  name: "block",
  shape: "square",
  color: "brown",
  image: "21230.png",
  width: .5,
  height: 5,
  onImpact: function(entity, force) {

      if (entity.name() !== "ground") {
          this.destroy();
          gameScore ++;
      }

      if (entity.name() === "ground" && gameActive === true) {
        gameOver();
        gameActive = false;
      }
  }
};
var block1 = {
  name: "block1",
  shape: "square",
  color: "brown",
  image: "spr_HGSS_Rocket_Grunt_F.png",
  width: .5,
  height: 5,
  onImpact: function(entity, force) {

      if (entity.name() !== "ground") {
          this.destroy();
          gameScore ++;
          console.log (gameScore);
          scoreSpan.innerHTML = gameScore;
      }

      if (entity.name() === "ground" && gameActive === true) {
        gameOver();
        gameActive = false;
      }
  }
};
function gameOver (){
  console.log('alert!!!');
  alert("You lost, your score was " + gameScore);
}

// var rocket1 = world.createEntity(block1, {
//   x: 27,
//   y: 1,
// });

// world.createEntity(block1, {
//   x: 24,
//   y: 1,
// });

world.createEntity(block1, {
    x: 21,
    y: 1,
});

// world.createEntity(block1, {
//    x: 18,
//    y: 1,
// });

world.createEntity(block1, {
    x: 15,
    y: 1,
});

setTimeout (function(){
  world.createEntity(block1, {
      x: 21,
      y: 1,
  });

  world.createEntity(block1, {
     x: 18,
     y: 1,
  });

  world.createEntity(block1, {
      x: 15,
      y: 1,
  });

}, 3000);

setTimeout (function(){
  world.createEntity(block1, {
      x: 21,
      y: 1,
  });

  world.createEntity(block1, {
     x: 18,
     y: 1,
  });

  world.createEntity(block1, {
      x: 15,
      y: 1,
  });

}, 6000);

setTimeout (function(){
  world.createEntity(block, {
      x: 21,
      y: 1,
  });

  world.createEntity(block, {
     x: 18,
     y: 1,
  });

  world.createEntity(block, {
      x: 15,
      y: 1,
  });

}, 9000);


// world.createEntity(block1, {
//    x: 12,
//    y: 1,
// });

// setTimeout(function() {
//   rocket1.ApplyImpulse(10, 270);
// }, 1000);





// world.createEntity(block, {
//     x: 16,
//     y: 1,
//     width: 4,
//     height: '.5',
// });
//  world.createEntity(block,{
//    x: 18,
//    y: 2,
//    width: 4,
//    height: '.5',
//  });
