function identify(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7clkWGgaT/model.json',modelLoaded);
}
function modelLoaded(){
classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
console.error(error);
}

else{
console.log(results);
random_r=Math.floor(Math.random()*255)+1;
random_g=Math.floor(Math.random()*255)+1;
random_b=Math.floor(Math.random()*255)+1;
document.getElementById("result").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+' %';
document.getElementById("result").innerHTML='I Hear - '+results[0].label;

img1=document.getElementById('cat');
img2=document.getElementById('cow');
img3=document.getElementById('dog');
img4=document.getElementById('lion');
img5=document.getElementById('bgnoise');

if(results[0].label=="Mooing"){
img1.src="cow.gif";
img2.src="cat.png";
img3.src="dog.png";
img4.src="lion.png";
img5.src="ear.png";
}
else if(results[0].label=="Meowing"){
    img1.src="cow.png";
    img2.src="cat.gif";
    img3.src="dog.png";
    img4.src="lion.png";
    img5.src="ear.png";
}
else if(results[0].label=="Barking"){
    img1.src="cow.png";
    img2.src="cat.png";
    img3.src="dog.gif";
    img4.src="lion.png";
    img5.src="ear.png";
}
else if(results[0].label=="Roaring"){
    img1.src="cow.png";
    img2.src="cat.png";
    img3.src="dog.png";
    img4.src="lion.gif";
    img5.src="ear.png";
}
else{
    img1.src="cow.png";
    img2.src="cat.png";
    img3.src="dog.png";
    img4.src="lion.png";
    img5.src="ear.png";
}
}
}
