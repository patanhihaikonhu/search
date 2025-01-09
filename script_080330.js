const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const welcomeVideoModal = document.getElementById('welcomeVideoModal');
  const welcomeVideo = document.getElementById('welcomeVideo');

  if (!localStorage.getItem('welcomeVideoShown')) {
    welcomeVideoModal.style.display = 'flex';
    welcomeVideo.play();

    welcomeVideo.onended = () => {
      welcomeVideoModal.style.display = 'none';
      localStorage.setItem('welcomeVideoShown', 'true');
    };
  } else {
    welcomeVideoModal.style.display = 'none';
  }
});

// Detect screenshot (not foolproof)
if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
  window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.style.display = 'none';
    } else {
      document.body.style.display = 'block';
    }
  });
}
        document.addEventListener('contextmenu', (e) => e.preventDefault());
