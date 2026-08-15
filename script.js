const songs =[
    {
      name: "Iris",
      file: "songs/song_1.mpeg"
    },
    {
      name: "Mere Bina",
      file: "songs/song_2.mpeg"
    },
    {
      name: "Amar Bhindeshi Tara",
      file: "songs/song_3.mpeg"
    },
    {
      name: "Watch Over You",
      file: "songs/song_4.mpeg"
    },
    {
      name: "Bhalobeshe Sokhi",
      file: "songs/song_5.mpeg"
    },
    {
      name: "Soniyo",
      file: "songs/song_6.mpeg"
    }
];


const audioPlayer = document.getElementById("audio-player");
const currentSong = document.getElementById("current-song");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].file;
    currentSong.textContent = songs[index].name;
}

playBtn.addEventListener("click", () => {
    audioPlayer.play();
});

nextBtn.addEventListener("click", () => {

    currentIndex++;
    if (currentIndex >= songs.length) {
    currentIndex = 0;
    }
    loadSong(currentIndex);
    audioPlayer.play();
});


prevBtn.addEventListener("click", () => {
   currentIndex--;
   if (currentIndex < 0) {
    currentIndex = songs.length - 1;
    }
    loadSong(currentIndex);
    audioPlayer.play();
});

audioPlayer.addEventListener("ended", () => {
   currentIndex++;
   if (currentIndex >= songs.length) {
   currentIndex = 0;
    }
   loadSong(currentIndex);
   audioPlayer.play();
});

loadSong(currentIndex);