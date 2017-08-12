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

function pauseGame() {
if (!gamePaused) {
    clearTimeout(gameId);
      gamePaused = true;
} else if (gamePaused) {
      gameId = setTimeout(gameLoop, 1000 / 30);
      gamePaused = false;
}
}
function keyDown(t) {
     if (e.keyCode == 80) pauseGame(t);
}





var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

world.createEntity({
    name: "player",
    shape: "circle",
    radius: 2,
    image: "34127.png",
    imageStretchToFit: true,
    density: 4,
    x: 2,
    onKeyDown: function(e) {
        this.applyImpulse(200, 60);
    }
});




world.createEntity({
    name: "player2",
    shape: "circle",
    radius: 2,
    image: "charizard.png",
    imageStretchToFit: true,
    density: 4,
    x: 2,
    onKeyDown: function(e) {
        this.applyImpulse(200, 60);
    }
});


world.createEntity({
    name: "ground",
    shape: "square",
    type: "static",
    color: "rgb(0,100,0)",
    width: 30,
    height: '1.0',
    y: 12
});

var block = {
    name: "block",
    shape: "square",
    color: "brown",
    image: "36236.png",
    width: .5,
    height: 5,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
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
    if (entity.name() === "player") {
      this.color("black");
    }
  }

};
world.createEntity(block1, {
    x: 15
});

world.createEntity(block1, {
    x: 17
});

world.createEntity(block1, {
   x: 19
});

world.createEntity(block1, {
   x: 21
});
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
