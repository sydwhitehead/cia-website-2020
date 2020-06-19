let drawImage, imgWidth, imgHeight, imgReese;
let flowers = [];

function preload() {
   // let img0 = loadImage('flower0.png');
    for (let i = 0; i < 7; i++) {
        flowers[i] = loadImage('flower' + i + '.png');
    }
    imgReese = loadImage('reese.png');
}

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    background(50);
        image(imgReese, 0, 0, 700, 600);
    drawImage = flowers[0];
    imgWidth = 700;
    imgHeight = 600;
    
    
}
//    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
    
//    function idwDrop(ev) {
//  ev.preventDefault();
//}
//
//function drag(ev) {
//  ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function drop(ev) {
//  ev.preventDefault();
//  var data = ev.dataTransfer.getData("text");
//  ev.target.appendChild(documentid.getElementById(data));
//}
//   function allowDrop(ev) {
//  ev.preventDefault();
//}
//
//function drag(ev) {
//  ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function drop(ev) {
//  ev.preventDefault();
//  var data = ev.dataTransfer.getData("text");
//  ev.target.appendChild(document.getElementById(data));
//} 
//    




//Make the DIV element draggagle:
//dragElement(document.getElementById("mydiv"));

//function dragElement(elmnt) {
//  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//  if (document.getElementById(elmnt.id + "header")) {
//    /* if present, the header is where you move the DIV from:*/
//    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//  } else {
//    /* otherwise, move the DIV from anywhere inside the DIV:*/
//    elmnt.onmousedown = dragMouseDown;
//  }
//
//  function dragMouseDown(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // get the mouse cursor position at startup:
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    document.onmouseup = closeDragElement;
//    // call a function whenever the cursor moves:
//    document.onmousemove = elementDrag;
//  }
//
//  function elementDrag(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // calculate the new cursor position:
//    pos1 = pos3 - e.clientX;
//    pos2 = pos4 - e.clientY;
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    // set the element's new position:
//    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//  }
//
//  function closeDragElement() {
//    /* stop moving when mouse button is released:*/
//    document.onmouseup = null;
//    document.onmousemove = null;
//  }
//}






//function changeImage(value) {
//    drawImage = flowers[value];
//}

//function mouseDragged() {
//  //  image(url, x, y, w, h)
//    image(drawImage, mouseX - (imgWidth / 2), mouseY - (imgHeight / 2), imgWidth, imgHeight);
//}

//function changeSize(value) {
//    imgWidth += parseFloat(value);
//    imgHeight += parseFloat(value);
//    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
//}


function draw() {
    
//    image(imgReese, 0, 0, 800, 700);
//            image(flowers[1], 390, 190, 50, 50);
//               image(flowers[1], 420, 190, 50, 50);
//    image(flowers[0], 400, 180, 50, 50);
//    image(flowers[1], 200, 220, 50, 50);
//    image(flowers[2], 300, 200, 50, 50);
//    
//    image(flowers[0], 350, 200, 50, 50);
//    image(flowers[1], 250, 200, 50, 50);
//    image(flowers[2], 450, 220, 50, 50);
//    
//    image(flowers[0], 215, 200, 50, 50);
//    image(flowers[1], 470, 250, 50, 50);

}
    
    
for (let i = 0; i < 3; i++) {
    dragElement(document.getElementById('drag' + i));
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}