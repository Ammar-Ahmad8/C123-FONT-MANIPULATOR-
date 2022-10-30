function setup(){
    video=createCapture(VIDEO)
    video.size(550, 500)

    canvas=createCanvas(550, 430)
    canvas.position(560, 85)

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    background('grey')
    fill('#F90098')
    text("Ammar", 50, 400)
    textSize(difference)
    document.getElementById("square").innerHTML="The side of your font is:"+difference+ "px"
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')

}

noseX=0
noseY=0
rightWristX=0
leftWristX=0
difference=0

function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY)
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX-rightWristX);
}
}