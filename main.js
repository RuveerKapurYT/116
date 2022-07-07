noseX=0;
noseY=0;

function preload(){
    mumstache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mumstache,noseX-18,noseY-5,40,30);
}

function take_snapshot(){
    save('myFilterImage.png');
    
}

function modelLoaded(){
    console.log("posenet is insialised");
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseX="+results[0].pose.nose.y);
    }
}