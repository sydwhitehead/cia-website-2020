// module aliases
var Engine = Matter.Engine,
//    Render = Matter.Render,
    World  = Matter.World,
    Bodies = Matter.Bodies;

// declare our global variables
let engine, world;
let circles = [];
let boundaries = [];

let ground;

function setup() {
    // create canvas and parent to div with myContainer ID in html
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    // start physics engine to world object
    engine = Engine.create();
    world  = engine.world;
    
//    boundaries.push(new Boundary(width/2, height - 50, width, 20, 0));
    boundaries.push(new Boundary(width/10, height - 110, width, 10, -3));
//    boundaries.push(new Boundary(width/10, height - 510, width, 10, 13));
    boundaries.push(new Boundary(890, height - 220, width, 10, -13));
//    boundaries.push(new Boundary(890, height - 510, width, 10, 3));
    boundaries.push(new Boundary(890, height - 510, width, 10, 0));
    boundaries.push(new Boundary(790, height - 390, width, 10, 0));
    boundaries.push(new Boundary(width/15, height - 210, width, 10, 0));
    boundaries.push(new Boundary(10, height - 470, width, 10, 0));
    
}

// circle template
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 4,
            restitution: 1.40
        };
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        console.log(this.body);
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
//        circles.style.opacity = 0.5.style.inherit;
        stroke(50, 154, 128);
        fill(109, 208, 183);
        ellipse(0, 0, this.r*2);
        pop();
    };
}

class Boundary {
    constructor(x, y, w, h, a) {
        this.w = w;
        this.h = h;
        let options = {
            friction: 3,
            restitution: 0.95,
            angle: a,
            isStatic: true
        }; 
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world,this.body);
        
    }
    
    show () {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
  //      strokeweight(1);
        noStroke();
        fill(214, 255, 248);
        rect(0, 0, this.w, this.h);
        pop();
        
    }
    
    
    
    
    
}


function mouseDragged() {
    // make new instance of Circle class and push to circles[] array
    circles.push(new Circle(mouseX, mouseY, random(10, 20)));
}

function draw() {
    background(50);
    // update engine each frame
    Engine.update(engine);
    // for loop to draw circles array to canvas
    for ( let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    
    
    for ( let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    
    
}