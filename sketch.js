var pared1;
var pared2;
var fondo;

var jugador,jugadorImg;

var abejaGroup;

var disparoGroup;

var langostaGroup;

var enemigo1,enemigo2,enemigo3,enemigo4;

var randomdom;

var score=0;

var database;

function preload(){
   fondo=loadImage("Espacio.webp");
   jugadorImg=loadImage("images/jugador.png");
   
   enemigo1=loadImage("images/enemigo1.png");
   enemigo2=loadImage("images/enemigo2.jpeg");
   enemigo3=loadImage("images/enemigo3.jpeg");
   enemigo4=loadImage("images/enemigo4.png");
  }

function setup() {
  createCanvas(1200,800);
 pared1=createSprite(20,100,20,10000000);
 pared1.visible=false;
 pared2=createSprite(1180,1200,20,10000000);
 pared2.visible=false;

 jugador=createSprite(600,700,20,20);
 jugador.addImage(jugadorImg);
 jugador.scale =0.5;


 abejaGroup= createGroup();
 
 disparoGroup= createGroup();

 langostaGroup= createGroup();

 database=firebase.database();
}

function draw() {
  //console.log(randomdom);
  background(fondo);  
  
   textSize(25);
   fill("red");
   text("Tu Puntuacion es "+ score,200,200)

   randomdom=Math.round(random(1,2));
  
  if(keyDown(32)){

      Disparo();
   }
   if(keyDown("RIGHT_ARROW")){

    jugador.x=jugador.x+8;
 }

 if(keyDown("lEFT_ARROW")){

  jugador.x=jugador.x-8;
}
  
if (World.frameCount % 170 == 0) {
 if(randomdom===1){
  Abeja();
 }
 if(randomdom===2){
  Langosta();
 }
}

if(abejaGroup.isTouching(disparoGroup)){
  console.log("hola");
  abejaGroup.destroyEach();

  score=score+1;
}
  
if(langostaGroup.isTouching(disparoGroup)){
  console.log("hola");
  langostaGroup.destroyEach();

  score=score+1;
}

if(abejaGroup.isTouching(jugador)){
  console.log("hola");
 jugador.destroy();
}
  
if(langostaGroup.isTouching(jugador)){
  console.log("hola");
  jugador.destroy();
}

  drawSprites();
}
function Disparo() {
  var disparo= createSprite(100, 100, 10, 60);
 // disparo.shapeColor("red");
  disparo.x = jugador.x;
  disparo.y=610;
  disparo.velocityY = -4;
  disparo.lifetime = 200;
  disparo.scale = 0.3;
 
disparoGroup.add(disparo)

}
 
 function Abeja() {
  var abeja = createSprite(Math.round(random(0, 1200)),0, 10, 10);
  abeja.addImage(enemigo1)
  abeja.velocityY = 3;
  abeja.lifetime = 950;
  abeja.scale = 0.150;

  abejaGroup.add(abeja);
}
 function Langosta() {
  var langosta = createSprite(Math.round(random(0, 1200)),20, 10, 10);
  langosta.addImage(enemigo4);
  langosta.velocityY = 3;
  langosta.lifetime = 950;
  langosta.scale = 0.2;

  langostaGroup.add(langosta);
 }

