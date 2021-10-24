
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

   scoreLeftwrist=results[0].pose.keypoints[9].score;
   scoreRightwrist=results[0].pose.keypoints[10].score;

    
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
song=loadSound("music_1.mp3");
}


function draw() {
image(video,0,0,600,500);

fill("#FF0000");
stroke("#FF0000");

if(scoreLeftwrist > 0.2) {
  circle(leftwristX, leftwristY, 20);


  InNumberleftwristY = Number(leftwristY);
  remove_decimals = floor(InNumberleftwristY);
  volume = remove_decimals/500;
  document.getElementById("volume").innerHTML= "volume = " + volume;
  
  song.setVolume(volume);
  
}

fill("#FF0000");
stroke("#FF0000");

if (scoreRightwrist > 0.2){
  circle(rightwristX, rightwristY, 20);

if (rightwristY > 0 && rightwristX <= 100) {
  document.getElementById("speed").innerHTML= "speed = 0.5";
  song.rate(0.5);

}

else if (rightwristY > 100 && rightwristX <= 200){
document.getElementById("speed").innerHTML= "speed = 1";
song.rate(1);
}

else if (rightwristY > 200 && rightwristX <= 300) {
document.getElementById("speed").innerHTML= "speed = 1.5";
song.rate(1.5);
}

else if (rightwristY > 300 && rightwristX <= 400) {
  document.getElementById("speed").innerHTML= "speed = 2";
  song.rate(2);
}

else if (rightwristY > 400 && rightwristX <= 500) {
  document.getElementById("speed").innerHTML= "speed = 2.5";
  song.rate(2.5);
}

}

}


function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);

}


