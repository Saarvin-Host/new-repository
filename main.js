
rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    Canvas = createCanvas(500, 500);
    Canvas.position(950, 120);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    background("blanchedalmond");
    fill("black");
    stroke("gray");
    textSize(difference);
    text("WhiteHatJR", 50, 350);

    document.getElementById("square_side").innerHTML = "font size will be  : "+difference+"px";
}

function modelloaded(){
    console.log("model loaded!");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX  = "+leftwristX+", rightwristX = "+rightwristX+", difference = "+difference);
    }
}