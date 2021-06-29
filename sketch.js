var path,pathImg,runner,run,invisibleBoundary1,invisibleBoundary2;
function preload(){
  //pre-load images
  run = loadAnimation(Runner-1.png,Runner-2.png);
  pathImg = loadImg(path.png);
    )
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(200,50);
runner.addAnimation(run);
runner.x = world.mouseX;
invisibleBoundary1 = createSprite(10,0,20,400)
invisibleBoundary1.visible = false;
invisibleBoundary2 = createSprite(390,0,20,400)
invisibleBoundary2.visible = false;

//moving the background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

//code to reset the background
if (path.y > 400) {
  path.y = path.width/2;
}

}

function draw() {
  background(0);
  preload();
setup();
runner.collide(invisibleBoundary1);
runner.collide(invisibleBoundary2);
}
