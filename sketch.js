function preload() {

  bgImage = loadImage("Images/download.png");
  marioImg = loadAnimation("Images/mario00.png", "Images/mario01.png", "Images/mario02.png", "Images/mario03.png");
  groundImage = loadImage("Images/ground2.png");
  obsImage = loadAnimation("Images/obstacle1.png", "Images/obstacle2.png", "Images/obstacle3.png", "Images/obstacle4.png");
  coinsImage = loadImage("Images/coinsImg.png");
  bonousImage = loadImage("Images/bonous.png");
  cloudsImage = loadImage("Images/cloudsImage.png");
}

function setup() {

  createCanvas(windowWidth - 100, windowHeight - 70);

  mario = createSprite(width / 3 - 100, height - 100, 100, 100);
  mario.addAnimation("mario", marioImg);

  ground = createSprite(width / 2, height - 70, width * 2.5, 20);

  obsGroup = new Group()
  coinsGroup = new Group()
  bonousGroup = new Group()
  cloudsGroup = new Group()

}

function draw() {
  background("#0000ff");

  ground.velocityX = -4;
  if (ground.x < 0) {

    ground.x = ground.width / 3;
  }

  mario.collide(ground);

  spawnObstacle()
  spawnCoins()
  spawnBonous()
  spawnClouds()

  drawSprites();
}

function spawnObstacle() {
  if (frameCount % 190 === 0) {

    var obs = createSprite(width - 70, height - 100, 40, 50);
    obs.addAnimation("obs", obsImage);
    obs.velocityX = -3;
    obs.scale = 1.2;
    obs.lifetime = width / 3;
    obsGroup.add(obs);
  }

}

function spawnCoins() {
  if (frameCount % 60 === 0) {

    var coins = createSprite(width - 70, 100, 40, 50);
    coins.addImage("coins", coinsImage);
    coins.y = Math.round(random(400, 700));
    coins.velocityX = -3;
    coins.scale = 0.05;
    coins.lifetime = width / 3;
    coinsGroup.add(coins);
  }

}

function spawnBonous() {
  if (frameCount % 700 === 0) {

    var bonous = createSprite(width - 70, 100, 40, 50);
    bonous.addImage("bonous", bonousImage);
    bonous.y = Math.round(random(400, 700));
    bonous.velocityX = -3;
    bonous.scale = 0.1;
    bonous.lifetime = width / 3;
    bonousGroup.add(bonous);
  }

}

function spawnClouds() {
  if (frameCount % 127 === 0) {

    var clouds = createSprite(width - 70, 100, 40, 50);
    clouds.addImage("clouds", cloudsImage);
    clouds.velocityX = -3;
    clouds.scale = 0.1;
    clouds.lifetime = width / 3;
    cloudsGroup.add(clouds);
  }

}