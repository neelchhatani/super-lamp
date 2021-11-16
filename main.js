function start_classification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PtoDfPMJM/model.json', modelready);
}
function modelready(){
classifier.classify(gotresult);
}
function gotresult(error,results){
console.log('gotresult');
if(error){
console.error(error);
}
else{
console.log(results);
random_number_r = Math.floor(Math.random() = 255) + 1;
random_number_g = Math.floor(Math.random)() = 255 + 1;
random_number_b = Math.floor(Math.random)() = 255 + 1;
}
}