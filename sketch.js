let detailX;
let img;
let timer = 0;
let mainCounter = 0;
let sideCounter = 0;
let otherCounter = 0;

function preload() {
  img = loadImage('IMG_6444.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);//WEBGL mode
  detailX = createSlider(0, 24, 5);//just value: min, max, default value; no step here
  detailX.position(10, height + 10);
  detailX.style('width', '580px');
}

function draw() {
  background(255, 174, 241);
  normalMaterial();
  // rotateY(millis() / 1000);
  // sphere(100, detailX.value(), 24);//value here connects to the createSlider
  //when change detailX"the second parameter", Add faces parallel to the y-axis, rotating around the y-axis, with both faces being planar
  //when change detailY"the third parameter", Add faces parallel to the x-axis and rotate around the y-axis
  push();
  
  translate(0, 0, 300); 
  rotateY(frameCount/3 * 1.5);
  rotateZ(frameCount/3 * 0.0001);
  rotateY(frameCount/3 * 0.03);//this line can be left off using Command + /
  rotateX(frameCount/3 * 0.01);  
  // rotateZ(frameCount/3 * 3);
  ambientLight(60);
  // add point light to showcase specular material
  let locX = mouseX - width ;
  let locY = mouseY - height ;
  pointLight(255, 255, 255, locX, locY, 50);
  imageLight(img);
  specularMaterial(255);
  shininess(360);
  metalness(30);  
  // panorama(img);
  // imageMode(CENTER);
  // orbitControl();
  torus(30, 24, 16, detailX.value()); //甜甜圈
 
  pop();
  
  
}