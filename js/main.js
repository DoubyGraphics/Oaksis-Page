// Oaksis Studio — site scripts

function initReveal() {
  var items = document.querySelectorAll('.reveal, .root-divider');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(function (el) { io.observe(el); });
}

function initHeroRipple() {
  var canvas = document.querySelector('[data-hero-canvas]');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var hero = canvas.closest('.hero');
  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w, h;
  var mouseX = 0.5, mouseY = 0.5, targetX = 0.5, targetY = 0.5;
  var t = 0;
  var raf;

  function resize() {
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function onMove(e) {
    var rect = hero.getBoundingClientRect();
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    targetX = x / rect.width;
    targetY = y / rect.height;
  }

  function draw() {
    t += 0.006;
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;
    ctx.clearRect(0, 0, w, h);

    var lines = 5;
    for (var i = 0; i < lines; i++) {
      var yBase = h * (0.22 + i * 0.15);
      ctx.beginPath();
      for (var x = 0; x <= w; x += 14) {
        var nx = x / w;
        var dist = Math.abs(nx - mouseX);
        var ripple = Math.exp(-dist * 6) * 20 * Math.sin(dist * 22 - t * 6);
        var wave = Math.sin(nx * 6 + t + i * 0.8) * 6;
        var y = yBase + wave + ripple - (mouseY - 0.5) * 12;
        if (x === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      }
      ctx.strokeStyle = 'rgba(234,243,222,' + (0.09 + i * 0.018) + ')';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('touchmove', onMove, { passive: true });
  draw();

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { cancelAnimationFrame(raf); } else { draw(); }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initReveal();
  initHeroRipple();

  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileMenu = document.querySelector('[data-nav-mobile]');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('is-open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  var form = document.querySelector('[data-project-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('[data-form-status]');
      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            if (status) {
              status.hidden = false;
              status.textContent = "Thanks — that's in. We'll get back to you within 2 business days.";
            }
          } else {
            if (status) {
              status.hidden = false;
              status.textContent = 'Something went wrong — please email us directly instead.';
            }
          }
        })
        .catch(function () {
          if (status) {
            status.hidden = false;
            status.textContent = 'Something went wrong — please email us directly instead.';
          }
        });
    });
  }
});
