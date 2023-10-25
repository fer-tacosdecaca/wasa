function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet', loadeded)
}
function loadeded(){
  console.log("opiopoo")
}
function draw(){
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResults)
}

var previous_result = '';

function gotResults(error, results){
  if (error) {
    console.error(error)
  } else {
    console.log(results)
    if(results[0].confidence > 0.5 && previous_result != results[0].label){
      previous_result = results[0].label
      speack_data = 'el sufkdueht dukj,ahdkshydkd es'+results[0].label;
      var synth = window.speechSynthesis
      var utterThis = new SpeechSynthesisUtterance(speack_data)
      synth.speak(utterThis)
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }
}


