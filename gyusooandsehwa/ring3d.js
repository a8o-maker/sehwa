/* 3D 회전 갤러리(원통처럼 둥글게 놓인 사진을 옆으로 돌려 보기) + 미리보기(한 줄 4장, 처음 7장 + 더보기)
   여권(passport)·앨범(album) 페이지가 같이 씀 */
(function () {
  var STYLE = [
    '.r3 { position: relative; margin: 10px auto 0; height: 300px; perspective: 1000px; perspective-origin: 50% 42%; touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; outline: none; }',
    '.r3:focus-visible { outline: 1px solid #111; outline-offset: 6px; }',
    '.r3::after { content: ""; position: absolute; left: 22%; right: 22%; bottom: 8px; height: 22px; background: radial-gradient(ellipse at center, rgba(0,0,0,0.2), transparent 70%); pointer-events: none; }',
    '.r3-stage { position: absolute; inset: 0; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }',
    '.r3-ring { position: absolute; left: 50%; top: 16px; width: var(--r3w, 150px); height: var(--r3ch, 236px); margin-left: calc(var(--r3w, 150px) / -2); -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }',
    '.r3-card { position: absolute; inset: 0; display: block; box-sizing: border-box; padding: 5px 5px 0; background: #fff; border: 1px solid #111; -webkit-backface-visibility: hidden; backface-visibility: hidden; cursor: pointer; box-shadow: 0 18px 26px -16px rgba(0,0,0,0.42); }',
    '.r3-ph { position: relative; display: block; overflow: hidden; background: #f2efe9; }',
    '.r3-ph img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; pointer-events: none; -webkit-user-drag: none; user-select: none; }',
    '.r3-ph::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 50%; background: linear-gradient(transparent, rgba(0,0,0,0.62)); pointer-events: none; }',
    '.r3-cap { position: absolute; z-index: 1; left: 6px; right: 6px; bottom: 6px; color: #fff; font-family: "Jost", sans-serif; font-weight: 500; font-size: 0.66rem; line-height: 1.2; letter-spacing: 0.02em; text-align: left; text-shadow: 0 1px 2px rgba(0,0,0,0.5); text-wrap: balance; }',
    '.r3-cap small { display: block; margin-top: 2px; font-family: "Gowun Dodum", sans-serif; font-weight: 400; font-size: 0.6rem; letter-spacing: 0; }',
    '.r3-tag { display: flex; align-items: center; justify-content: space-between; gap: 4px; height: 26px; margin-top: 0; padding: 0 1px; border-top: 0; }',
    '.r3-tag b { color: #2b2b2b; font-family: "Jost", sans-serif; font-weight: 500; font-size: 0.56rem; letter-spacing: 0.18em; white-space: nowrap; }',
    '.r3-tag i { color: #8a6d3b; font-style: normal; font-family: "Jost", sans-serif; font-weight: 500; font-size: 0.56rem; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
    '.r3-nav { position: absolute; top: 46%; z-index: 5; width: 36px; height: 36px; margin-top: -18px; display: flex; align-items: center; justify-content: center; border: 1px solid #111; border-radius: 0; background: rgba(255,255,255,0.92); color: #111; font-size: 1.15rem; line-height: 1; cursor: pointer; padding: 0; }',
    '.r3-nav.prev { left: 0; } .r3-nav.next { right: 0; }',
    '.r3-info { margin: 6px auto 0; min-height: 3.4em; text-align: center; }',
    '.r3-info .ct { display: block; font-family: "Jost", sans-serif; font-weight: 500; font-size: 0.62rem; letter-spacing: 0.24em; color: #8a6d3b; }',
    '.r3-info .e { display: block; margin-top: 3px; font-family: "Jost", sans-serif; font-weight: 500; font-size: 0.92rem; letter-spacing: 0.02em; color: #111; }',
    '.r3-info small { display: block; margin-top: 2px; font-family: "Gowun Dodum", sans-serif; font-size: 0.78rem; color: #6b6763; }',
    '.r3-hint { margin: 2px 0 0; text-align: center; font-size: 0.72rem; color: #8a8580; letter-spacing: 0.04em; }',
    '.r3p { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; width: 100%; max-width: 420px; margin: 18px auto 0; }',
    '.r3p-t { position: relative; display: block; width: 100%; margin: 0; padding: 2px; border: 1px solid rgba(17,17,17,0.8); border-radius: 0; background: #fff; cursor: pointer; overflow: hidden; }',
    '.r3p-t img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; background: #f2efe9; transition: transform 0.3s ease; }',
    '.r3p-t:hover img, .r3p-t:focus-visible img { transform: scale(1.04); }',
    '.r3p-t.r3p-bw img { filter: grayscale(1) contrast(1.08) brightness(1.03); }',
    '.r3p-t.on { border-color: #8a6d3b; box-shadow: 0 0 0 1px #8a6d3b; }',
    '.r3p-more span { position: absolute; inset: 2px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(11,11,11,0.6); color: #fff; }',
    '.r3p-more b { font-family: "Jost", sans-serif; font-weight: 500; font-size: 1.05rem; letter-spacing: 0.04em; }',
    '.r3p-more i { margin-top: 2px; font-style: normal; font-family: "Gowun Dodum", sans-serif; font-size: 0.7rem; }',
    '.r3p-less { display: block; margin: 14px auto 0; }'
  ].join('\n');
  function injectCSS() {
    if (document.getElementById('r3css')) return;
    var s = document.createElement('style'); s.id = 'r3css'; s.textContent = STYLE;
    var first = document.head.querySelector('style');   /* 페이지 스타일이 뒤에서 덮어쓸 수 있게 앞에 둠 */
    document.head.insertBefore(s, first || null);
  }
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  function has3d() {
    return !!(window.CSS && CSS.supports && (CSS.supports('transform-style', 'preserve-3d') || CSS.supports('-webkit-transform-style', 'preserve-3d')));
  }
  function mod(x, m) { return ((x % m) + m) % m; }
  function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* o: { root, info, items, card(i) -> HTML, caption(i) -> {e, k}, onOpen(i, el), paused() } */
  window.Ring3D = function (o) {
    injectCSS();
    var root = o.root, N = o.items.length;
    if (!root || !N || !has3d()) { if (root) root.hidden = true; return null; }
    var K = Math.min(10, N), STEP = 360 / K;
    root.classList.add('r3'); root.tabIndex = 0;
    root.setAttribute('role', 'region'); root.setAttribute('aria-roledescription', '3D 갤러리');
    root.innerHTML = '<div class="r3-stage"><div class="r3-ring"></div></div>' +
      '<button class="r3-nav prev" type="button" aria-label="이전 사진">&#8249;</button><button class="r3-nav next" type="button" aria-label="다음 사진">&#8250;</button>';
    var ring = root.querySelector('.r3-ring'), slots = [];
    for (var s = 0; s < K; s++) {
      var c = document.createElement('div'); c.className = 'r3-card'; c.setAttribute('data-s', s);
      ring.appendChild(c); slots.push({ el: c, p: -1, d: 0 });
    }
    var a = 0, W = 150, R = 240, PX = 140, front = -1, anim = null, drag = null, dragged = 0, lastTouch = 0, vis = false;

    function size() {
      var cw = root.clientWidth; if (!cw) return;
      W = Math.round(Math.max(118, Math.min(176, cw * 0.42)));
      var ch = Math.round((W - 12) * 4 / 3 + 5 + 28);
      R = Math.round((W / 2 + 12) / Math.tan(Math.PI / K));
      PX = W * 0.85;
      root.style.setProperty('--r3w', W + 'px'); root.style.setProperty('--r3ch', ch + 'px');
      root.style.height = (ch + 46) + 'px';
      for (var i = 0; i < K; i++) slots[i].el.style.transform = 'rotateY(' + (i * STEP) + 'deg) translateZ(' + R + 'px)';
      render();
    }
    function render() {
      ring.style.transform = 'translateZ(' + (-R) + 'px) rotateY(' + (-a) + 'deg)';
      var f = Math.round(a / STEP);
      for (var i = 0; i < K; i++) {
        var sl = slots[i], d = mod(i - f, K); if (d > K / 2) d -= K;
        var p = mod(f + d, N); sl.d = d;
        if (sl.p !== p) { sl.p = p; sl.el.innerHTML = o.card(p); sl.el.setAttribute('aria-label', o.items[p][1]); }
        var eff = Math.abs(mod(i * STEP - a + 180, 360) - 180);
        sl.el.style.opacity = eff > 105 ? '0' : String(eff < 14 ? 1 : Math.max(0.3, 1 - (eff - 14) / 115));
        sl.el.style.visibility = eff > 112 ? 'hidden' : 'visible';
      }
      var fp = mod(f, N);
      if (fp !== front) { front = fp; info(); }
    }
    function info() {
      if (!o.info) return;
      var cp = o.caption ? o.caption(front) : { e: o.items[front][1], k: '' };
      o.info.innerHTML = '<span class="ct">' + (front + 1 < 10 ? '0' : '') + (front + 1) + ' / ' + N + '</span><span class="e">' + esc(cp.e) + '</span>' + (cp.k ? '<small>' + esc(cp.k) + '</small>' : '');
    }
    function stop() { if (anim) { cancelAnimationFrame(anim); anim = null; } }
    function animTo(target, dur) {
      stop();
      var from = a, t0 = 0;
      if (reduce) dur = Math.min(dur, 220);
      function frame(now) {
        if (!t0) t0 = now;
        var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        a = from + (target - from) * e; render();
        anim = k < 1 ? requestAnimationFrame(frame) : null;
      }
      anim = requestAnimationFrame(frame);
    }
    function go(delta) { animTo((Math.round(a / STEP) + delta) * STEP, 640); }
    function goTo(p, instant) {
      var f = Math.round(a / STEP), d = mod(p - mod(f, N), N); if (d > N / 2) d -= N;
      if (instant) { stop(); a = (f + d) * STEP; render(); return; }
      animTo((f + d) * STEP, Math.min(1500, 520 + Math.abs(d) * 90));
    }

    root.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.r3-nav')) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      drag = { x: e.clientX, y: e.clientY, a: a, id: e.pointerId, moved: false, lx: e.clientX, lt: e.timeStamp, v: 0 };
      lastTouch = Date.now();
    });
    root.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved) {
        if (Math.abs(dx) < 7 && Math.abs(dy) < 7) return;
        if (Math.abs(dy) > Math.abs(dx)) { drag = null; return; }   /* 세로로 움직이면 페이지 스크롤 */
        drag.moved = true; stop(); drag.a = a; drag.x = e.clientX; dx = 0;
        try { root.setPointerCapture(e.pointerId); } catch (err) {}
      }
      var dt = e.timeStamp - drag.lt;
      if (dt > 0) drag.v = 0.75 * ((e.clientX - drag.lx) / dt) + 0.25 * drag.v;
      drag.lx = e.clientX; drag.lt = e.timeStamp;
      a = drag.a - dx / PX * STEP; render(); lastTouch = Date.now();
    });
    function up(e) {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      var d = drag; drag = null; lastTouch = Date.now();
      if (!d.moved) return;
      dragged = Date.now();
      var fc = Math.round(a / STEP), f = Math.round((a - d.v * 200 / PX * STEP) / STEP);
      f = Math.max(fc - 3, Math.min(fc + 3, f));
      animTo(f * STEP, 520);
    }
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', function (e) { if (drag && drag.moved) up(e); else drag = null; });
    root.addEventListener('click', function (e) {
      lastTouch = Date.now();
      var nb = e.target.closest('.r3-nav');
      if (nb) { go(nb.classList.contains('next') ? 1 : -1); return; }
      if (Date.now() - dragged < 350) return;
      var c = e.target.closest('.r3-card'); if (!c) return;
      var sl = slots[+c.getAttribute('data-s')];
      if (sl.d === 0) o.onOpen(sl.p, c); else go(sl.d);
    });
    root.addEventListener('keydown', function (e) {
      if (e.target !== root) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); lastTouch = Date.now(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); lastTouch = Date.now(); go(-1); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); o.onOpen(front, root); }
    });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }, { threshold: 0.4 }).observe(root); else vis = true;
    /* 가만히 두면 3.4초마다 한 장씩 천천히 돌아감 (움직임 줄이기 설정이면 멈춤) */
    setInterval(function () {
      if (reduce || !vis || document.hidden || drag || anim || Date.now() - lastTouch < 7000) return;
      if (o.paused && o.paused()) return;
      go(1);
    }, 3400);
    if (window.ResizeObserver) new ResizeObserver(size).observe(root); else window.addEventListener('resize', size);
    size(); if (!root.clientWidth) render();
    return { goTo: goTo, go: go };
  };

  /* o: { root, items, thumb(n), isBW(n), first, onOpen(i, el) } */
  window.Preview4 = function (o) {
    injectCSS();
    var root = o.root, N = o.items.length, first = o.first || 7, open = false;
    if (!root || !N) return null;
    root.classList.add('r3p');
    var less = document.createElement('button');
    less.type = 'button'; less.className = 'btn r3p-less'; less.textContent = '접기'; less.hidden = true;
    root.parentNode.insertBefore(less, root.nextSibling);
    function tile(i) {
      var p = o.items[i];
      return '<button type="button" class="r3p-t' + (o.isBW && o.isBW(p[0]) ? ' r3p-bw' : '') + '" data-i="' + i + '" aria-label="' + esc(p[1]) + ' 크게 보기"><img src="' + o.thumb(p[0]) + '" alt="" loading="lazy" decoding="async"></button>';
    }
    function draw() {
      var show = open ? N : Math.min(first, N), h = '';
      for (var i = 0; i < show; i++) h += tile(i);
      if (!open && N > first) {
        var p = o.items[first];
        h += '<button type="button" class="r3p-t r3p-more' + (o.isBW && o.isBW(p[0]) ? ' r3p-bw' : '') + '" data-more="1" aria-label="사진 ' + (N - first) + '장 더 보기"><img src="' + o.thumb(p[0]) + '" alt="" loading="lazy" decoding="async"><span><b>+' + (N - first) + '</b><i>더보기</i></span></button>';
      }
      root.innerHTML = h; less.hidden = !open;
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-more')) {
        open = true; draw();
        var nb = root.querySelector('[data-i="' + first + '"]'); if (nb) nb.focus({ preventScroll: true });
        return;
      }
      o.onOpen(+b.getAttribute('data-i'), b);
    });
    less.addEventListener('click', function () {
      open = false; draw();
      var r = root.getBoundingClientRect();
      if (r.top < 0) root.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      var m = root.querySelector('[data-more]'); if (m) m.focus({ preventScroll: true });
    });
    draw();
    return { redraw: draw };
  };
})();
