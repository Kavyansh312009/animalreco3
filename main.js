function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YrdrSRUZd/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255);
        random_number_g= Math.floor(Math.random()*255);
        random_number_b= Math.floor(Math.random()*255);

        document.getElementById("label_result").innerHTML='I can Hear -'+ results[0].label;
        document.getElementById("label_confidence").innerHTML='Accuracy -'+ (results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("label_result").style.color ="rgb("+random_number_r +","+random_number_g +","+random_number_b+")";
        document.getElementById("label_confidence").style.color ="rgb("+random_number_r +","+random_number_g +","+random_number_b+")";
        img = document.getElementById("a1");
        if(results[0].label =="barking"){
            a1.src ="dog gifer.gif";
        }else if(results[0].label =="meowing"){
            a1.src ="cat.gif";
        }else if(results[0].label =="roaring"){
           a1.src ="lion-roar.gif";
        }
}}
        
    
