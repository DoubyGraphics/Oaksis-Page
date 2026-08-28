// Oaksis Studio — site scripts

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav ---- */
  var menuBtn = document.querySelector('.oaksis-menu');
  var navLinks = document.querySelector('.oaksis-nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      menuBtn.textContent = isOpen ? '✕' : '☰';
    });
  }

  /* ---- Scroll-triggered reveal ---- */
  var revealEls = document.querySelectorAll('.oaksis-reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Scroll reveal (.reveal): fade + slide up on scroll ---- */
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scrollRevealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    // Reduced motion: skip the animation entirely, show content normally
    scrollRevealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else if ('IntersectionObserver' in window && scrollRevealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target); // fire only once per element
        }
      });
    }, { threshold: 0.15 });
    scrollRevealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    scrollRevealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }



  // Root-line SVG draw-in and section entrance also gated by scroll —
  // reveal any ancestor section as visible too, so root-lines inside
  // non-.oaksis-reveal sections still animate when scrolled to.
  var sections = document.querySelectorAll('.oaksis-section, .oaksis-hero');
  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(function (el) { sectionObserver.observe(el); });
  }

  /* ---- Services page: tabbed capability explorer ---- */
  var serviceTabs = document.querySelectorAll('.service-tab');
  var servicePanels = document.querySelectorAll('[data-panel-index]');
  if (serviceTabs.length && servicePanels.length) {
    serviceTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var index = tab.getAttribute('data-tab-index');

        serviceTabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        servicePanels.forEach(function (panel) {
          if (panel.getAttribute('data-panel-index') === index) {
            panel.hidden = false;
          } else {
            panel.hidden = true;
          }
        });
      });
    });
  }

  /* ---- Ripple canvas (hero) ---- */
  var canvas = document.querySelector('.oaksis-ripple-canvas');
  if (canvas && canvas.getContext) {
    initRippleCanvas(canvas);
  }

  function initRippleCanvas(canvas) {
    var ctx = canvas.getContext('2d');
    var parent = canvas.parentElement;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width, height;
    var ripples = [];
    var pointer = { x: null, y: null, active: false };
    var lastRippleTime = 0;

    function resize() {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function addRipple(x, y, strength) {
      ripples.push({
        x: x, y: y,
        radius: 0,
        maxRadius: 90 + Math.random() * 60,
        strength: strength || 1,
        alpha: 0.55,
      });
      if (ripples.length > 40) ripples.shift();
    }

    function pointerPos(e) {
      var rect = parent.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    parent.addEventListener('mousemove', function (e) {
      var p = pointerPos(e);
      pointer.x = p.x; pointer.y = p.y; pointer.active = true;
      var now = performance.now();
      if (now - lastRippleTime > 60) {
        addRipple(p.x, p.y, 0.8);
        lastRippleTime = now;
      }
    });
    parent.addEventListener('mouseleave', function () { pointer.active = false; });
    parent.addEventListener('touchmove', function (e) {
      var p = pointerPos(e);
      pointer.x = p.x; pointer.y = p.y; pointer.active = true;
      var now = performance.now();
      if (now - lastRippleTime > 60) {
        addRipple(p.x, p.y, 0.8);
        lastRippleTime = now;
      }
    }, { passive: true });
    parent.addEventListener('click', function (e) {
      var p = pointerPos(e);
      addRipple(p.x, p.y, 1.6);
    });

    // Ambient ripples so the canvas isn't static before the user moves their cursor
    setInterval(function () {
      if (ripples.length < 4) {
        addRipple(Math.random() * width, Math.random() * height, 0.5);
      }
    }, 1800);

    var oasisColor = '29, 158, 117'; // --teal in rgb

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (var i = ripples.length - 1; i >= 0; i--) {
        var r = ripples[i];
        r.radius += 1.6 * r.strength;
        r.alpha -= 0.006;
        if (r.alpha <= 0 || r.radius > r.maxRadius * 2.2) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + oasisColor + ',' + Math.max(r.alpha, 0) + ')';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Project form (Start a Project page, if present) ---- */
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
      }).then(function (response) {
        if (response.ok) {
          form.hidden = true;
          if (status) {
            status.hidden = false;
            status.textContent = "Thanks — that's in. We'll get back to you within 2 business days.";
          }
        } else if (status) {
          status.hidden = false;
          status.textContent = 'Something went wrong — please email us directly instead.';
        }
      }).catch(function () {
        if (status) {
          status.hidden = false;
          status.textContent = 'Something went wrong — please email us directly instead.';
        }
      });
    });
  }
});
