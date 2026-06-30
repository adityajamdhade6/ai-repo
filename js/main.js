/* ============================================================
   INHAUS — interactions
   Vanilla JS. No dependencies. Reduced-motion aware.
   ============================================================ */
(function () {
  "use strict";
  var FLAVOURS = window.INHAUS_FLAVOURS || [];
  var byId = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  var root = document.documentElement;

  /* ---------- theme the whole UI to a flavour ---------- */
  function applyTheme(f) {
    root.style.setProperty("--accent", f.accent);
    root.style.setProperty("--accent-ink", f.ink);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", f.accent);
  }

  /* ============================================================
     BOOT LOADER
     ============================================================ */
  (function boot() {
    var el = byId("boot"), bar = el.querySelector(".boot__bar i"), pct = byId("bootPct");
    if (reduce) { el.classList.add("is-done"); start(); return; }
    var p = 0;
    var t = setInterval(function () {
      p += Math.random() * 16 + 6;
      if (p >= 100) { p = 100; clearInterval(t); setTimeout(done, 280); }
      bar.style.width = p + "%";
      pct.textContent = ("0" + Math.floor(p)).slice(-2);
    }, 120);
    function done() { el.classList.add("is-done"); start(); }
  })();

  function start() {
    var hero = byId("hero");
    requestAnimationFrame(function () { hero.classList.add("is-in"); });
    document.body.classList.add("ready");
  }

  /* ============================================================
     CUSTOM CURSOR (magnetic)
     ============================================================ */
  (function cursor() {
    if (window.matchMedia("(hover:none)").matches) return;
    var c = document.querySelector(".cursor");
    var dot = c.querySelector(".cursor__dot"), ring = c.querySelector(".cursor__ring");
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mousedown", function () { c.classList.add("is-down"); });
    document.addEventListener("mouseup", function () { c.classList.remove("is-down"); });
    var hov = "a,button,[data-magnetic],input,.flavour-li,.box__slot.filled";
    document.querySelectorAll(hov).forEach(bind);
    function bind(el) {
      el.addEventListener("mouseenter", function () { c.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { c.classList.remove("is-hover"); });
    }
    // re-bind dynamically created targets
    window.__cursorBind = bind;
  })();

  /* ============================================================
     MAGNETIC BUTTONS
     ============================================================ */
  (function magnetic() {
    if (reduce || window.matchMedia("(hover:none)").matches) return;
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
      var strength = 0.32;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * strength;
        var y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  })();

  /* ============================================================
     NAV — stuck state + smooth anchor + mobile menu
     ============================================================ */
  (function nav() {
    var nav = byId("nav");
    var onScroll = function () { nav.classList.toggle("is-stuck", scrollY > 40); };
    onScroll(); addEventListener("scroll", onScroll, { passive: true });

    var burger = byId("burger"), menu = byId("mobileMenu");
    function toggleMenu(force) {
      var open = force != null ? force : !menu.classList.contains("is-open");
      menu.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open);
      menu.setAttribute("aria-hidden", !open);
      document.body.style.overflow = open ? "hidden" : "";
    }
    burger.addEventListener("click", function () { toggleMenu(); });

    // smooth scroll for any in-page link
    document.querySelectorAll('a[href^="#"],[data-href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = a.getAttribute("href") || a.getAttribute("data-href");
        if (!target || target === "#") return;
        var node = document.querySelector(target);
        if (!node) return;
        e.preventDefault();
        toggleMenu(false);
        var y = node.getBoundingClientRect().top + scrollY - 70;
        scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      });
    });
  })();

  /* ============================================================
     HERO COIN — random "hole" texture (original generated art)
     ============================================================ */
  (function coinHoles() {
    var g = byId("coinHoles");
    if (!g) return;
    var n = 46, html = "";
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2;
      var r = 24 + Math.random() * 96;
      var cx = 150 + Math.cos(a) * r;
      var cy = 150 + Math.sin(a) * r;
      var rad = (Math.random() * 3 + 1).toFixed(1);
      html += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + rad + '" fill="#11100e" fill-opacity="' + (0.1 + Math.random() * 0.18).toFixed(2) + '"/>';
    }
    g.innerHTML = html;
    // batch number flourish
    byId("batchNo").textContent = ("00" + (Math.floor(Math.random() * 240) + 12)).slice(-3);
  })();

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  (function reveal() {
    var els = document.querySelectorAll("[data-reveal],.spec__row");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
          el.style.transitionDelay = Math.min(sibs * 60, 360) + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  })();

  /* ============================================================
     MANIFESTO — word-by-word brighten on scroll
     ============================================================ */
  (function words() {
    var p = document.querySelector(".reveal-words");
    if (!p) return;
    var txt = p.innerHTML;
    // wrap text nodes' words in spans, preserve inline tags
    var tmp = document.createElement("div"); tmp.innerHTML = txt;
    function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(function (w) {
            if (w.trim() === "") { frag.appendChild(document.createTextNode(w)); }
            else { var s = document.createElement("span"); s.className = "w"; s.textContent = w; frag.appendChild(s); }
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1) { wrap(ch); }
      });
    }
    wrap(tmp); p.innerHTML = tmp.innerHTML;
    var spans = p.querySelectorAll(".w");
    function onScroll() {
      var vh = innerHeight;
      spans.forEach(function (s) {
        var r = s.getBoundingClientRect();
        if (r.top < vh * 0.78) s.classList.add("on");
      });
    }
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
  })();

  /* ============================================================
     COUNT-UP STATS
     ============================================================ */
  (function counters() {
    var nums = document.querySelectorAll(".stat__num");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; io.unobserve(el);
        var target = parseFloat(el.dataset.count);
        var dec = parseInt(el.dataset.decimals || "0", 10);
        var suffix = el.dataset.suffix || "";
        if (reduce) { el.textContent = target.toFixed(dec) + suffix; return; }
        var t0 = null, dur = 1400;
        function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / dur, 1);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * e).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(dec) + suffix;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  })();

  /* ============================================================
     FLAVOUR EXPLORER
     ============================================================ */
  var activeFlavour = 0;
  (function flavours() {
    var rail = byId("flavourRail");
    var stage = byId("flavourStage");
    FLAVOURS.forEach(function (f, i) {
      var li = document.createElement("li");
      li.className = "flavour-li" + (i === 0 ? " is-active" : "");
      li.style.setProperty("--fc", f.accent);
      li.innerHTML =
        '<button type="button" role="tab" aria-selected="' + (i === 0) + '">' +
        '<span class="flavour-li__dot"></span>' +
        '<span class="flavour-li__name">' + f.name + '</span>' +
        '<span class="flavour-li__idx mono">0' + (i + 1) + '</span></button>';
      var btn = li.querySelector("button");
      var go = function () { select(i); };
      btn.addEventListener("mouseenter", function () { if (!reduce) select(i); });
      btn.addEventListener("click", go);
      btn.addEventListener("focus", go);
      rail.appendChild(li);
      if (window.__cursorBind) window.__cursorBind(li);
    });

    function select(i) {
      if (i === activeFlavour && stage.dataset.init) return;
      stage.dataset.init = "1";
      activeFlavour = i;
      var f = FLAVOURS[i];
      applyTheme(f);
      rail.querySelectorAll(".flavour-li").forEach(function (li, k) {
        li.classList.toggle("is-active", k === i);
        li.querySelector("button").setAttribute("aria-selected", k === i);
      });
      // swap animation
      stage.classList.add("swap");
      setTimeout(function () { stage.classList.remove("swap"); }, 520);
      byId("stageIdx").textContent = "0" + (i + 1) + " / 0" + FLAVOURS.length;
      var info = stage.querySelector(".flavour-stage__info");
      info.classList.remove("swap-fade"); void info.offsetWidth; info.classList.add("swap-fade");
      byId("stageName").textContent = f.name;
      byId("stageTag").textContent = f.tag;
      byId("stageDesc").textContent = f.desc;
      byId("stagePrice").textContent = f.price;
      // heat
      var heat = byId("stageHeat"); heat.innerHTML = "";
      for (var h = 0; h < 5; h++) { var b = document.createElement("i"); if (h < f.heat) b.className = "on"; heat.appendChild(b); }
    }

    byId("stageAdd").addEventListener("click", function () { addToCart(FLAVOURS[activeFlavour].id); });
    select(0);
  })();

  /* ============================================================
     CRAFT — sticky step highlighter
     ============================================================ */
  (function craft() {
    var steps = document.querySelectorAll(".craft__step");
    if (!steps.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          steps.forEach(function (s) { s.classList.remove("is-active"); });
          en.target.classList.add("is-active");
        }
      });
    }, { threshold: 0.6, rootMargin: "-30% 0px -30% 0px" });
    steps.forEach(function (s) { io.observe(s); });
  })();

  /* ============================================================
     CART
     ============================================================ */
  var CART = {};           // id -> qty
  var FREE_SHIP = 600;

  function flav(id) { return FLAVOURS.filter(function (f) { return f.id === id; })[0]; }

  function addToCart(id, qty) {
    qty = qty || 1;
    CART[id] = (CART[id] || 0) + qty;
    renderCart(true);
    var f = flav(id);
    toast("Added " + f.name);
    pulseCount();
  }
  function setQty(id, q) {
    if (q <= 0) delete CART[id]; else CART[id] = q;
    renderCart();
  }

  function cartCount() {
    return Object.keys(CART).reduce(function (a, k) { return a + CART[k]; }, 0);
  }
  function cartTotal() {
    return Object.keys(CART).reduce(function (a, k) { return a + flav(k).price * CART[k]; }, 0);
  }

  function renderCart(openIt) {
    var count = cartCount(), total = cartTotal();
    byId("cartCount").textContent = count;
    byId("cartTotal").textContent = total;
    var list = byId("cartItems"), empty = byId("cartEmpty");
    list.innerHTML = "";
    var keys = Object.keys(CART);
    empty.classList.toggle("hide", keys.length > 0);
    keys.forEach(function (id) {
      var f = flav(id), q = CART[id];
      var li = document.createElement("li");
      li.className = "cart-item"; li.style.setProperty("--ci", f.coin);
      li.innerHTML =
        '<span class="cart-item__coin"></span>' +
        '<div><div class="cart-item__name">' + f.name + '</div>' +
        '<div class="cart-item__sub">₹' + f.price + ' · TIN</div>' +
        '<div class="cart-item__qty"><button data-d="' + id + '" aria-label="decrease">−</button>' +
        '<span>' + q + '</span><button data-i="' + id + '" aria-label="increase">+</button></div></div>' +
        '<span class="cart-item__price">' + (f.price * q) + '</span>';
      list.appendChild(li);
    });
    list.querySelectorAll("[data-i]").forEach(function (b) { b.onclick = function () { setQty(b.dataset.i, CART[b.dataset.i] + 1); }; });
    list.querySelectorAll("[data-d]").forEach(function (b) { b.onclick = function () { setQty(b.dataset.d, CART[b.dataset.d] - 1); }; });

    // free-ship meter
    var remain = Math.max(0, FREE_SHIP - total);
    byId("shipBar").style.width = Math.min(100, (total / FREE_SHIP) * 100) + "%";
    byId("shipNote").textContent = remain > 0 ? ("Add ₹" + remain + " for free shipping") : "✓ Free shipping unlocked";

    if (openIt) openDrawer();
  }

  function pulseCount() {
    var c = byId("cartCount"); c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop");
  }

  /* drawer open/close */
  var drawer = byId("drawer"), scrim = byId("scrim");
  function openDrawer() { drawer.classList.add("on"); scrim.classList.add("on"); drawer.setAttribute("aria-hidden", "false"); }
  function closeDrawer() { drawer.classList.remove("on"); scrim.classList.remove("on"); drawer.setAttribute("aria-hidden", "true"); }
  byId("cartOpen").addEventListener("click", openDrawer);
  byId("cartClose").addEventListener("click", closeDrawer);
  scrim.addEventListener("click", closeDrawer);
  addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
  byId("checkout").addEventListener("click", function () {
    if (cartCount() === 0) { toast("Your cart is empty"); return; }
    toast("Demo — checkout would open here");
  });

  /* ============================================================
     TOAST
     ============================================================ */
  var toastTimer;
  function toast(msg) {
    var t = byId("toast");
    t.innerHTML = '<i></i>' + msg;
    t.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("on"); }, 2200);
  }

  /* ============================================================
     BUILD A BOX
     ============================================================ */
  (function box() {
    var SLOTS = 6, BOX_PRICE = 940; // ~₹140 saving vs 6 tins
    var slots = new Array(SLOTS).fill(null);
    var caseEl = byId("boxCase"), chipsEl = byId("boxChips");

    // build slots
    for (var i = 0; i < SLOTS; i++) {
      var s = document.createElement("div");
      s.className = "box__slot"; s.dataset.slot = i;
      s.innerHTML = '<span class="box__slot-idx mono">0' + (i + 1) + '</span><span class="box__slot-coin"></span><span class="box__slot-x">×</span>';
      caseEl.appendChild(s);
    }
    // chips
    FLAVOURS.forEach(function (f) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.className = "box__chip"; b.style.setProperty("--cc", f.coin); b.dataset.id = f.id;
      b.innerHTML = '<i></i>' + f.name;
      b.addEventListener("click", function () { drop(f.id); });
      li.appendChild(b); chipsEl.appendChild(li);
    });

    function firstEmpty() { for (var i = 0; i < SLOTS; i++) if (!slots[i]) return i; return -1; }

    function drop(id) {
      var idx = firstEmpty();
      if (idx < 0) { toast("Box is full — six slots filled"); return; }
      slots[idx] = id; paint(idx); render();
    }
    function paint(i) {
      var f = flav(slots[i]);
      var el = caseEl.children[i];
      el.classList.add("filled");
      el.style.setProperty("--sc", f.coin);
      el.querySelector(".box__slot-x").onclick = function (e) { e.stopPropagation(); slots[i] = null; clearPaint(i); render(); };
      if (window.__cursorBind) window.__cursorBind(el);
    }
    function clearPaint(i) {
      var el = caseEl.children[i]; el.classList.remove("filled"); el.style.removeProperty("--sc");
    }
    function render() {
      var filled = slots.filter(Boolean).length;
      byId("boxFilled").textContent = filled + " / 6 slots";
      byId("boxMeter").style.width = (filled / SLOTS * 100) + "%";
      // live price: pro-rata of the case price, full case at 6
      var price = filled === SLOTS ? BOX_PRICE : slots.filter(Boolean).reduce(function (a, id) { return a + flav(id).price; }, 0);
      byId("boxPrice").textContent = price;
      byId("boxAdd").disabled = filled === 0;
      byId("boxAdd").querySelector("span").textContent = filled === SLOTS ? "Add the case · save ₹140" : "Add " + filled + " tin" + (filled === 1 ? "" : "s");
    }
    byId("boxAdd").addEventListener("click", function () {
      slots.filter(Boolean).forEach(function (id) { addToCart(id); });
      slots = new Array(SLOTS).fill(null);
      for (var i = 0; i < SLOTS; i++) clearPaint(i);
      render();
    });
    byId("boxClear").addEventListener("click", function () {
      slots = new Array(SLOTS).fill(null);
      for (var i = 0; i < SLOTS; i++) clearPaint(i);
      render();
    });
    render();
  })();

  /* ============================================================
     NEWSLETTER
     ============================================================ */
  byId("newsForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var note = byId("newsNote");
    note.textContent = "✓ You're on the list. First batch is yours.";
    byId("newsEmail").value = "";
    setTimeout(function () { note.textContent = ""; }, 4000);
  });
  byId("cartEmptyCta").addEventListener("click", closeDrawer);

  /* expose for empty-cta link smoothscroll already handled; init cart */
  renderCart();
})();
