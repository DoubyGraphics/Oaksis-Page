// Oaksis site — shared behavior across all pages.
// Two independent features: mobile nav toggle, and the hero ripple canvas
// (the canvas code only runs if it finds .oaksis-ripple-canvas on the page).

(function () {
  "use strict";

  /* ---------------------------------------------------------
     Mobile nav toggle
     .oaksis-nav-links is hidden below 720px (see styles.css);
     the ☰ button reveals it as a dropdown.
  --------------------------------------------------------- */
  function initMobileNav() {
    var menuButtons = document.querySelectorAll(".oaksis-menu");

    menuButtons.forEach(function (button) {
      var nav = button.closest(".oaksis-nav");
      if (!nav) return;
      var links = nav.querySelector(".oaksis-nav-links");
      if (!links) return;

      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", links.id || (links.id = "oaksis-nav-links"));

      function closeMenu() {
        links.classList.remove("oaksis-nav-links--open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open menu");
        button.textContent = "☰";
      }

      function openMenu() {
        links.classList.add("oaksis-nav-links--open");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close menu");
        button.textContent = "✕";
      }

      button.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = links.classList.contains("oaksis-nav-links--open");
        isOpen ? closeMenu() : openMenu();
      });

      // Close after picking a link
      links.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeMenu();
      });

      // Close on outside click
      document.addEventListener("click", function (e) {
        if (!nav.contains(e.target)) closeMenu();
      });

      // Close on Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
      });

      // Reset state if the viewport is widened back past the breakpoint
      var mq = window.matchMedia("(max-width: 720px)");
      function handleBreakpoint(e) {
        if (!e.matches) closeMenu();
      }
      if (mq.addEventListener) mq.addEventListener("change", handleBreakpoint);
      else mq.addListener(handleBreakpoint); // Safari fallback
    });
  }

  /* ---------------------------------------------------------
     Hero ripple canvas
     Pointer-reactive ripple field, drawn in the site's palette.
     Sits at z-index -1 behind the hero copy (see .oaksis-ripple-canvas).
  --------------------------------------------------------- */
  function initRippleCanvas() {
    var canvas = document.querySelector(".oaksis-ripple-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var ripples = [];
    var width, height, dpr;

    // Palette pulled from :root — moss / teal / sand, on the oak background.
    var colors = [
      "rgba(59, 109, 17, OPA)",   // moss
      "rgba(29, 158, 117, OPA)",  // teal
      "rgba(234, 243, 222, OPA)"  // sand
    ];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function addRipple(x, y, strength) {
      ripples.push({
        x: x,
        y: y,
        radius: 0,
        maxRadius: 90 + Math.random() * 160 * (strength || 1),
        speed: 0.9 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      });
      if (ripples.length > 40) ripples.shift();
    }

    // Gentle ambient ripples so the field isn't dead when no one moves the mouse.
    var lastAmbient = 0;
    function maybeAmbientRipple(time) {
      if (time - lastAmbient > 1400) {
        lastAmbient = time;
        addRipple(Math.random() * width, Math.random() * height, 0.6);
      }
    }

    var lastPointer = { x: null, y: null, time: 0 };
    function handlePointerMove(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var now = performance.now();

      if (lastPointer.x !== null) {
        var dx = x - lastPointer.x;
        var dy = y - lastPointer.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var dt = now - lastPointer.time;
        // Only spawn a ripple if the pointer has moved enough since the last one,
        // and throttle so fast mouse movement doesn't flood the field.
        if (dist > 40 && dt > 60) {
          addRipple(x, y, Math.min(dist / 80, 1.6));
          lastPointer.time = now;
        }
      } else {
        lastPointer.time = now;
      }
      lastPointer.x = x;
      lastPointer.y = y;
    }

    canvas.addEventListener("mousemove", function (e) {
      handlePointerMove(e.clientX, e.clientY);
    });
    canvas.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
    canvas.addEventListener("click", function (e) {
      handlePointerMove(e.clientX, e.clientY);
      var rect = canvas.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top, 1.8);
    });

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) maybeAmbientRipple(time);

      for (var i = ripples.length - 1; i >= 0; i--) {
        var r = ripples[i];
        r.radius += r.speed * 2.2;
        r.life = 1 - r.radius / r.maxRadius;

        if (r.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        var opacity = Math.max(r.life * 0.35, 0);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color.replace("OPA", opacity.toFixed(3));
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      // Draw a single calm frame and stop — respect the user's OS setting.
      addRipple(width * 0.3, height * 0.4, 1);
      addRipple(width * 0.7, height * 0.65, 1);
      draw(0);
    } else {
      requestAnimationFrame(draw);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initRippleCanvas();
  });
})();
