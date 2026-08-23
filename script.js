document.addEventListener('DOMContentLoaded', function () {
  var lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = '<button class="lbClose" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector('img');
  var lbClose = lb.querySelector('.lbClose');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lbImg.src = '';
  }

  document.querySelectorAll('.gallery img, .certGrid img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
