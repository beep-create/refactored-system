
song = " ";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function setup() {
canvas = createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video, modelLoaded());
posenet.on('pose', gotPoses);


}

function gotPoses(results) 
{
  if(results.length > 0) {
    console.log(results);

    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;

    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;

    console.log("left wrist x = " + leftwristX + " left wrist y = " + leftwristY);
    console.log("right wrist x = " + rightwristX + " right wrist y = " + rightwristY);
  }
}


function modelLoaded() {
console.log("model loaded");
}


function preload() {
song=loadSound("music.mp3");
}


function draw() {
image(video,0,0,600,500);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);

}


