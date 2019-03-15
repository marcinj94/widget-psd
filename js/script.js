//Hamburger menu
const btnHamburger = document.querySelector('.btn-hamburger');
const playlistScreen = document.querySelector('.playlist-screen');
const playlistButton = document.querySelector('.playlist-screen .btn');

btnHamburger.addEventListener('click', function () {
    playlistScreen.classList.add('active');
});

playlistButton.addEventListener('click', function () {
    playlistScreen.classList.remove('active');
});


//Play|Pause btn

const btnPlayPause = document.querySelector('.main-buttons .btn.btn-big.main')
const btnPlayPauseIcon = document.querySelector('.main-buttons .btn.btn-big.main .fas')
let btnActive = true;

btnPlayPause.addEventListener('click', function () {
    if (!btnActive) {
        btnPlayPauseIcon.classList.remove('fa-pause');
        btnPlayPauseIcon.classList.add('fa-play');
    } else if (btnActive) {
        btnPlayPauseIcon.classList.add('fa-pause');
        btnPlayPauseIcon.classList.remove('fa-play');
    }
    btnActive = !btnActive;
});


//Generate playlist

const songs = [
    {
        artist: 'Icona Pop',
        time: '3:16',
        name: `Still Don't know`,
        backgroundCover: "url('./img/cover.png') no-repeat center / cover"
    },
    {
        artist: 'Icona Pop',
        time: '2:35',
        name: 'I love it',
        backgroundCover: "url('./img/cover.png') no-repeat center / cover"
    },
    {
        artist: 'Icona Pop',
        time: '2:50',
        name: 'Girlfriend',
        backgroundCover: "url('./img/cover.png') no-repeat center / cover"
    },
    {
        artist: 'Icona Pop',
        time: '3:07',
        name: 'We Got the World',
        backgroundCover: "url('./img/cover.png') no-repeat center / cover"
    },
    {
        artist: 'Icona Pop',
        time: '3:24',
        name: `Still believe in You`,
        backgroundCover: "url('./img/cover.png') no-repeat center / cover"
    },
    {
        artist: 'Slayer',
        time: '3:34',
        name: `Angel of Death`,
        backgroundCover: "url('./img/slayer.jpg') no-repeat center / cover"
    },

];

const playlistUl = document.querySelector('.playlist');

const showPlaylist = () => {
    songs.forEach(song => {
        const playlistItem = document.createElement('li');
        playlistItem.classList.add('playlist__song');

        playlistItem.innerHTML = `<p class="song__description">${song.time} | ${song.artist}</p>`;
        playlistItem.innerHTML += `<h3 class="song__title">${song.name}</h3>`;
        playlistItem.innerHTML += `<button class="btn btn-share"><i class="fas fa-share-alt"></i></button>`;
        playlistItem.innerHTML += `<button class="btn btn-heart"><i class="fas fa-heart"></i></button>`;

        playlistUl.appendChild(playlistItem);
    })
};

showPlaylist();

// left/right buttons

const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
const sectionCover = document.querySelector('.cover');

let active = 0;

const changeSong = (value) => {
    if (value === 'right') {
        active++;
    } else if (value === 'left') {
        active--;
    }
    if (active >= songs.length) {
        active = 0;
    } else if (active < 0) {
        active = songs.length - 1;
    }

    songArtist.textContent = songs[active].artist;
    songName.textContent = songs[active].name;
    sectionCover.style.background = songs[active].backgroundCover;

}

rightButton.addEventListener('click', changeSong.bind(this, 'right'));
leftButton.addEventListener('click', changeSong.bind(this, 'left'));


//clicking Song and change info on main screen
const playlistSong = [...document.querySelectorAll('.playlist__song')];
const songArtist = document.querySelector('.song__artist');
const songName = document.querySelector('.song__name');

playlistSong.forEach((song, index) => {
    song.addEventListener('click', function () {

        playlistScreen.classList.remove('active');

        songArtist.textContent = songs[index].artist;
        songName.textContent = songs[index].name;
        sectionCover.style.background = songs[index].backgroundCover;

        //active song
        active = index;
    });
});


