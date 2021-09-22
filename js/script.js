const title = document.querySelector('.title');
const audio = document.querySelector('audio');

const previous = document.getElementById('previous');
const playPause = document.getElementById('playPause');
const next = document.getElementById('next');

// SONG LIST
const songList = [
    {
        name: "Kasino - Can't get over",
        path: "../img/cantGetOver.mp3"
    },
    {
        name: "Seu Madruga - Noite serena (funk version), feat. Girafales",
        path: "../img/funkNoiteSerena.mp3"
    },
    {
        name: "Faustão - Ovo cozido",
        path: "../img/ovoFausto.mp3"
    },
    {
        name: "Bill Gates - Teclado lindinho",
        path: "../img/tecladoLindinho.mp3"
    },
];

let songPlaying = false;

// PLAY SONG
function playSong(){
    songPlaying = true;
    audio.play();
    playPause.classList.add('play');
    playPause.innerHTML = '<i class="fas fa-pause"></i>'
}

// PAUSE SONG
function pauseSong(){
    songPlaying = false;
    audio.pause();
    playPause.classList.remove('play');
    playPause.innerHTML = '<i class="fas fa-play"></i>'
}


// PLAY OR PAUSE SONG ON CLICK
playPause.addEventListener('click', () => songPlaying ? pauseSong() : playSong() );

// LOAD SONG
function loadSong(songList){
    title.innerText = songList.name;
    audio.src = songList.path;
}

// CURRENT SONG 
let i = 0;

// FIRST SONG ON PLAY
loadSong(songList[i]);

// PREVIOUS SONG
function previousSong(){
    i--;
    if( i < 0){
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}

previous.addEventListener('click', previousSong);

// NEXT SONG

function nextSong(){
    i++;
    if( i > songList.length - 1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener('click', nextSong);