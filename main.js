Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg', 
    jpg_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '">'; 
    });
}

console.log('ml5 version'+ ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VogCknFV0/model.json", modelReady);

function modelReady() {
    console.log("Model has loaded successfully!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predicition is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}