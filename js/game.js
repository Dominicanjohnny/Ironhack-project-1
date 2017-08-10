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
    width: '.5',
    height: 5,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
        }
    }

};
world.createEntity(block, {
    x: 15
});

world.createEntity(block, {
    x: 17
});

world.createEntity(block, {
   x: 19
});

world.createEntity(block, {
   x: 21
});
world.createEntity(block, {
    x: 16,
    y: 1,
    width: 4,
    height: '.5',
});
 world.createEntity(block,{
   x: 18,
   y: 2,
   width: 4,
   height: '.5',
 });
