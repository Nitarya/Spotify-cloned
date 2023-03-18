console.log("Welcome to spotify")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/mp3 songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/1.mp3", coverPath: "images/cover1.jpg" },
    { songName: "jshdsjdbSalaam-e-Ishq", filePath: "mp3 songs/2.mp3", coverPath: "images/cover2.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/3.mp3", coverPath: "images/cover3.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/4.mp3", coverPath: "images/cover4.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/5.mp3", coverPath: "images/cover5.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/6.mp3", coverPath: "images/cover6.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/7.mp3", coverPath: "images/cover7.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/8.mp3", coverPath: "images/cover8.jpg" },
    { songName: "Salaam-e-Ishq", filePath: "mp3 songs/9.mp3", coverPath: "images/cover9.jpg" },
]


//songItems.forEach((element,i)=>{

// element.getElementsByTagName("img")[0].src=mp3songs[i].coverPath;
//element.getElementsByClassName("songName")[0].innerText=mp3songs[i].songName;
//})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        //  gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = (e) => {
    e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        ;
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(e);
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        //audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.src='mp3 songs/'+(songIndex+1)+'.mp3'
        audioElement.currentTime=0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }


    // audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.src='mp3 songs/'+(songIndex+1)+'.mp3'
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }


    // audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.src='mp3 songs/'+(songIndex+1)+'.mp3'
    masterSongName.innerText = songs[songIndex+1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
})
