var cat, mouse, garden;
var catImage, catStopImage, mouseImage, gardenImage;
var catMoving, mouseMoving;

function preload() {
    catMoving = loadAnimation("tomTwo.png", "tomThree.png");
    mouseMoving = loadAnimation("jerryTwo.png", "jerryThree.png");
    gardenImage = loadImage("garden.png");
    catImage = loadAnimation("tomOne.png");
    mouseImage = loadAnimation("jerryFour.png")
    catStopImage = loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(800,800);

    garden = createSprite(400,400);
    garden.addImage("background", gardenImage);

    cat = createSprite(600,650,50,50);
    cat.addAnimation("sitting", catImage);
    cat.addAnimation("standing", catStopImage);
    cat.addAnimation("moving", catMoving);
    cat.scale = 0.12;

    mouse = createSprite(200,650,50,50);
    mouse.addAnimation("moving", mouseMoving);
    mouse.addAnimation("stop", mouseImage);
    mouse.scale = 0.12;

}

function draw() {
    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.changeAnimation("standing");
    }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.changeAnimation("moving");
    }
}
