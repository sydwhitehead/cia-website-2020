let word = "Hello!";
let arrExample = ["World", 54, 298, false, "anotherWord"];
//  arrExample = [ 0, 1, 2, 3, 4, 5];
let posX = 0;
let speed = 2;
let hue = 0;
let bubbles = [];

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
//    console.parent('This is the setup');

    for (let i = 0; i <arrExample.length; i++) {
        console.log(arrExample[i]);
    }
}

function mousePressed() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw() {
    background(40);
    for (let i = 0; i < bubbles.length; i++)
//    console.log("This is the draw")
        {
            bubbles[i].show();
            bubbles[i].move();
        }
}
    class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move() {
        this.x = this.x + random(-2, 1);
        this.y = this.y + random(-4, 4);
    }

        show() {
            stroke(40);
            strokeWeight(1);
            fill(50, 50, 155);
//            noStroke();
//            fill(255, 50);
            ellipse(this.x, this.y, this.r * 2);
        }
        
}
    
    
//    stroke(r, g, b);
    noStroke();
    noFill();
    strokeWeight(4);
   // stroke (0, 0, 255);
  //  rect(200, 200, 30, 150);

    
    stroke (255, 0, 0);
    ellipse(200, 100, 30);
//    ellipse(x, y, d);
//    ellipse(x, y, w, h);

    
    for (let i = 10; i <= 1000; i+=40) {
        noFill();
        let r = random(9, 40);
        stroke(r);
        ellipse(width / 2, height / 2, i);
    }
    

{  
    for( let i = 0; i < height; i+= 150) {
        noFill();
        strokeWeight(.5);
                stroke (255, 0, 0);
        ellipse(i, height / 2, 25);
    }
    
    for( let i = 0; i < height; i+= 150) {
        noFill();
        strokeWeight(5);
        ellipse(i, height / 5, 45);
    }
    
    for( let i = 0; i < height; i+= 10) {
        noFill();
        strokeWeight(1);
            stroke (205, 155, 0);
        ellipse(i++, 500 / 10, 20);
        
            for( let i = 0; i < height; i+= 250) {
        noFill();
        strokeWeight(1);
        ellipse(i, height / 9, 35);
    }
    }
    for( let i = 0; i < height; i+= 40) {
        noFill();
        strokeWeight(5);
            stroke (255, 255, 255);
        ellipse(i, i + 100, 20, 10);
    }
    
    for( let i = 0; i < height; i+= 40) {
        noFill();
        strokeWeight(5);
        ellipse(i, i + 50, 10, 18);
    }
    
    for( let i = 0; i < height; i+= 40) {
        noFill();
        strokeWeight(5);
        ellipse(i, i + 5, 20, 10);
    }
    
    for( let i = 0; i < height; i+= 40) {
        noFill();
        strokeWeight(5);
        ellipse(i, i - 35, 10, 18);
    }
    
        stroke (0, 22, 205);
        rect(300, 305, 80, 40);
    
    
        //crosshairs centers on mouse
    noFill();
    strokeWeight(.5);
rect(mouseX - 25, mouseY, 50, 2);
 rect(mouseX, mouseY - 25, 2, 50)
}