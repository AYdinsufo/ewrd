img="";
status="";
objects=[];
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function preload(){
img=loadImage("bedroom.jpeg");
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status: object detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
    }
function modelloaded(){
    console.log("model is loaded lol")
    status=true;
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}

