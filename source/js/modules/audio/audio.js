const player = document.querySelector('.player');
const playBtn = document.querySelector('.player__btn--play');
const audio = document.querySelector('.player__audio');
const progressContainer = document.querySelector('.player__progress-container');
const progress = document.querySelector('.player__progress');
const title = document.querySelector('.player__song');
const imgBtn = document.querySelector('.player__btn--play img');
const currentDuration = document.querySelector('.player__duration-current');
const totalDuration = document.querySelector('.player__duration-total');

function initAudio() {
  if (!player) {
    return;
  }

  function loadSong(song) {
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`;
  }

  loadSong('audio-1');

  function playSong() {
    player.classList.add('play');
    imgBtn.src = 'img/sprite/icon-pause.svg';
    audio.play();
  }

  function pauseSong() {
    player.classList.remove('play');
    imgBtn.src = 'img/sprite/icon-play-player.svg';
    audio.pause();
  }

  playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  function updateProgress(evt) {
    const { duration, currentTime } = evt.srcElement;
    const progressPercent = currentTime / duration * 100;
    progress.style.width = `${progressPercent}%`;
    currentDuration.innerHTML = timeFormat(currentTime);
  }

  audio.addEventListener('timeupdate', updateProgress);

  function setProgress(evt) {
    const width = 256;
    const clickX = evt.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  }

  progressContainer.addEventListener('click', setProgress);

  audio.addEventListener('ended', pauseSong);

  function timeFormat(duration) {
    const hrs = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = Math.floor(duration % 60);

    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;

    return ret;
  }
}

export default initAudio;
