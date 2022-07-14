img = "";
Status = "";
objects = [];
function preload() {
    img = loadImage("AC.jpg");
}
function  setup() {
    canvas = createCanvas(640,420);
    canvas.center()
        objectDetector = ml5.objectDetector('cocssd', modelLoaded);
        document.getElementById("status").innerHTML = "Status :Detecting Objects";
    
}
function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResults);
}

    function gotResults(error, results){
        if(error){
            console.error("error")
        }
        else {
            console.log(results);
        }
    }

    function draw(){
        image(img, 0, 0, 640, 420);
        if(Stautus != true){
            for(i = 0 ; i < objects.length ; i++){
                fill("red")
                percent = floor(objects[i].confidence * 100 );  
                text(objects[i].label + " " + perecent + "%" , objects[i].x,objects[i].y );
                rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
                noFill();
            }    
        }
    }

