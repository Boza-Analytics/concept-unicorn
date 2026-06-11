/* ==========================================================================
   uLab — motion enhancement layer (no dependencies)
   Progressive enhancement only: with JS off the page is the untouched original.
   ========================================================================== */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- scroll progress bar ----------------------------------------- */
  function progressBar() {
    var bar = document.createElement("div");
    bar.className = "ulx-progress";
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      bar.style.transform =
        "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  /* ----- header: shadow + hide on scroll down ------------------------- */
  function smartHeader() {
    var header = document.querySelector("header.banner");
    if (!header) return;
    var lastY = window.scrollY;
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        header.classList.toggle("ulx-scrolled", y > 30);
        if (y > 140 && y > lastY + 4) {
          header.classList.add("ulx-hidden");
        } else if (y < lastY - 4) {
          header.classList.remove("ulx-hidden");
        }
        lastY = y;
      },
      { passive: true }
    );
  }

  /* ----- hero: split headline into masked lines, then reveal ---------- */
  function heroReveal() {
    var hero = document.querySelector(".hero");
    var h1 = hero && hero.querySelector("h1");
    if (!h1) return;

    // split on <br> into masked line spans
    var lines = h1.innerHTML.split(/<br\s*\/?>/i);
    h1.innerHTML = lines
      .map(function (l) {
        return '<span class="ulx-line"><span>' + l + "</span></span>";
      })
      .join("");

    var perex = hero.querySelector(".hero__perex");
    if (perex) perex.classList.add("ulx-hero-late");
    hero.querySelectorAll(".wp-block-buttons").forEach(function (b) {
      b.classList.add("ulx-hero-late");
    });
    var img = hero.querySelector(".hero__main-image");
    if (img) img.classList.add("ulx-hero-img-reveal");

    // double rAF so initial styles are committed before transitioning
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add("ulx-hero-in");
      });
    });
  }

  /* ----- hero image parallax ------------------------------------------ */
  function heroParallax() {
    if (reduced) return;
    var img = document.querySelector(".hero__main-image img");
    if (!img) return;
    var ticking = false;
    function update() {
      var y = Math.min(window.scrollY, 900);
      img.parentElement.style.setProperty("--ulx-parallax", y * 0.08);
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  /* ----- channel logos: rebuild gallery as infinite marquee ----------- */
  function logoMarquee() {
    var gallery = document.querySelector(".chanels-brands");
    if (!gallery) return;
    var figures = Array.prototype.slice.call(
      gallery.querySelectorAll(":scope > figure, :scope > .wp-block-image")
    );
    if (figures.length < 4) return;

    var marquee = document.createElement("div");
    marquee.className = "ulx-marquee";
    var track = document.createElement("div");
    track.className = "ulx-marquee__track";
    figures.forEach(function (f) {
      track.appendChild(f);
    });
    marquee.appendChild(track);
    marquee.appendChild(track.cloneNode(true)); // seamless loop copy
    marquee.setAttribute("aria-hidden", "false");
    marquee.lastChild.setAttribute("aria-hidden", "true");

    gallery.parentNode.replaceChild(marquee, gallery);
  }

  /* ----- staggered reveals where the theme has none -------------------- */
  function staggerReveals() {
    var groups = [
      ".team-slide",
      ".case-studies-slide",
      "footer.content-info .wp-block-column",
    ];
    var els = [];
    groups.forEach(function (sel) {
      var found = document.querySelectorAll(sel);
      for (var i = 0; i < found.length; i++) {
        // skip anything the theme's GSAP already animates
        if (!found[i].classList.contains("animate-slide-up")) {
          found[i].classList.add("ulx-reveal");
          found[i].style.setProperty("--ulx-i", String(i % 6));
          els.push(found[i]);
        }
      }
    });
    if (!els.length) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("ulx-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ----- magnetic buttons ---------------------------------------------- */
  function magneticButtons() {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll(".wp-block-button__link").forEach(function (btn) {
      var raf = null;
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) * 0.18;
        var dy = (e.clientY - r.top - r.height / 2) * 0.28;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          btn.style.translate = dx + "px " + dy + "px";
        });
      });
      btn.addEventListener("mouseleave", function () {
        if (raf) cancelAnimationFrame(raf);
        btn.style.transition =
          "translate .5s cubic-bezier(.34,1.56,.64,1), transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease";
        btn.style.translate = "0px 0px";
        setTimeout(function () {
          btn.style.transition = "";
        }, 500);
      });
    });
  }

  function init() {
    progressBar();
    smartHeader();
    heroReveal();
    heroParallax();
    logoMarquee();
    staggerReveals();
    magneticButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
