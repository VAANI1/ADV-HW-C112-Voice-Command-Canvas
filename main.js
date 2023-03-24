x = 0;
y = 0;

draw_apple = "";


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as - " + content;

     
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_apple = "set") {
        image(apple.jpg , x, y, 50 ,50);
        document.getElementById("status").innerHTML = "Apple is drawn";
        draw_apple = "";
    }

   
}