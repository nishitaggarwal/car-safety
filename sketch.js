var car, wall;
var speed, weight;


function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

  wall = createSprite(1100,200,30,height/2);
  wall.shapeColor= "white";

  car.velocityX = speed;

}

function draw() {
  background(0);  

  if(wall.x-car.x < car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;

    if(deformation>180)
    {
      car.shapeColor="red";
      textSize(20);
      fill (255);
      text ("Result: Lethal for Passengers", 100,130)
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
      textSize(20);
      fill (255);
      text ("Result: Provides Average Safety for Passengers", 100,130)
    }

    if(deformation<100)
    {
      car.shapeColor="green";
      textSize(20);
      fill (255);
      text ("Result: Good for Passengers", 100,130)
    }
  
}
  textSize(20);
  fill (255);
  text ("Car Safety Test",100,70)
  text ("Deformation Value:" + Math.round(deformation),100,100);
  
  
  drawSprites();
}