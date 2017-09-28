function setup() {
	createCanvas(500, 500);
		background(100,100,100);


	
}

var x=0;
function draw() {

	
	x++;
	colorMode(RGB);
	strokeWeight(10);
	stroke(50,50,50,x);
	

	//noStroke();


	fill(210, 0, 0);
	//noFill();


	//line(x,y,x1,x1);
	line(200, 200, 400, 400);

	//rect(x,y,width,height); //x,y punto in alto a sinistra
	rect(120, 120, 80, 80);
	
	colorMode(HSB);
	fill(60,90,100,.5);

	//ellipse(x,y,weight,height); x,y = centro
	ellipse(250, 250, 100, 100);

	//ellipse(x,y,weight,height); x,y = centro
	ellipse(350, 350, 80, 80);
	
	ellipse(width*.5,height/2,width/2,width/2);
	
	
	
	stroke(0,0,0);
	line(pmouseX,pmouseY,mouseX,mouseY);
	//	line(mouseX,mouseY,pmouseX,pmouseY);

}