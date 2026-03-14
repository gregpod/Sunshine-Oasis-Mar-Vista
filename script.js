// ── Mobile nav ────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function closeNav() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ── Active nav link on scroll ──────────────────────────────────
const sections = document.querySelectorAll('.page-section, .subsection');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => observer.observe(s));

// ── Video modal ────────────────────────────────────────────────
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');

document.querySelectorAll('.video-thumbnail').forEach(thumb => {
  thumb.addEventListener('click', () => {
    modalVideo.src = thumb.dataset.video;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modalVideo.play();
  });
});

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalVideo.pause();
  modalVideo.src = '';
}

document.querySelector('.video-modal-backdrop').addEventListener('click', closeModal);
document.querySelector('.video-modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
