//https://teachablemachine.withgoogle.com/models/OCl3x5Z8y/

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
   png_quality:90
});

document.getElementById("camera");

webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src'"+data_uri+"'  />"
    })
}
console.log("ml5version", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OCl3x5Z8y/model.json", modelLoaded)

function modelLoaded(){
    console.log("modelLoaded!")
}