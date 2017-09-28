function setup() {
  createCanvas(800,600);
  background(200,200,200);
}

function draw() {
	

	
	//Collo
	strokeWeight(4);
	stroke(110,110,110);
	line(400,400,400,220);
	line(415,400,415,220);
	line(430,400,430,220);
	
	//Testa
	line(415,180,380,130);
	line(415,180,440,60);
	line(415,180,500,200);
	noStroke();
	fill(1,1,1);
	ellipse(415,180,100,100);
	
	//Occhi
	fill(255,255,255);
	ellipse(430,170,30,30);
	fill(0,0,0);
	ellipse(430,170,6,6);
	fill(200,200,200);
	ellipse(405,165,8,8);
	ellipse(450,180,5,5);
	ellipse(440,148,6,6);
	
	//Corpo
	fill(110,110,110);
	ellipse(400,450,70,70);
	fill(1,1,1);
  	rect(350,300,100,150);
  	fill(110,110,110);
  	rect(350,320,100,10);
  	
  	//Logo
  	strokeWeight(10);
  	stroke(0,200,0);
  	line(380,400,380,350);
  	line(380,350,400,380);
  	line(400,380,420,350);
  	line(420,350,420,400);
}