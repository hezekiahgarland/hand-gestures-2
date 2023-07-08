Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function take_pic(){
    Webcam.snap(function(cam_pic){
        document.getElementById("result").innerHTML='<img id="pic"src="'+cam_pic+'">';
    });
    texttospeach();
}
p1="";
p2="";
function texttospeach(){
    speak_text="prediction 1 is "+p1+" and prediction 2 is "+p2;
    speak_audio= new SpeechSynthesisUtterance(speak_text);
    window.speechSynthesis.speak(speak_audio);
}