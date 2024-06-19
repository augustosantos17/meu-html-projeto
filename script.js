const songname = document.getElementById('song-name');
const artistname = document.getElementById("artist-name");
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentprogress = document.getElementById('current-progress');
const progresscontainer = document.getElementById('progress-container');

const NovoBalanço = {
      songname : "Novo Balanço",
      artist : "Veigh",
      file: "novobalanço"
};
const EnganaDizendoQueAma = {
      songname : "Engana Dizendo Que Ama",
      artist : "Veigh, Tz da Coronel",
      file: "elaenganadizendoqueama"
};
const TurmadoBairro = {
      songname : 'Turma do Bairro',
      artist : 'Veigh',
      file: 'turmadobairro'
};
let isPlaying = false;
const playlist = [NovoBalanço, EnganaDizendoQueAma, TurmadoBairro];
let index = 0;

function playsong(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}
function pausesong(){
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}

function playpausedecider(){
    if(isPlaying === true){
        pausesong();
    }
    else {
        playsong();
    }    
}

function initializeSong(){
  cover.src = 'images/novobalanço.jpg';
  song. src = `songs/${playlist[index].file}.mp3`;
  songname.innerText = playlist [index].songname;
  artistname.innerText = playlist[index].artist;

}

function previoussong(){
    if(index === 0){
      index = playlist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playsong();
}

function nextsong(){
    if(index === playlist.length - 1){
      index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playsong();
}

function updateprogressbar(){ 
    const barwidth = (song.currentTime/song.duration)*100;
    currentprogress.style.setProperty('--progress', `${barwidth}%`);
}

function jumpto(event){
    const width = progresscontainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumptotime = (clickPosition/width)* song.duration;
}

initializeSong();

play.addEventListener('click', playpausedecider);
previous.addEventListener('click', previoussong);
next.addEventListener('click', nextsong);
song.addEventListener('timeupdate', updateprogressbar);
progresscontainer.addEventListener('click', jumpto);
