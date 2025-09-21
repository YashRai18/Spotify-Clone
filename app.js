// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.MP3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "Warriyo - Mortals", filePath: "1.MP3", coverPath: "1.jpg"},
  {songName: "Cielo - Huma-Huma", filePath: "2.MP3", coverPath: "2.jpg"},
  {songName: "DEAF KEV - Invincible", filePath: "3.MP3", coverPath: "3.jpg"},
  {songName: "Different Heaven - My Heart", filePath: "4.MP3", coverPath: "4.jpg"},
  {songName: "Janji - Heroes Tonight", filePath: "5.MP3", coverPath: "5.jpg"},
  {songName: "Tobu - Candyland", filePath: "6.MP3", coverPath: "6.jpg"},
  {songName: "Elektronomia - Sky High", filePath: "7.MP3", coverPath: "7.jpg"},
  {songName: "Salam-e-Ishq", filePath: "8.MP3", coverPath: "8.jpg"},
  {songName: "Salam-e-Ishq", filePath: "9.MP3", coverPath: "9.jpg"},
  {songName: "Salam-e-Ishq", filePath: "10.MP3", coverPath: "10.jpg"}, 
]

// Set song cover and names
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Play / Pause main button
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  }
  else{
      audioElement.pause();
      masterplay.classList.remove('fa-pause-circle');
      masterplay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
})

// Update progress bar
audioElement.addEventListener('timeupdate', ()=>{
  let progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
  myProgressBar.value = progress;  
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// Reset all play icons
const makeALLPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
   })
}

// Song play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeALLPlays();  
    songIndex = parseInt(e.target.id); // button id should be song index
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle'); 
    audioElement.src = songs[songIndex].filePath; // ✅ fixed
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  })
})

// Next button
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex >= songs.length - 1){
    songIndex = 0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath; // ✅ fixed
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})

// Previous button
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath; // ✅ fixed
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})
