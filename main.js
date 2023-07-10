function preload(){
    mario_coin=loadSound("coin.wav");
    mario_gameover=loadSound("gameover.wav");
    mario_jump=loadSound("jump.wav");
    mario_kick=loadSound("kick.wav");
    mario_die=loadSound("mariodie.wav");
    world_start=loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}
function setup(){
 canvas=createCanvas(1236,132);
 canvas.parent("canvas");
 video=createCapture(VIDEO);
 video.size(547,476);
 video.parent("game_console");
 poseNet=ml5.poseNet(video, elrayomcween);
 poseNet.on("pose",hoodie)
}
function elrayomcween(){
    console.log("la modelacion ya ha cargado");
}
function hoodie(blackpink_in_your_area){
    if(blackpink_in_your_area.length>0){
        console.log(blackpink_in_your_area);
        noseX=blackpink_in_your_area[0].pose.nose.x;
        noseY=blackpink_in_your_area[0].pose.nose.y;
    }
}
function draw(){
game();
}