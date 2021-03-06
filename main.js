objectDetector = "";
img = "";
objects = [];
status = "";

function preload() {
    
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}

function modelLoaded() {
    console.log("Model Loaded!") 
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 400, 400);
    if (status != "") {
       
        r = random(255);
        g = random(255);
        b = random(255);


document.getElementById("status").innerHTML = "Status : Object Detected";
        objectDetector.detect(video, gotResult);
        for (var i = 0; i < objects.length; i++) {
            
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects : " + objects.length;
            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y );
            noFill();
            stroke(r, g, b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}