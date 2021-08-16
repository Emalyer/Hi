function preload(){}


function setup(){
canvas=createCanvas(640,480);
canvas.position(600,300);
video=createCapture(VIDEO);
video.hide();
}


function draw(){
image(video,170,100,300,280);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(580,50,80);
circle(580,420,80);
circle(50,420,80);
fill(0,255,0);
stroke(0,255,0);
rect(90,40,451,20);
rect(90,420,451,20);
rect(40,90,20,290);
rect(580,90,20,290);
}

function take_snapshot(){
    save("Filter.png");
}
