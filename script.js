console.log("Welcome to spotify")

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let songs=[
  {songName:"Salaam-e-Ishq", filePath:"songs/1.mp3" ,coverPath:"covers/1/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/2.mp3" ,coverPath:"covers/2/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/3.mp3" ,coverPath:"covers/3/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/4.mp3" ,coverPath:"covers/4/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/5.mp3" ,coverPath:"covers/5/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/6.mp3" ,coverPath:"covers/6/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/7.mp3" ,coverPath:"covers/7/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/8.mp3" ,coverPath:"covers/8/jpg"},
  {songName:"Salaam-e-Ishq", filePath:"songs/9.mp3" ,coverPath:"covers/9/jpg"},
]
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>)
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-curcle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}   
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-curcle');
    masterPlay.classList.add('fa-play-circle');
     gif.style.opacity=0;
}

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=Progress;
}
)
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value*audioElement.duration/100;
})