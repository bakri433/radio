var audio = document.getElementById("audio-file");
audio.volume=50/100;
audio.playbackRate=1;
var play = document.getElementById("play");
var next = document.getElementById("next");
var previous = document.getElementById("prev");
var title = document.getElementById("audio_title");
var image = document.getElementById("image");
var container = document.querySelector(".container");
var isplayed = false;  
var arrayofback=["linear-gradient(45deg, #20a743 50%, black 50%)","linear-gradient(45deg, #af9c36 50%, black 50%)"];
var arrayofimages = ["thaura.jpg","quran.jpeg"]
  var arrayofaudio = ["jana.mp3","093.mp3"];
    var arrayofnames= ["اناشيد","القرآن الكريم"];
    var num=0; 
function setsources(){
  container.style.background = arrayofback[num];
  image.src = arrayofimages[num];
        audio.src=arrayofaudio[num];
    title.innerHTML = arrayofnames[num]; 
}

play.onclick = function(){
if (isplayed==false){
    audio.src = arrayofaudio[num];
    title.innerHTML = arrayofnames[num];
 // play.style.visibility="hidden"
play.src="pause.png"


audio.play();
isplayed = true;


}else{
audio.pause();
isplayed = false;
play.src="play-64.png"

}
}
next.onclick=function(){    
    num++;
  play.src="play-64.png"
  isplayed = false;
if(num > arrayofaudio.length-1){
num =0;
}
setsources()

}
previous.onclick = function(){
play.src="play-64.png"

    num--;
  isplayed = false;
   if(num<0){
    num = arrayofaudio.length-1;

   };
   setsources();
};
var volum = document.querySelector(".sounds");
volum.addEventListener("change",function(){
  audio.volume=volum.value/100;
})
var speed = document.querySelector(".speeds");
speed.addEventListener("change",function(){
  audio.playbackRate=speed.value/100;
})
//console.log(audio.volume)