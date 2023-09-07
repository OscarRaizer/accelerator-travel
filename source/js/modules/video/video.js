function initVideo() {
  const video = document.querySelector('.hero__video');
  const videoPlay = document.querySelector('.hero__video-play');
  if (!(video || videoPlay)) {
    return;
  }
  const videoSrc = video.dataset.src;

  videoPlay.addEventListener('click', () => {
    if (video.classList.contains('ready')) {
      return;
    }
    video.classList.add('ready');
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + videoSrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
}

export default initVideo;
