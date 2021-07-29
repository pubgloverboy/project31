
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions=[];
var divisionsHeight=300;
var particles=[];
var plinkos=[];

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	
    ground=new Ground(width/2,height,width,20);

	for(var i =0;i<=width;i=i+80){
		divisions.push(new Divisions(i,height-divisionsHeight/2,10,divisionsHeight));
	}

	for(var j =75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,75));
	}

	for(var j =50;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,175));
	}

	for(var j =75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,275));
	}

	for(var j =75;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,375));
	}

  
}


function draw() {
  background("black");

  Engine.update(engine);
  ground.display();
  
  drawSprites();

  for(var n =0;n<divisions.length;n++){
	divisions[n].display();
}

if(frameCount%60===0){
	particles.push(new Particles(random(100,700),10,10));
}

for(var h =0;h<particles.length;h++){
	particles[h].display();
}

for(var j =0;j<plinkos.length;j++){
	plinkos[j].display();
}
 
}



