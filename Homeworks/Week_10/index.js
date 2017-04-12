/// object ///
var objects;
//////////////


function setup() {
  createCanvas(625, 475);
  
  objects = new Move();
  
}

function draw() {
	background(178,178,178);
  
  objects.display();
  objects.update();
  
}

/// Class ///
function Move() {
	this.position = createVector(random(width), random(height));
  this.position2 = createVector(random(width), random(height));
  this.position3 = createVector(random(width), random(height));
  this.position4 = createVector(random(width), random(height));
  this.position5 = createVector(random(width), random(height));
  
  this.move1 = createVector(3, 0);
  this.move2 = createVector(3, 0);
  this.move3 = createVector(3, 0);
  this.move4 = createVector(3, 0);
  this.move5 = createVector(3, 0);
  
  this.gravity1 = createVector(0, 3);
  this.gravity2 = createVector(0, 3);
  this.gravity3 = createVector(0, 3);
  this.gravity4 = createVector(0, 3);
  this.gravity5 = createVector(0, 3);
  
  this.bounceup1 = createVector(0, 5);
  this.bounceup2 = createVector(0, 5);
  this.bounceup3 = createVector(0, 5);
  this.bounceup4 = createVector(0, 5);
  this.bounceup5 = createVector(0, 5);
  
  // drawing of the different color balls // 
  this.display = function() {
  	stroke(0);
    strokeWeight(2);
    
    fill(255,0,0);
    ellipse(this.position.x, this.position.y, 30, 30);
    
    fill(0,255,0);
    ellipse(this.position2.x, this.position2.y, 30, 30);
    
    fill(0,0,255);
    ellipse(this.position3.x, this.position3.y, 30, 30);
    
    fill(255,255,0);
    ellipse(this.position4.x, this.position4.y, 30, 30);
    
    fill(0,255,255);
    ellipse(this.position5.x, this.position5.y, 30, 30);
    
    } // end of diaplay function //
  
  // make the balls move to the right //
  this.update = function() {
  	this.position.add(this.move1);
    this.position2.add(this.move2);
    this.position3.add(this.move3);
    this.position4.add(this.move4);
    this.position5.add(this.move5);
    
    // bounce - make the balls move between left and right wall // 
    if (this.position.x >= width || this.position.x <= 0) {
    	this.move1.x = -this.move1.x;
    }
    if (this.position2.x >= width || this.position2.x <= 0) {
    	this.move2.x = -this.move2.x;
    }
    if (this.position3.x >= width || this.position3.x <= 0) {
    	this.move3.x = -this.move3.x;
    }
    if (this.position4.x >= width || this.position4.x <= 0) {
    	this.move4.x = -this.move4.x;
    }
    if (this.position5.x >= width || this.position5.x <= 0) {
    	this.move5.x = -this.move5.x;
    }
    
    // when space is pressed, balls fall to the floor // 
     if ((keyIsPressed) && (key == ' ')) {
       this.position.add(this.bounceup1);
       this.position2.add(this.bounceup2);
       this.position3.add(this.bounceup3);
       this.position4.add(this.bounceup4);
       this.position5.add(this.bounceup5);
     }
   
    /* trying to make balls bounce off a bit when hitting the floor
    and eventually come to a stop bc of gravity.....but it's not
    working quite yet...*/
    
    if (this.position.y >= height || this.position.y <= 0) {
      this.bounceup1.y = -this.bounceup1.y;
    	this.bounceup1.y += this.gravity1.y;
    }
    if (this.position2.y >= height || this.position2.y <= 0) {
      this.bounceup2.y = -this.bounceup2.y;
    	this.bounceup2.y += this.gravity2.y
    }
    if (this.position3.y >= height || this.position3.y <= 0) {
      this.bounceup3.y = -this.bounceup3.y;
    	this.bounceup3.y += this.gravity3.y
    }
    if (this.position4.y >= height || this.position4.y <= 0) {
      this.bounceup4.y = -this.bounceup4.y;
    	this.bounceup4.y += this.gravity4.y
    }
    if (this.position5.y >= height || this.position5.y <= 0) {
      this.bounceup5.y = -this.bounceup5.y;
    	this.bounceup5.y += this.gravity5.y
    }
    
  } // end of update function //
  
} // end of class: Move() // 




