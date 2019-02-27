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

console.log(btnPlayPause);
console.log(btnPlayPauseIcon);

btnPlayPause.addEventListener('click', function () {
    if (!btnActive) {
        btnPlayPauseIcon.classList.remove('fa-pause');
        btnPlayPauseIcon.classList.add('fa-play');
    } else if (btnActive) {
        btnPlayPauseIcon.classList.add('fa-pause');
        btnPlayPauseIcon.classList.remove('fa-play');
    }
    btnActive = !btnActive;
})