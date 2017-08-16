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
  player.clearForce();
  player2.clearForce();
  player.clearVelocity();
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





var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

var player = world.createEntity({
    name: "player",
    shape: "circle",
    radius: 2,
    image: "34127.png",
    imageStretchToFit: true,
    density: 4,
    x: 4,
    onKeyDown: function(e) {
        if(gamePaused){
          return;
        }
        this.applyImpulse(200, 60);
    }
});






var player2 = world.createEntity({
    name: "player2",
    shape: "circle",
    radius: 2,
    image: "charizard.png",
    imageStretchToFit: true,
    density: 4,
    x: 4,
    onKeyDown: function(e) {
        if(gamePaused){
          return;
        }
        this.applyImpulse(200, 60);
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

var block = {
    name: "block",
    shape: "square",
    color: "brown",
    image: "36236.png",
    width: .5,
    height: 5,
    onImpact: function(entity, force) {
      console.log('ENTITY:: '+JSON.stringify(entity));
      console.log('FORCE:: '+JSON.stringify(force));
        if (entity.name() === "player" || entity.name() === "player2") {
            player.destroy();
            player2.destroy();
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
