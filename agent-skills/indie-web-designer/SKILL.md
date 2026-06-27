---
name: indie-web-builder
description: >
  Stop writing boring sites. Use this when someone asks for a personal website,
  Neocities, indie web, web revival. Covers 83 real reference sites, 900+ files.
license: CC BY 4.0
metadata:
  author: mdev34-lab / batch-3 maximalist
---

# INDIE WEB BUILDER

83 real sites. 900+ files. Every snippet from a live site.

---

## THE DENSITY IMPERATIVE

**Real indie sites range from 100 to 600+ lines of CSS. Pick the density that fits the prompt.**

Minimal sites (vinizone, Astertrails): ~100-150 lines, 2-3 effects, simple fonts, responsive via media queries.
Dense sites (VIVARISM, NENRIKIDO): 400-600+ lines, 10-20+ effects, custom properties, layered shadows, complex animations.

**Stack effects on the same selector. But don't pad to 500 lines if the prompt calls for something simple.**

---

## THE ONE RULE

**The site has to feel like one person made it for themselves.**

If a choice makes it feel like a real person's corner of the internet, it's right.
If it makes the site feel designed, polished, or optimized, it's wrong.

### Red flags your output is slop

- Purple/black/gold "witchy" theme
- CSS variables used as a GENERIC design system (`--color-primary`, `--color-accent`, `--color-bg`). Personal/thematic names are fine: `--plums`, `--grapes`, `--bubblegum` (FABLED), `:root.pink`, `:root.blue` (NENRIKIDO), `--body-font`, `--header-font` (sweetfish.site). The red flag is generic naming, not CSS variables themselves.
- Every page uses the same layout template
- Content could be about anything and the theme still works
- CSS under 100 lines for a multi-page site (minimal sites exist but 100+ is typical)
- Class names like `.card`, `.btn`, `.nav-list`
- Harmonious matching color palette
- "Responsive" that gracefully reflows (real responsive: hide things, break things)
- Only 2-3 effects per page when the prompt implies density (real dense sites layer 10+)
- No custom scrollbar, no ::selection styling (minimal sites may skip these, but dense sites should have them)
- Emoji/Unicode symbols used as CSS pseudo-element icons (★✿♡✦ etc.) — real CSS techniques only: clip-path shapes, gradient diamonds, border shapes, background patterns

---

## 5 ULTRA-DENSE MEGA-BLUEPRINTS

Each demonstrates 15-25+ techniques stacked together. Each produces 400-600+ lines of CSS.
Don't just copy the technique — learn the DENSITY. Every selector should do 3-5 things at once.

---

### A. PORTAL INDEX — 23 techniques stacked (HEARTSPACE × VIVARISM × manyface)

Techniques: rotated h1, multi-radial-gradient bg, trig text-shadow outline, stamp border, CRT scanline, ::selection glow, rainbow scrollbar, custom cursor, pride underline, drop-shadow stacking, hue-rotate hover, details/summary menu, steps() wiggle, marquee with min(), fixed decorative border, paper grid texture, clip-path flags, negative outline-offset, blend-mode, background-image repeating frames, multi-layer background, text-shadow double outline, rainbow gradient text

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>⋆｡°✩ sitename ✩°｡⋆</title>
<style>
* { box-sizing: border-box; cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAIGNIUk0AAInpAAAAtACArNB/AAABIElEQVQoU2NkYPj/n4EBCxg5OTkZGBj+A4E4IysDAwMDw28oZmRgYPjPyMjIwMDwH4oZGRkYGBj+MwJ55pAAAJUlRqlxhtGcAAAAAElFTkSuQmCC'), auto; --radius: .2em; }
body { margin: 0; padding: 0; background: radial-gradient(at 22% 31%, rgb(65,53,98), transparent 55%), radial-gradient(at 97% 87%, rgb(81,82,132), transparent 55%), radial-gradient(at 61% 12%, rgb(209,61,58), transparent 45%), radial-gradient(at 53% 57%, rgb(180,65,113), transparent 55%), radial-gradient(at 17% 79%, rgb(218,134,77), transparent 55%), rgb(0,0,0); color: #e0d0f0; font-family: "Verdana","Tahoma",sans-serif; font-size: 14px; background-blend-mode: normal; }
body::after { content: ""; display: block; position: fixed; opacity: 0.5; inset: 0; pointer-events: none; z-index: 9999; background: linear-gradient(rgba(242,17,129,0.35) 50%, rgba(0,0,0,0.1) 50%) 0% 0% / 100% 3px, linear-gradient(90deg, rgba(255,0,0,0.01), rgba(0,255,0,0.02), rgba(0,0,255,0.01)) 0% 0% / 3px 100%; }
::selection { color: rgb(255,225,253); text-shadow: 1px 0px 0px rgb(199,0,149), -1px 0px 0px rgb(199,0,149), 0px 1px 0px rgb(199,0,149), 0px -1px 0px rgb(199,0,149), 0px 0px 5px rgb(199,0,149), 0px 0px 3px rgb(199,0,149); background: rgba(199,0,149,0.3); }
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-track { background: -webkit-linear-gradient(top, rgb(255,181,205) 2%, rgb(255,204,168) 17%, rgb(255,246,183) 35%, rgb(218,255,183) 55%, rgb(170,222,255) 76%, rgb(206,186,252) 97%); border: 1px dotted rgb(143,56,255); }
::-webkit-scrollbar-thumb { background: rgb(214,236,243); border: 1px dotted rgb(143,56,255); }
#container { margin-left: 6rem; padding: 2rem; }
/* h1 positioning: offset left negative so rotated text sits inside viewport, NOT on the edge. left:-2rem + transform-origin:left top pulls it left off-screen, then margin-left:6rem on container makes room. DO NOT use left:0 + top:50% — that puts it on the viewport boundary. */
h1 { position: fixed; top: 3rem; left: -2rem; transform: rotate(-90deg); transform-origin: left top; font-size: 2.5rem; color: #ff1493; letter-spacing: 6px; text-shadow: calc(0.05em * 1) calc(0.05em * 0) 0 rgb(124,252,0), calc(0.05em * 0.9239) calc(0.05em * 0.3827) 0 rgb(124,252,0), calc(0.05em * 0.7071) calc(0.05em * 0.7071) 0 rgb(124,252,0), calc(0.05em * 0.3827) calc(0.05em * 0.9239) 0 rgb(124,252,0), calc(0.05em * 0) calc(0.05em * 1) 0 rgb(124,252,0), calc(0.05em * -0.3827) calc(0.05em * 0.9239) 0 rgb(124,252,0), calc(0.05em * -0.7071) calc(0.05em * 0.7071) 0 rgb(124,252,0), calc(0.05em * -0.9239) calc(0.05em * 0.3827) 0 rgb(124,252,0), calc(0.05em * -1) calc(0.05em * 0) 0 rgb(124,252,0), calc(0.05em * -0.9239) calc(0.05em * -0.3827) 0 rgb(124,252,0), calc(0.05em * -0.7071) calc(0.05em * -0.7071) 0 rgb(124,252,0), calc(0.05em * -0.3827) calc(0.05em * -0.9239) 0 rgb(124,252,0), calc(0.05em * 0) calc(0.05em * -1) 0 rgb(124,252,0), calc(0.05em * 0.3827) calc(0.05em * -0.9239) 0 rgb(124,252,0), calc(0.05em * 0.7071) calc(0.05em * -0.7071) 0 rgb(124,252,0), calc(0.05em * 0.9239) calc(0.05em * -0.3827) 0 rgb(124,252,0); font-family: "Impact","Arial Black",sans-serif; text-transform: uppercase; transition: filter 0.3s; }
h1:hover { animation: 1s linear 0s infinite normal none running huecycle; }
@keyframes huecycle { 0% { filter: hue-rotate(0deg) saturate(200%); } 100% { filter: hue-rotate(360deg) saturate(200%); } }
#flex { display: flex; gap: 20px; }
nav { width: 160px; position: sticky; top: 2rem; align-self: flex-start; }
nav details { margin-bottom: 2px; }
nav details summary { padding: 6px 10px; margin-bottom: 4px; background: transparent; border: 2px solid #ff1493; color: #ff1493; text-decoration: none; font-size: 14px; font-weight: bold; cursor: pointer; list-style: ""; outline: 2px dashed transparent; outline-offset: -0.3em; transition: outline-color 0.2s, background 0.2s, color 0.2s; }
nav details summary:hover { background: #ff1493; color: #000; outline-color: #7cfc00; }
nav details ul { padding: 4px 10px; margin: 0; list-style: none; }
nav details ul li { padding: 2px 0; }
nav details ul li a { color: #7cfc00; text-decoration: none; font-size: 13px; background-image: linear-gradient(to right, rgb(85,205,252), rgb(179,157,233), rgb(247,168,184), rgb(246,216,221), white 45%, white, white 55%, rgb(246,216,221), rgb(247,168,184), rgb(179,157,233), rgb(85,205,252)); background-repeat: no-repeat; background-position: right 0px bottom -1px; background-size: 100% 2px; }
nav details ul li a:hover { color: #ff1493; }
main { flex: 1; }
.stamp { background-image: radial-gradient(var(--radius), transparent 98%, white), linear-gradient(white 0 0); background-repeat: round, no-repeat; background-position: calc(var(--radius) * -1.5) calc(var(--radius) * -1.5), 50%; background-size: calc(var(--radius) * 3) calc(var(--radius) * 3), calc(100% - var(--radius) * 3) calc(100% - var(--radius) * 3); padding: 1.5em; filter: drop-shadow(rgb(189,191,157) 0px 0px 1px) drop-shadow(rgb(189,191,157) 0px 0px 0px) drop-shadow(rgb(189,191,157) 0px 0px 1px) drop-shadow(rgb(189,191,157) 0px 0px 0px) drop-shadow(rgb(189,191,157) 0px 0px 1px) drop-shadow(rgb(189,191,157) 0px 1px 0px); background-color: rgba(255,240,245,0.9); margin-bottom: 12px; }
.stamp h2 { margin: 0 0 8px 0; color: #ff1493; font-family: "Georgia",serif; }
.stamp p { margin: 0 0 6px 0; line-height: 1.5; font-size: 14px; }
.blink { animation: blink 1s step-end infinite; color: #ff1493; }
@keyframes blink { 50% { opacity: 0; } }
.marquee { --gap: 1rem; display: flex; overflow: hidden; gap: var(--gap); background: #ff1493; color: #fff; padding: 6px 0; font-size: 13px; font-family: "Courier New",monospace; margin-bottom: 14px; }
.marquee-content { flex-shrink: 0; display: flex; min-width: 100%; gap: var(--gap); animation: scroll 20s linear infinite; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-100% - var(--gap))); } }
#updates { list-style: none; padding: 0; margin: 0; font-size: 13px; }
#updates li { padding: 6px 0; border-bottom: 1px dotted #ff69b4; background-image: none; transition: background-image 0.2s, background-position 0.2s; }
#updates li:nth-child(2n+1):hover { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQoU2NkYPj/n4EBCxg5OTkZGRkZGSkwAADqBAUQM5mNqQAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position: right center; }
#updates li:nth-child(2n):hover { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQoU2NkYPj/n4EBCxg5OTkZGRkZGSkwAADqBAUQM5mNqQAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position: right center; }
#updates li:last-child { border: 0; }
.date { color: #888; font-size: 11px; }
.top-deco { width: 100%; height: 30px; position: fixed; top: 0; right: 0; background-image: repeating-linear-gradient(90deg, #ff1493 0px, #ff1493 4px, transparent 4px, transparent 8px); z-index: 20; pointer-events: none; }
.bottom-deco { width: 100%; height: 15px; position: fixed; bottom: 0; right: 0; background-image: repeating-linear-gradient(90deg, #7cfc00 0px, #7cfc00 4px, transparent 4px, transparent 8px); z-index: 20; pointer-events: none; }
.flag { display: inline-block; clip-path: polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%); background: #ff1493; color: #fff; padding: 4px 12px; font-size: 11px; font-family: "Verdana",sans-serif; text-transform: uppercase; }
#featured { rotate: -5deg; cursor: pointer; animation: 1s steps(2, start) infinite alternate wiggie; }
@keyframes wiggie { 0% { transform: rotate(-15deg); } 100% { transform: rotate(15deg); } }
.webring-text { background-image: linear-gradient(-225deg, rgb(82,42,255) 0%, rgb(217,22,235) 50%, rgb(82,42,255) 100%); background-size: 200%; background-clip: text; -webkit-text-fill-color: transparent; animation: 2s linear infinite textclip; display: inline-block; }
@keyframes textclip { 100% { background-position: 200% center; } }
@media (max-width: 700px) {
  #container { margin-left: 0; padding: 1rem; }
  h1 { position: static; transform: none; text-align: center; font-size: 1.8rem; }
  #flex { flex-direction: column; }
  nav { width: 100%; }
  nav details summary { display: inline-block; margin-right: 4px; }
}
</style>
</head>
<body>
<div class="top-deco"></div>
<div class="bottom-deco"></div>
<div id="container">
  <h1>SITENAME</h1>
  <div id="flex">
    <nav>
      <details>
        <summary>explore</summary>
        <ul>
          <li><a href="index.html">home</a></li>
          <li><a href="about.html">about</a></li>
          <li><a href="diary.html">diary</a></li>
          <li><a href="links.html">links</a></li>
          <li><a href="shrine.html">shrine</a></li>
        </ul>
      </details>
    </nav>
    <main>
      <div class="marquee">
        <div class="marquee-content">
          <span>&#9835; NOW PLAYING: song — artist &#9835;</span>
          <span>&#9835; NOW PLAYING: song — artist &#9835;</span>
        </div>
      </div>
      <span class="flag">welcome</span>
      <div class="stamp">
        <h2>&#9733; welcome to my site</h2>
        <p>this is my corner of the internet. i make stuff, i find stuff, i write stuff down. everything here is a little bit messy and that's how i like it.</p>
      </div>
      <div class="stamp" style="background-color:rgba(0,0,0,0.3);border-color:#7cfc00;">
        <h2 style="color:#7cfc00">&#9998; recent</h2>
        <ul id="updates">
          <li><span class="date">2026-06-25</span> redesigned the whole site again <span class="blink" style="font-size:10px">new</span></li>
          <li><span class="date">2026-06-18</span> added a diary entry</li>
          <li><span class="date">2026-06-10</span> new links page</li>
          <li><span class="date">2026-06-01</span> redesigned the whole site (again)</li>
        </ul>
      </div>
      <div class="stamp" style="background-color:rgba(10,10,10,0.8);border-color:#0ff;border-style:solid;">
        <h2 style="color:#0ff">&#128172; status</h2>
        <p style="font-size:13px;color:#aaa"><strong>mood:</strong> <span class="blink">existing</span></p>
        <p style="font-size:12px;color:#888"><span class="webring-text">&#11088; part of the indie web</span></p>
      </div>
      <div id="featured" style="text-align:center;padding:10px;border:2px dashed #ff1493;margin-top:10px;font-size:12px;color:#888">
        click me! i wiggle!
      </div>
    </main>
  </div>
</div>
</body>
</html>
```

---

### B. ABOUT + SHRINE HYBRID — texture system, stickers, 7-color theming (VIVARISM × CALL NOW × WARP ZONE)

Techniques: VIVARISM 7-color texture system, sticker decorations with positioned ::before/::after, 12-level box-shadow design system, multi-layer drop-shadow stacking, trig text-shadow outline (16-direction), clip-path flags, border-image Earthbound frame, CSS preloader with 3D perspective, background blend-mode multiply, multi-background compositing, ch unit text-shadow, vertical writing mode, negative outline-offset, details/summary rainbow nav, rainbow gradient animated text, skew squish animation

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>about — sitename</title>
<style>
:root { --red: hsl(352,57%,63%); --orange: hsl(19,64%,63%); --yellow: hsl(49,84%,60%); --green: hsl(79,53%,59%); --aqua: hsl(193,46%,69%); --blue: hsl(220,54%,67%); --purple: hsl(256,68%,74%); --white: hsl(345,20%,96%); --black: hsl(348,8%,26%); --shadow-color: 208deg 32% 59%; --text-shadow-color: 22deg 15% 58%; --gap: calc(1rem + 1vmax); --half-gap: calc(var(--gap) / 2); --border-level: calc(0.05rem + 0.33vmax) solid; }
:root { --box-shadow-medium: 0.5px 0.7px 0.9px hsl(var(--shadow-color) / 0.36), 1.6px 2px 2.8px -0.9px hsl(var(--shadow-color) / 0.35), 4.2px 5.1px 7.2px -1.8px hsl(var(--shadow-color) / 0.33), 10.4px 12.6px 17.8px -2.7px hsl(var(--shadow-color) / 0.31); --box-shadow-high: 0.5px 0.7px 0.8px hsl(var(--shadow-color) / 0.39), 1.5px 1.8px 2.1px -0.6px hsl(var(--shadow-color) / 0.36), 2.9px 3.5px 4.1px -1.1px hsl(var(--shadow-color) / 0.33), 5.6px 6.7px 7.9px -1.7px hsl(var(--shadow-color) / 0.3), 10.2px 12.3px 14.5px -2.3px hsl(var(--shadow-color) / 0.27), 17.5px 21.2px 24.9px -2.8px hsl(var(--shadow-color) / 0.23), 28.4px 34.2px 40.3px -3.4px hsl(var(--shadow-color) / 0.19); --drop-shadow-medium: drop-shadow(0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.25)) drop-shadow(0.8px 1.6px 2px hsl(var(--shadow-color) / 0.25)) drop-shadow(2.1px 4.1px 5.2px hsl(var(--shadow-color) / 0.25)) drop-shadow(5px 10px 12.6px hsl(var(--shadow-color) / 0.25)); --drop-text-shadow: drop-shadow(0.11ch 0.12ch 0.066ch hsl(var(--text-shadow-color) / 0.22)) drop-shadow(0.08ch 0.099ch 0.03ch hsl(var(--text-shadow-color) / 0.20)) drop-shadow(0.05ch 0.05ch 0.02ch hsl(var(--text-shadow-color) / 0.18)); }
* { box-sizing: border-box; }
body { margin: 0; padding: 20px; background: #1a0a2e; color: var(--white); font-family: "Verdana","Tahoma",sans-serif; font-size: 14px; background: radial-gradient(at 22% 31%, rgb(65,53,98), transparent 55%), radial-gradient(at 97% 87%, rgb(81,82,132), transparent 55%), radial-gradient(at 61% 12%, rgb(209,61,58), transparent 45%), rgb(0,0,0); background-blend-mode: normal; }
a { color: var(--blue); transition: color 0.2s ease-in-out; }
a:hover { color: var(--red); }
#back { display: inline-block; margin-bottom: 12px; padding: 4px 12px; background: var(--red); color: #000; text-decoration: none; font-weight: bold; font-size: 12px; }
h1 { margin: 0 0 16px 0; font-size: 28px; color: var(--red); border-bottom: 4px double var(--green); padding-bottom: 8px; font-family: "Georgia",serif; text-transform: uppercase; letter-spacing: 2px; text-shadow: calc(0.05em * 1) calc(0.05em * 0) 0 var(--white), calc(0.05em * 0.9239) calc(0.05em * 0.3827) 0 var(--white), calc(0.05em * 0.7071) calc(0.05em * 0.7071) 0 var(--white), calc(0.05em * 0.3827) calc(0.05em * 0.9239) 0 var(--white), calc(0.05em * 0) calc(0.05em * 1) 0 var(--white), calc(0.05em * -0.3827) calc(0.05em * 0.9239) 0 var(--white), calc(0.05em * -0.7071) calc(0.05em * 0.7071) 0 var(--white), calc(0.05em * -0.9239) calc(0.05em * 0.3827) 0 var(--white), calc(0.05em * -1) calc(0.05em * 0) 0 var(--white), calc(0.05em * -0.9239) calc(0.05em * -0.3827) 0 var(--white), calc(0.05em * -0.7071) calc(0.05em * -0.7071) 0 var(--white), calc(0.05em * -0.3827) calc(0.05em * -0.9239) 0 var(--white), calc(0.05em * 0) calc(0.05em * -1) 0 var(--white), calc(0.05em * 0.3827) calc(0.05em * -0.9239) 0 var(--white), calc(0.05em * 0.7071) calc(0.05em * -0.7071) 0 var(--white), calc(0.05em * 0.9239) calc(0.05em * -0.3827) 0 var(--white); }
h2 { font-size: 20px; color: var(--red); margin: 0 0 10px 0; font-family: "Georgia",serif; }
.texture { padding: var(--half-gap); border-radius: 8px; border-style: outset; border-width: var(--border-level); margin-bottom: 12px; box-shadow: var(--box-shadow-medium); }
.texture > * { filter: var(--drop-text-shadow); }
.red-t { background: var(--red); border-color: var(--red); color: #000; }
.green-t { background: var(--green); border-color: var(--green); color: #000; }
.blue-t { background: var(--blue); border-color: var(--blue); color: #000; }
.purple-t { background: var(--purple); border-color: var(--purple); color: #000; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
.info-table td { padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,0.1); vertical-align: top; }
.info-table td:first-child { width: 140px; color: var(--red); font-weight: bold; }
.sticker { position: relative; display: inline-block; padding: 8px 16px; background: var(--yellow); color: #000; font-weight: bold; font-size: 11px; transform: rotate(-3deg); margin-bottom: 8px; box-shadow: 2px 2px 0 rgba(0,0,0,0.3); }
.sticker::before { content: ""; position: absolute; top: -4px; left: -4px; right: -4px; bottom: -4px; border: 2px dashed var(--purple); pointer-events: none; }
.sticker::after { content: ""; position: absolute; width: 8px; height: 8px; background: var(--red); border-radius: 50%; top: -3px; right: -3px; }
.rank { display: flex; align-items: center; gap: 10px; padding: 6px 0; border-bottom: 1px solid rgba(255,20,147,0.3); }
.rank:last-child { border-bottom: 0; }
.rank-num { font-size: 20px; color: var(--red); width: 30px; text-align: right; }
.rank-name { font-weight: bold; color: #fff; flex: 1; }
.rank-stars { color: var(--green); letter-spacing: 2px; }
.tag { display: inline-block; padding: 2px 8px; margin: 1px; border: 1px solid; font-size: 11px; outline: 2px dashed transparent; outline-offset: -0.3em; }
.tag-pink { border-color: var(--red); color: var(--red); }
.tag-green { border-color: var(--green); color: var(--green); }
.tag:hover { outline-color: currentColor; }
.v-title { writing-mode: vertical-rl; text-orientation: upright; font-size: 24px; letter-spacing: 10px; position: fixed; bottom: 20px; right: 20px; color: var(--purple); opacity: 0.3; user-select: none; }
#preloader { perspective: 500px; z-index: 9999; width: 100px; height: 100px; position: fixed; left: 20px; bottom: 20px; }
#preloader-inner { width: 100px; height: 100px; border: 3px solid var(--green); border-top-color: var(--red); border-radius: 50%; transform: rotateY(45deg); animation: 1s linear infinite rotateAnim; }
@keyframes rotateAnim { 0% { transform: rotateY(45deg); } 100% { transform: rotateY(225deg); } }
.webring-glow { background-image: linear-gradient(-225deg, var(--blue) 0%, var(--red) 50%, var(--blue) 100%); background-size: 200%; background-clip: text; -webkit-text-fill-color: transparent; animation: 2s linear infinite textclip; }
@keyframes textclip { 100% { background-position: 200% center; } }
@media (max-width: 600px) { .info-table td { display: block; } .info-table td:first-child { width: auto; } .v-title { display: none; } }
</style>
</head>
<body>
<a href="index.html" id="back">&larr; back</a>
<div class="v-title">ABOUT</div>
<div id="preloader"><div id="preloader-inner"></div></div>
<h1>&#10024; about me</h1>

<table class="info-table texture purple-t">
  <tr><td>name</td><td>not telling lol <span style="color:rgba(0,0,0,0.5);font-size:11px">(but you can call me X)</span></td></tr>
  <tr><td>age</td><td>20-something</td></tr>
  <tr><td>pronouns</td><td>they/them</td></tr>
  <tr><td>obsession</td><td style="color:var(--red);font-weight:bold"><span class="webring-glow">CURRENT OBSESSION / 10</span></td></tr>
  <tr><td>first heard</td><td>2022 — song came on and i literally stopped breathing</td></tr>
</table>

<div class="texture green-t">
  <span class="sticker">&#9829; rankings</span>
  <div class="rank"><span class="rank-num">1.</span><span class="rank-name">BEST THING</span><span class="rank-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
  <div class="rank"><span class="rank-num">2.</span><span class="rank-name">SECOND BEST</span><span class="rank-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span></div>
  <div class="rank"><span class="rank-num">3.</span><span class="rank-name">THIRD</span><span class="rank-stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span></div>
</div>

<div class="texture blue-t">
  <h2>&#9829; love / hate</h2>
  <div style="display:flex;gap:30px;flex-wrap:wrap">
    <div><p style="margin:0 0 6px 0;font-weight:bold;color:#000">LOVE</p><ul style="margin:0;padding-left:18px"><li>thing 1</li><li>thing 2</li><li>thing 3</li></ul></div>
    <div><p style="margin:0 0 6px 0;font-weight:bold;color:rgba(0,0,0,0.5)">HATE</p><ul style="margin:0;padding-left:18px"><li>bad thing 1</li><li>bad thing 2</li></ul></div>
  </div>
</div>

<div class="texture red-t">
  <h2 style="color:#000">&#128196; what i'm into</h2>
  <p>
    <span class="tag tag-pink">THING</span>
    <span class="tag tag-green">THING</span>
    <span class="tag" style="border-color:var(--aqua);color:var(--aqua)">THING</span>
  </p>
</div>
</body>
</html>
```

---

### C. DIARY WITH 7-THEME SWITCHER — theme system, paper textures, notebook styling (NENRIKIDO × Lost Letters × Skyweaver)

Techniques: 7 complete themes via :root.THEMENAME, theme-specific font pairings, lined/grid/dot paper backgrounds, stamp border, clip-path flag badges, negative outline-offset, ::selection glow, details/summary archive, per-letter staggered animation, CSS-only theme toggle, backdrop-filter blur, pride gradient underlines, responsive table, custom range slider thumbs, staggered box-shadow

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>diary — sitename</title>
<style id="theme-style">
:root, :root.pink { --primary:#ffc8ea; --secondary:#3d03fc; --secondary_muted:#3d03fca0; --tertiary:#fff0f5; --body-font:"Georgia",serif; --header-font:"Impact",sans-serif; --bg:#fff0f5; --text:#333; --accent:#ff1493; --paper-color:#fffaf0; --paper-line:#e8d5a3; }
:root.blue { --primary:#b3d9ff; --secondary:#0047ab; --secondary_muted:#0047aba0; --tertiary:#e8f4ff; --body-font:"Verdana",sans-serif; --header-font:"Georgia",serif; --bg:#e8f4ff; --text:#222; --accent:#0047ab; --paper-color:#f0f8ff; --paper-line:#b3d9ff; }
:root.yellow { --primary:#fff3b0; --secondary:#8b6914; --secondary_muted:#8b6914a0; --tertiary:#fffde7; --body-font:"Courier New",monospace; --header-font:"Georgia",serif; --bg:#fffde7; --text:#333; --accent:#8b6914; --paper-color:#fffff0; --paper-line:#e8d5a3; }
:root.black { --primary:#333; --secondary:#ff1493; --secondary_muted:#ff1493a0; --tertiary:#1a1a1a; --body-font:"Courier New",monospace; --header-font:"Impact",sans-serif; --bg:#0a0a0a; --text:#ccc; --accent:#ff1493; --paper-color:#1a1a1a; --paper-line:#333; }
:root.green { --primary:#a8e6cf; --secondary:#1b5e20; --secondary_muted:#1b5e20a0; --tertiary:#f1f8f0; --body-font:"Georgia",serif; --header-font:"Georgia",serif; --bg:#f1f8f0; --text:#222; --accent:#2e7d32; --paper-color:#f1f8f0; --paper-line:#a8e6cf; }
:root.orange { --primary:#ffe0b2; --secondary:#e65100; --secondary_muted:#e65100a0; --tertiary:#fff3e0; --body-font:"Verdana",sans-serif; --header-font:"Impact",sans-serif; --bg:#fff3e0; --text:#222; --accent:#e65100; --paper-color:#fff8e1; --paper-line:#ffe0b2; }
:root.purple { --primary:#e1bee7; --secondary:#6a1b9a; --secondary_muted:#6a1b9aa0; --tertiary:#f3e5f5; --body-font:"Georgia",serif; --header-font:"Georgia",serif; --bg:#f3e5f5; --text:#222; --accent:#6a1b9a; --paper-color:#f3e5f5; --paper-line:#e1bee7; }
:root.rainbow { --primary:linear-gradient(90deg,#ff69b4,#ffa500,#ffff00,#7cfc00,#00bfff,#8a2be2); --secondary:#ff1493; --secondary_muted:#ff1493a0; --tertiary:#fff; --body-font:"Comic Sans MS",cursive; --header-font:"Impact",sans-serif; --bg:#000; --text:#fff; --accent:#ff1493; --paper-color:#111; --paper-line:#333; }
* { box-sizing: border-box; }
body { margin: 0; padding: 30px; background: var(--bg); color: var(--text); font-family: var(--body-font); font-size: 16px; line-height: 28px; background-image: repeating-linear-gradient(transparent, transparent 27px, var(--paper-line) 27px, var(--paper-line) 28px); }
::selection { color: var(--bg); text-shadow: 1px 0px 0px var(--accent), -1px 0px 0px var(--accent), 0px 0px 5px var(--accent); background: var(--accent); }
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-track { background: var(--primary); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }
#back { display: inline-block; margin-bottom: 16px; padding: 4px 12px; background: var(--accent); color: var(--bg); text-decoration: none; font-size: 13px; }
h1 { font-size: 28px; color: var(--accent); border-bottom: 3px double var(--secondary); padding-bottom: 8px; margin: 0 0 20px 0; font-family: var(--header-font); font-weight: normal; }
.theme-bar { display: flex; gap: 4px; margin-bottom: 16px; flex-wrap: wrap; position: sticky; top: 0; z-index: 10; background: var(--bg); padding: 8px 0; backdrop-filter: blur(5px); }
.theme-btn { padding: 4px 12px; border: 2px solid var(--accent); background: var(--bg); color: var(--text); cursor: pointer; font-family: var(--body-font); font-size: 12px; outline: 2px dashed transparent; outline-offset: -0.3em; transition: outline-color 0.2s; }
.theme-btn:hover { background: var(--accent); color: var(--bg); outline-color: var(--secondary); }
.theme-switch { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; cursor: pointer; }
.theme-switch input { display: none; }
.theme-switch .slider::before { content: "&#9728;&#65039;"; }
.theme-switch input:checked + .slider::before { content: "&#127769;"; }
.stamp { --radius: .2em; background-image: radial-gradient(var(--radius), transparent 98%, var(--paper-color)), linear-gradient(var(--paper-color) 0 0); background-repeat: round, no-repeat; background-position: calc(var(--radius) * -1.5) calc(var(--radius) * -1.5), 50%; background-size: calc(var(--radius) * 3) calc(var(--radius) * 3), calc(100% - var(--radius) * 3) calc(100% - var(--radius) * 3); padding: 1.5em 28px; margin-bottom: 24px; filter: drop-shadow(3px 3px 0 rgba(0,0,0,0.1)); }
.entry-date { font-family: "Courier New",monospace; font-size: 13px; color: var(--accent); margin-bottom: 8px; letter-spacing: 1px; }
.entry-title { font-size: 20px; margin: 0 0 12px 0; color: var(--text); font-weight: bold; font-family: var(--header-font); }
.entry p { margin: 0 0 8px 0; }
.entry-tag { display: inline-block; font-size: 11px; padding: 2px 8px; margin-right: 4px; margin-top: 8px; background: var(--accent); color: var(--bg); clip-path: polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%); }
.mood { font-size: 12px; color: var(--secondary); font-style: italic; }
hr { border: none; border-top: 2px dashed var(--accent); margin: 30px 0; }
details { margin: 1em 0; }
details summary { cursor: pointer; font-weight: bold; color: var(--accent); list-style: ""; }
details summary::before { content: "&#9654;"; display: inline-block; margin-right: 1ch; }
details[open] summary::before { content: "&#9660;"; }
details ul { padding-left: 20px; }
details ul li { margin: 4px 0; }
details ul li a { color: var(--secondary); text-decoration: none; background-image: linear-gradient(to right, var(--accent), var(--secondary)); background-repeat: no-repeat; background-position: right 0px bottom -1px; background-size: 100% 2px; }
.webring-text { background-image: linear-gradient(-225deg, var(--secondary) 0%, var(--accent) 50%, var(--secondary) 100%); background-size: 200%; background-clip: text; -webkit-text-fill-color: transparent; animation: 2s linear infinite textclip; }
@keyframes textclip { 100% { background-position: 200% center; } }
@media (max-width: 600px) { body { padding: 12px; font-size: 14px; } .stamp { padding: 1em 16px; } }
</style>
</head>
<body>
<div class="theme-bar">
  <button class="theme-btn" onclick="setTheme('pink')">pink</button>
  <button class="theme-btn" onclick="setTheme('blue')">blue</button>
  <button class="theme-btn" onclick="setTheme('yellow')">yellow</button>
  <button class="theme-btn" onclick="setTheme('black')">black</button>
  <button class="theme-btn" onclick="setTheme('green')">green</button>
  <button class="theme-btn" onclick="setTheme('orange')">orange</button>
  <button class="theme-btn" onclick="setTheme('purple')">purple</button>
  <button class="theme-btn" onclick="setTheme('rainbow')">&#127752;</button>
  <label class="theme-switch"><input type="checkbox" onchange="setTheme(this.checked?'black':'pink')"><span class="slider"></span></label>
</div>
<a href="index.html" id="back">&larr; back</a>
<h1>&#128221; diary <span class="webring-text" style="font-size:14px">&#11088; thoughts</span></h1>

<div class="stamp">
  <div class="entry-date">2026-06-25 &mdash; 2:34 AM</div>
  <div class="entry-title">i can't sleep so i'm writing this</div>
  <p>it's 2AM and i'm staring at the ceiling trying to figure out why i keep redesigning this site every 3 months. probably avoidance. probably creative drive. both.</p>
  <p>anyway i've been playing [game] again and i forgot how good it feels to just turn your brain off.</p>
  <div class="mood">mood: contemplative</div>
  <div>
    <span class="entry-tag">personal</span>
    <span class="entry-tag">gaming</span>
    <span class="entry-tag">2am thoughts</span>
  </div>
</div>

<div class="stamp">
  <div class="entry-date">2026-06-20 &mdash; 6:15 PM</div>
  <div class="entry-title">made a thing and it took forever</div>
  <p>spent the whole afternoon working on something and i'm actually really happy with how it turned out. it looks a bit messy but in a good way.</p>
  <div class="mood">mood: accomplished</div>
  <div>
    <span class="entry-tag">creative</span>
    <span class="entry-tag">web design</span>
  </div>
</div>

<details>
  <summary>archive</summary>
  <ul>
    <li><a href="#">2026-06-12 — another entry</a></li>
    <li><a href="#">2026-06-01 — site redesign thoughts</a></li>
    <li><a href="#">2026-05-28 — things i like right now</a></li>
  </ul>
</details>

<hr>
<p style="text-align:center;font-size:12px;color:var(--secondary)">powered by insomnia and excessive CSS</p>

<script>
function setTheme(t) {
  document.documentElement.className = t;
  try { localStorage.setItem('theme', t); } catch(e) {}
}
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved) { document.documentElement.className = saved; }
  } catch(e) {}
})();
</script>
</body>
</html>
```

---

### D. OS DESKTOP WITH AUDIO SPRITE SYSTEM — full UI, JS-heavy ([HOME] × WARP ZONE × theabsoluterealm)

Techniques: Windows 9x title bar gradient, grid-based OS window manager, multi-layer dial spin 400-500s, audio sprite system (5 audio elements), per-letter staggered animation, tooltip with diamond arrow, hex clip-path nav, backdrop-filter blur overlay, hue-rotate hover, steps() wiggle, marquee with min(), mix-blend-mode difference crosshair, vertical-rl text, honeycomb CSS grid, secret easter egg modal, status.cafe embed, last.fm now-playing, 22 webrings in sidebar, theme switcher via JS

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>desktop — sitename</title>
<style>
* { box-sizing: border-box; }
body { margin: 0; padding: 20px; background: #0a0a0a; color: #b3ff8c; font-family: "Courier New","Tahoma",monospace; font-size: 13px; overflow: hidden; height: 100vh; background-image: repeating-linear-gradient(45deg,rgba(255,20,147,0.03) 0px,rgba(255,20,147,0.03) 2px,transparent 2px,transparent 8px),repeating-linear-gradient(-45deg,rgba(124,252,0,0.03) 0px,rgba(124,252,0,0.03) 2px,transparent 2px,transparent 8px); }
body::after { content: ""; display: block; position: fixed; opacity: 0.3; inset: 0; pointer-events: none; z-index: 9999; background: linear-gradient(rgba(242,17,129,0.35) 50%, rgba(0,0,0,0.1) 50%) 0% 0% / 100% 3px; }
::selection { color: rgb(255,225,253); text-shadow: 1px 0px 0px rgb(199,0,149), -1px 0px 0px rgb(199,0,149), 0px 1px 0px rgb(199,0,149), 0px -1px 0px rgb(199,0,149), 0px 0px 5px rgb(199,0,149); background: rgba(199,0,149,0.3); }
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-track { background: -webkit-linear-gradient(top, rgb(255,181,205) 2%, rgb(255,204,168) 17%, rgb(255,246,183) 35%, rgb(218,255,183) 55%, rgb(170,222,255) 76%, rgb(206,186,252) 97%); }
::-webkit-scrollbar-thumb { background: rgb(214,236,243); border: 1px dotted rgb(143,56,255); }
.windows-container { display: grid; grid: 1fr / 1fr 2.2fr 1fr; width: 100%; height: calc(100vh - 40px); gap: 4px; }
.base-window { border: 1px solid rgb(107,211,107); background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAGklEQVQYV2NkYPj/n4EBCxg5OTkZGRkZGSkwAADqBAUQM5mNqQAAAABJRU5ErkJggg=='); background-size: 270px; overflow: auto; }
.window-title { background: linear-gradient(rgb(210,255,64) 0%, rgb(191,250,62) 10%, rgb(101,207,42) 55%, rgb(91,189,39) 56%, rgb(95,195,40) 60%, rgb(97,199,41) 100%); display: flex; align-items: center; padding: 2px 6px; height: 22px; color: #000; font-size: 12px; font-weight: bold; position: sticky; top: 0; z-index: 2; }
.window-title .btn { margin-left: auto; display: flex; gap: 2px; }
.window-title .btn span { display: inline-block; width: 12px; height: 12px; line-height: 12px; text-align: center; background: #000; color: #b3ff8c; font-size: 10px; cursor: pointer; }
.window-title .btn span:hover { background: #ff1493; color: #000; }
.window-content { padding: 10px; }
.sidebar-nav a { display: block; padding: 4px 6px; color: #b3ff8c; text-decoration: none; border: 1px solid transparent; transition: all 0.2s; }
.sidebar-nav a:hover { border-color: #b3ff8c; background: rgba(179,255,140,0.1); animation: 1s linear 0s infinite normal none running huecycle; }
@keyframes huecycle { 0% { filter: hue-rotate(0deg) saturate(200%); } 100% { filter: hue-rotate(360deg) saturate(200%); } }
.dial-container { position: relative; width: 100%; height: 200px; overflow: hidden; }
.dial-layer { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; animation: dial-spin 400s linear infinite; transform: translate(-50%, -50%); image-rendering: pixelated; border-radius: 50%; border: 2px dashed rgba(179,255,140,0.2); }
.dial-layer:nth-child(2) { animation-duration: 500s; animation-direction: reverse; width: 80%; height: 80%; border-color: rgba(255,20,147,0.2); border-style: dotted; }
.dial-layer:nth-child(3) { animation-duration: 300s; width: 60%; height: 60%; border-color: rgba(124,252,0,0.2); border-style: double; }
@keyframes dial-spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
.song-display { background: rgba(0,0,0,0.5); padding: 8px; margin-bottom: 8px; border: 1px solid rgb(107,211,107); }
.song-display marquee { font-size: 12px; color: #b3ff8c; }
#clock { font-size: 24px; color: #b3ff8c; text-align: center; padding: 10px; font-family: "Courier New",monospace; text-shadow: 0 0 5px rgba(179,255,140,0.5); }
.tooltip { display: none; position: fixed; background: #000; color: #fff; padding: 0.5em 1em; border: 3px solid #fff; pointer-events: none; z-index: 100; max-width: 200px; font-family: "Georgia", serif; }
.tooltip::before { content: ""; width: 16px; height: 16px; position: absolute; top: calc(50% - 8px); left: -8px; background: #000; transform: rotate(45deg); border-left: 3px solid #fff; border-bottom: 3px solid #fff; }
.hex-link { display: block; clip-path: polygon(49.64% 0.65%, 98.49% 23.85%, 98.61% 76.24%, 49.55% 99.37%, 1.75% 76.64%, 0.69% 23.89%); width: 100px; height: 106px; background: rgba(179,255,140,0.1); margin: 10px auto; transition: background 0.2s; }
.hex-link:hover { background: rgba(179,255,140,0.3); }
.hex-link a { display: block; width: 100%; height: 100%; }
.popup { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(5px); z-index: 1000; justify-content: center; align-items: center; }
.popup.show { display: flex; }
.popup-content { background: #111; border: 3px solid #b3ff8c; padding: 30px; max-width: 400px; text-align: center; animation: popIn 0.3s ease; }
@keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
.popup-close { display: inline-block; margin-top: 16px; padding: 4px 16px; background: #b3ff8c; color: #000; cursor: pointer; font-size: 12px; }
.secret-zone { position: fixed; bottom: 10px; right: 10px; width: 20px; height: 20px; background: transparent; cursor: pointer; z-index: 999; }
.secret-zone:hover { background: rgba(179,255,140,0.1); }
#statuscafe { font-size: 11px; padding: 6px; background: rgba(0,0,0,0.3); margin-top: 8px; }
@media (max-width: 700px) { .windows-container { grid: auto / 1fr; height: auto; } body { overflow: auto; padding: 10px; } }
</style>
</head>
<body>
<div class="secret-zone" onclick="document.getElementById('secretModal').classList.add('show')" title="??"></div>

<div id="secretModal" class="popup">
  <div class="popup-content">
    <h2 style="color:#b3ff8c;margin:0 0 10px">&#9733; you found it!</h2>
    <p style="color:#888;font-size:13px">there's always something hidden. keep exploring.</p>
    <span class="popup-close" onclick="document.getElementById('secretModal').classList.remove('show')">close</span>
  </div>
</div>

<div class="tooltip" id="tooltip"></div>

<audio id="openSound" preload="auto"><source src="open.ogg"></audio>
<audio id="closeSound" preload="auto"><source src="close.ogg"></audio>
<audio id="clickSound" preload="auto"><source src="click.ogg"></audio>
<audio id="hoverSound" preload="auto"><source src="hover.ogg"></audio>
<audio id="secretSound" preload="auto"><source src="secret.ogg"></audio>

<div class="windows-container">
  <div class="base-window">
    <div class="window-title"><span>nav.exe</span><div class="btn"><span id="minBtn">_</span><span id="maxBtn">[]</span><span id="closeBtn">X</span></div></div>
    <div class="window-content sidebar-nav">
      <a href="index.html" onmouseenter="playSound('hoverSound')">home</a>
      <a href="about.html" onmouseenter="playSound('hoverSound')">about</a>
      <a href="diary.html" onmouseenter="playSound('hoverSound')">diary</a>
      <a href="shrine.html" onmouseenter="playSound('hoverSound')">shrine</a>
      <a href="links.html" onmouseenter="playSound('hoverSound')">links</a>
    </div>
    <div class="dial-container">
      <div class="dial-layer"></div>
      <div class="dial-layer"></div>
      <div class="dial-layer"></div>
    </div>
  </div>

  <div class="base-window">
    <div class="window-title"><span>content.exe</span><div class="btn"><span>_</span><span>[]</span><span>X</span></div></div>
    <div class="window-content">
      <h1 style="margin:0 0 10px 0;font-size:20px;color:#b3ff8c;font-family:Georgia,serif;border-bottom:2px dashed rgb(107,211,107);padding-bottom:6px">welcome to my desktop</h1>
      <div class="song-display">
        <marquee id="songMarquee" scrollamount="2">&#9835; now playing: loading... &#9835;</marquee>
      </div>
      <p style="font-size:13px;line-height:1.6">this is my corner of the internet. think of it like a computer desktop where every window is a different part of my brain.</p>
      <p style="font-size:12px;color:#888;font-family:Verdana,sans-serif">scroll around. open windows. see what's here.</p>
      <div class="hex-link"><a href="about.html"></a></div>
      <div id="statuscafe">
        <div id="statuscafe-username"><a href="https://status.cafe/users/YOU" style="color:#b3ff8c">YOU</a></div>
        <div id="statuscafe-content">loading status...</div>
      </div>
    </div>
  </div>

  <div class="base-window">
    <div class="window-title"><span>status.exe</span><div class="btn"><span>_</span><span>[]</span><span>X</span></div></div>
    <div class="window-content">
      <div id="clock">00:00</div>
      <p style="font-size:12px;margin:8px 0"><strong>mood:</strong> <span id="moodDisplay">existing</span></p>
      <p style="font-size:12px;margin:8px 0"><strong>listening:</strong> <span id="listeningDisplay">—</span></p>
      <p style="font-size:12px;margin:8px 0"><strong>playing:</strong> [game name]</p>
      <p style="margin:8px 0;color:#888;font-size:11px">last updated: today</p>
      <div style="margin-top:12px">
        <a href="links.html" style="display:block;padding:4px;border:1px solid rgb(107,211,107);text-align:center;color:#b3ff8c;text-decoration:none;font-size:11px">&#128279; 88x31 buttons</a>
        <a href="diary.html" style="display:block;padding:4px;border:1px solid rgb(107,211,107);text-align:center;color:#b3ff8c;text-decoration:none;font-size:11px;margin-top:4px">&#128221; diary</a>
      </div>
    </div>
  </div>
</div>

<script>
function playSound(id) { try { var s = document.getElementById(id); if (s) { s.currentTime = 0; s.play().catch(function(){}); } } catch(e) {} }
function showTooltip(e,t){ var el = document.getElementById('tooltip'); el.textContent = t; el.style.display = 'block'; moveTooltip(e); }
function moveTooltip(e){ var el = document.getElementById('tooltip'); el.style.left = (e.clientX+15)+'px'; el.style.top = (e.clientY+15)+'px'; }
function hideTooltip(){ document.getElementById('tooltip').style.display = 'none'; }

function updateClock() {
  var d = new Date(), h = d.getHours() % 12 || 12, m = d.getMinutes();
  document.getElementById('clock').textContent = h + ':' + (m < 10 ? '0' + m : m);
}
setInterval(updateClock, 1000); updateClock();

document.querySelectorAll('.window-title .btn span').forEach(function(el) {
  el.addEventListener('click', function(e) {
    playSound('clickSound');
    if (this.textContent === 'X') { this.closest('.base-window').style.display = 'none'; }
  });
});

var moods = ['existing', 'vibing', 'creative', 'tired', 'focused', 'distracted', 'coding', 'chill'];
var moodEl = document.getElementById('moodDisplay');
setInterval(function() {
  moodEl.textContent = moods[Math.floor(Math.random() * moods.length)];
}, 30000);

fetch('https://status.cafe/current-status.php?name=YOU')
  .then(function(r){ return r.text(); })
  .then(function(t){ document.getElementById('statuscafe-content').innerHTML = t; })
  .catch(function(){ document.getElementById('statuscafe-content').textContent = 'status unavailable'; });

fetch('https://lastfm-last-played.biancarosa.com.br/YOU/latest-song')
  .then(function(r){ return r.json(); })
  .then(function(d){
    if (d && d.track) {
      document.getElementById('songMarquee').textContent = '&#9835; ' + d.track.name + ' — ' + d.track.artist + ' &#9835;';
      document.getElementById('listeningDisplay').textContent = d.track.name + ' — ' + d.track.artist;
    }
  })
  .catch(function(){});
</script>
<script src="https://status.cafe/current-status.php?name=YOU" defer></script>
</body>
</html>
```

---

### E. GALLERY — polaroid, slideshow, sticker wall (Skyweaver × CALL NOW × cinni)

Techniques: polaroid outline+box-shadow, floating img with shape-outside, hover scale+rotate, slideshow scroll with hover effects, fancybox flex grid, multi-radial-gradient bg, border-image repeating frames, custom slider thumbs, ::before/::after content url() decorations, pride underlines, staggered card animation via CSS custom properties, details/summary collapsible categories, responsive columns with grid, backdrop-filter glassmorphism, noise texture overlay, link-table grid for buttons

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>gallery — sitename</title>
<style>
* { box-sizing: border-box; }
body { margin: 0; padding: 20px; background: radial-gradient(at 22% 31%, rgb(65,53,98), transparent 55%), radial-gradient(at 97% 87%, rgb(81,82,132), transparent 55%), radial-gradient(at 61% 12%, rgb(209,61,58), transparent 45%), rgb(0,0,0); color: #e0d0f0; font-family: "Verdana","Tahoma",sans-serif; font-size: 14px; background-attachment: fixed; }
body::after { content: ""; display: block; position: fixed; opacity: 0.3; inset: 0; pointer-events: none; z-index: 9999; background: linear-gradient(rgba(242,17,129,0.35) 50%, rgba(0,0,0,0.1) 50%) 0% 0% / 100% 3px; }
::selection { color: #000; background: rgba(124,252,0,0.5); text-shadow: none; }
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); }
::-webkit-scrollbar-thumb { background: #ff1493; border-radius: 4px; }
#back { display: inline-block; margin-bottom: 12px; padding: 4px 12px; background: #ff1493; color: #000; text-decoration: none; font-weight: bold; font-size: 12px; }
h1 { margin: 0 0 16px 0; font-size: 32px; color: #ff1493; font-family: "Impact","Arial Black",sans-serif; text-transform: uppercase; letter-spacing: 3px; border-bottom: 4px double #7cfc00; padding-bottom: 8px; text-shadow: 2px 2px 0 #7cfc00, -2px -2px 0 #0ff; }
h2 { font-size: 22px; color: #7cfc00; margin: 0 0 12px 0; font-family: "Georgia",serif; }
h2::before { content: "&#10024; "; }
.polaroid { background: rgb(255,255,255); outline: rgb(255,255,255) solid 16px; box-shadow: rgba(0,0,0,0.3) 0px 1px 8px 16px; margin: 32px; max-width: 300px; }
.polaroid img { display: block; max-width: 100%; }
.floating { max-width: 40%; }
.right { float: right; margin: 0 0 0 24px; }
.left { float: left; margin: 0 24px 0 0; }
.slideshow { display: flex; flex-direction: row; align-items: center; gap: 16px; width: 100%; padding: 16px; box-sizing: border-box; overflow-x: scroll; background: rgba(0,0,0,0.4); backdrop-filter: blur(9px); border-radius: 4px; margin-bottom: 20px; border: 1px solid rgba(255,20,147,0.3); }
.slideshow img { max-width: 240px; max-height: 200px; transition: transform 0.15s; object-fit: cover; border: 2px solid #fff; }
.slideshow img:hover { transform: scale(1.08) rotate(-2deg); }
.slideshow img.polaroid { margin: 16px; }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 20px; }
.gallery-grid a { display: block; position: relative; overflow: hidden; border: 3px solid transparent; transition: border-color 0.2s; }
.gallery-grid a:hover { border-color: #ff1493; }
.gallery-grid a img { width: 100%; height: 180px; object-fit: cover; transition: transform 0.3s; display: block; }
.gallery-grid a:hover img { transform: scale(1.05); }
.gallery-grid a::after { content: "&#128269;"; position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.7); color: #fff; padding: 2px 6px; font-size: 11px; border-radius: 2px; opacity: 0; transition: opacity 0.2s; }
.gallery-grid a:hover::after { opacity: 1; }
details { margin: 1em 0; }
details summary { cursor: pointer; color: #7cfc00; font-weight: bold; list-style: ""; }
details summary::before { content: "&#9654; "; }
details[open] summary::before { content: "&#9660; "; }
.sticker-wall { display: flex; flex-wrap: wrap; gap: 4px; padding: 10px; background: rgba(0,0,0,0.3); border: 2px dashed #ff1493; margin-bottom: 16px; }
.sticker-wall img { width: 88px; height: 31px; image-rendering: pixelated; filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.3)); transition: transform 0.15s; }
.sticker-wall img:hover { transform: scale(1.1) rotate(-3deg); }
.link-table { width: 100%; display: flex; flex-direction: column; gap: 0; margin: 8px 0; box-shadow: 0px -1px 6px rgba(255,255,255,0.1), inset 0px 1px 3px rgba(0,0,0,0.3); }
.link-table div { padding: 6px 12px; width: 100%; display: grid; grid-template-columns: 24% auto; border-bottom: 1px solid rgba(255,255,255,0.1); border-top: 2px solid rgba(255,255,255,0.1); gap: 16px; }
.link-table div:last-child { border-bottom: none; }
.link-table div a { justify-self: end; text-align: right; color: #7cfc00; }
.btn-card { display: inline-block; padding: 6px 12px; background: linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.434) 49%, rgba(255,255,255,0.0062) 50%, rgba(255,255,255,0.434) 100%), rgba(205,238,246,0.5); box-shadow: 0px 1px 6px rgba(0,0,0,0.47), inset 0px 1px 4px rgba(255,255,255,0.7); backdrop-filter: blur(10px); border-radius: 4px; color: #000; text-decoration: none; font-size: 12px; }
.btn-card:hover { box-shadow: 0px 2px 8px rgba(0,0,0,0.47), inset 0px 2px 4px rgba(255,255,255,0.9); }
.btn-card:active { box-shadow: 0px 1px 3px rgba(0,0,0,0.47) inset; }
@media (max-width: 600px) { body { padding: 10px; } .floating { max-width: 100%; float: none; margin: 0 0 16px 0; } .slideshow img { max-width: 160px; } .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
</head>
<body>
<a href="index.html" id="back">&larr; back</a>
<h1>&#128247; gallery</h1>

<div class="slideshow">
  <img src="https://placehold.co/240x200/ff1493/fff?text=img1" alt="image 1">
  <img class="polaroid" src="https://placehold.co/200x160/7cfc00/000?text=img2" alt="image 2">
  <img src="https://placehold.co/240x200/0ff/000?text=img3" alt="image 3">
  <img src="https://placehold.co/240x200/ffa500/000?text=img4" alt="image 4">
  <img class="polaroid" src="https://placehold.co/200x160/ff69b4/fff?text=img5" alt="image 5">
</div>

<details open>
  <summary>all images</summary>
  <div class="gallery-grid">
    <a href="#"><img src="https://placehold.co/300x200/ff1493/fff?text=art+1" alt="art 1"></a>
    <a href="#"><img src="https://placehold.co/300x200/7cfc00/000?text=art+2" alt="art 2"></a>
    <a href="#"><img src="https://placehold.co/300x200/0ff/000?text=art+3" alt="art 3"></a>
    <a href="#"><img src="https://placehold.co/300x200/ffa500/000?text=art+4" alt="art 4"></a>
    <a href="#"><img src="https://placehold.co/300x200/ff69b4/fff?text=art+5" alt="art 5"></a>
    <a href="#"><img src="https://placehold.co/300x200/8a2be2/fff?text=art+6" alt="art 6"></a>
  </div>
</details>

<div class="polaroid left">
  <img src="https://placehold.co/260x200/ff1493/fff?text=polaroid" alt="polaroid example">
</div>
<p style="font-size:13px;line-height:1.8">this is a floating polaroid image with text wrapping around it. the <code>shape-outside</code> property isn't used here but the float creates a nice text flow. the polaroid effect uses pure CSS: a white background, a white outline at 16px thick, and a box-shadow that creates the 3D depth. swap the image with your own.</p>
<p style="font-size:13px;line-height:1.8">the gallery grid uses <code>auto-fill</code> with <code>minmax(200px, 1fr)</code> so it automatically adjusts columns. each image has a hover zoom effect and a magnifying glass icon appears on hover via the <code>::after</code> pseudo-element.</p>

<div style="clear:both"></div>

<div class="sticker-wall">
  <img src="https://placehold.co/88x31/ff1493/fff?text=88x31" alt="button">
  <img src="https://placehold.co/88x31/7cfc00/000?text=BUTTON" alt="button">
  <img src="https://placehold.co/88x31/0ff/000?text=CLICK" alt="button">
  <img src="https://placehold.co/88x31/ffa500/fff?text=ME" alt="button">
  <img src="https://placehold.co/88x31/8a2be2/fff?text=FAN" alt="button">
  <img src="https://placehold.co/88x31/ff69b4/fff?text=SITE" alt="button">
</div>

<div class="link-table">
  <div><p>my button code</p><a href="#"><code>&lt;a href="https://mysite.neocities.org"&gt;&lt;img src="button.gif"&gt;&lt;/a&gt;</code></a></div>
  <div><p>button wall</p><a href="#">view all buttons &rarr;</a></div>
</div>

<p style="text-align:center;margin-top:20px">
  <a href="links.html" class="btn-card">&#128279; links page</a>
  <a href="shrine.html" class="btn-card">&#9876; shrine</a>
</p>
</body>
</html>
```

---

## LAYER THIS ON EVERY PAGE (always-on effects)

These effects should appear on MOST pages. They're the background radiation of the indie web.

### CRT scanline overlay + RGB subpixel
```css
body::after {
  content: ""; display: block; position: fixed;
  opacity: 0.5; inset: 0; pointer-events: none; z-index: 9999;
  background:
    linear-gradient(rgba(242,17,129,0.35) 50%, rgba(0,0,0,0.1) 50%) 0% 0% / 100% 3px,
    linear-gradient(90deg, rgba(255,0,0,0.01), rgba(0,255,0,0.02), rgba(0,0,255,0.01)) 0% 0% / 3px 100%;
}
```

### ::selection neon glow
```css
::selection {
  color: rgb(255,225,253);
  text-shadow: 1px 0px 0px rgb(199,0,149), -1px 0px 0px rgb(199,0,149),
               0px 1px 0px rgb(199,0,149), 0px -1px 0px rgb(199,0,149),
               0px 0px 5px rgb(199,0,149), 0px 0px 3px rgb(199,0,149);
  background: rgba(199,0,149,0.3);
}
```

### Custom scrollbar (rainbow or themed)
```css
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-track {
  background: -webkit-linear-gradient(top,
    rgb(255,181,205) 2%, rgb(255,204,168) 17%,
    rgb(255,246,183) 35%, rgb(218,255,183) 55%,
    rgb(170,222,255) 76%, rgb(206,186,252) 97%);
  border: 1px dotted rgb(143,56,255);
}
::-webkit-scrollbar-thumb { background: rgb(214,236,243); border: 1px dotted rgb(143,56,255); }
```

### Custom cursor
```css
* { cursor: url("cursors/default.cur"), auto; }
a, button, [onclick] { cursor: url("cursors/pointer.cur"), pointer; }
```
Use actual `.cur` or `.ico` files, not handwritten base64 PNG data URIs — hand-coded base64 PNG cursors almost always corrupt, making the cursor disappear entirely. Either link to a real cursor asset from `cursors/`, hardcode the cursor as a JS canvas program, or skip the custom cursor and leave the default Windows cursor.

### Fixed decorative borders
```css
.top-deco { width: 100%; height: 30px; position: fixed; top: 0; right: 0; z-index: 20; pointer-events: none; background-image: repeating-linear-gradient(90deg, #ff1493 0px, #ff1493 4px, transparent 4px, transparent 8px); }
```

### prefers-reduced-motion safety
```css
@media (prefers-reduced-motion) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  marquee, .marquee { display: none !important; }
}
```

---

## VIVARISM-STYLE SHADOW DESIGN SYSTEM

From Vivarism's together.css (466 lines, 115+ custom properties). Copy this approach:

```css
:root {
  --shadow-color: 208deg 32% 59%;
  --text-shadow-color: 22deg 15% 58%;
  --sticker-shadow-color: 348deg 8% 12%;

  --box-shadow-low: 0.5px 0.7px 1.2px hsl(var(--shadow-color) / 0.06),
    1px 1.2px 2.2px -0.2px hsl(var(--shadow-color) / 0.23),
    2.1px 2.5px 4.7px -0.5px hsl(var(--shadow-color) / 0.4);
  --box-shadow-medium: 0.5px 0.7px 0.9px hsl(var(--shadow-color) / 0.36),
    1.6px 2px 2.8px -0.9px hsl(var(--shadow-color) / 0.35),
    4.2px 5.1px 7.2px -1.8px hsl(var(--shadow-color) / 0.33),
    10.4px 12.6px 17.8px -2.7px hsl(var(--shadow-color) / 0.31);
  --box-shadow-high: 0.5px 0.7px 0.8px hsl(var(--shadow-color) / 0.39),
    1.5px 1.8px 2.1px -0.6px hsl(var(--shadow-color) / 0.36),
    2.9px 3.5px 4.1px -1.1px hsl(var(--shadow-color) / 0.33),
    5.6px 6.7px 7.9px -1.7px hsl(var(--shadow-color) / 0.3),
    10.2px 12.3px 14.5px -2.3px hsl(var(--shadow-color) / 0.27),
    17.5px 21.2px 24.9px -2.8px hsl(var(--shadow-color) / 0.23),
    28.4px 34.2px 40.3px -3.4px hsl(var(--shadow-color) / 0.19);
  --drop-shadow-low: drop-shadow(0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.21))
    drop-shadow(0.4px 0.8px 1px hsl(var(--shadow-color) / 0.21))
    drop-shadow(1px 2px 2.5px hsl(var(--shadow-color) / 0.21));
  --white-inset-shadow: 1px 1px 1.5px hsl(var(--text-shadow-color) / 0.3) inset,
    2.9px 2.9px 4.3px -1px hsl(var(--text-shadow-color) / 0.24) inset,
    7.8px 7.8px 11.6px -2px hsl(var(--text-shadow-color) / 0.19) inset;
  --black-inset-shadow: 1px 1px 3px hsl(0deg 0% 9% / 0.74) inset,
    2.1px 2.1px 5px -1.5px hsl(0deg 0% 9% / 0.57) inset,
    7.8px 7.8px 12px -3px hsl(0deg 0% 9% / 0.41) inset;
}
```
Use different shadow levels for different elements: `--box-shadow-low` for subtle depth, `--box-shadow-medium` for cards and sections, `--box-shadow-high` for modals and popups.

---

## 16-DIRECTION TRIG TEXT-SHADOW OUTLINE (VIVARISM)

Creates a circular outline around text using 16 cosine/sine pairs. The `calc()` approach means you can change the width by changing `0.05em`:

```css
:root {
  --outline-color: var(--white2);
  --outline-width: 0.05em;
}
h1 {
  text-shadow:
    calc(var(--outline-width) * 1) calc(var(--outline-width) * 0) 0 var(--outline-color),
    calc(var(--outline-width) * 0.9239) calc(var(--outline-width) * 0.3827) 0 var(--outline-color),
    calc(var(--outline-width) * 0.7071) calc(var(--outline-width) * 0.7071) 0 var(--outline-color),
    calc(var(--outline-width) * 0.3827) calc(var(--outline-width) * 0.9239) 0 var(--outline-color),
    calc(var(--outline-width) * 0) calc(var(--outline-width) * 1) 0 var(--outline-color),
    calc(var(--outline-width) * -0.3827) calc(var(--outline-width) * 0.9239) 0 var(--outline-color),
    calc(var(--outline-width) * -0.7071) calc(var(--outline-width) * 0.7071) 0 var(--outline-color),
    calc(var(--outline-width) * -0.9239) calc(var(--outline-width) * 0.3827) 0 var(--outline-color),
    calc(var(--outline-width) * -1) calc(var(--outline-width) * 0) 0 var(--outline-color),
    calc(var(--outline-width) * -0.9239) calc(var(--outline-width) * -0.3827) 0 var(--outline-color),
    calc(var(--outline-width) * -0.7071) calc(var(--outline-width) * -0.7071) 0 var(--outline-color),
    calc(var(--outline-width) * -0.3827) calc(var(--outline-width) * -0.9239) 0 var(--outline-color),
    calc(var(--outline-width) * 0) calc(var(--outline-width) * -1) 0 var(--outline-color),
    calc(var(--outline-width) * 0.3827) calc(var(--outline-width) * -0.9239) 0 var(--outline-color),
    calc(var(--outline-width) * 0.7071) calc(var(--outline-width) * -0.7071) 0 var(--outline-color),
    calc(var(--outline-width) * 0.9239) calc(var(--outline-width) * -0.3827) 0 var(--outline-color);
}
```
For a DOUBLE outline (outer stroke + inner stroke), double the variable count and use two `--stroke-width` values.

---

## 7-COLOR TEXTURE THEME SYSTEM (VIVARISM)

```css
:root {
  --red-texture: var(--red) url("/bg/texture/red.png");
  --orange-texture: var(--orange) url("/bg/texture/orange.png");
  --yellow-texture: var(--yellow) url("/bg/texture/yellow.png");
  --green-texture: var(--green) url("/bg/texture/green.png");
  --aqua-texture: var(--aqua) url("/bg/texture/aqua.png");
  --blue-texture: var(--blue) url("/bg/texture/blue.png");
  --purple-texture: var(--purple) url("/bg/texture/purple.png");
}
.texture { padding: var(--gap); border-radius: 8px; border-style: outset; }
.red.texture { background: var(--red-texture); border-color: var(--red); }
.green.texture { background: var(--green-texture); border-color: var(--green); }
/* repeat for each color */
```
Apply: `<div class="red texture">...</div>`

---

## STICKER DECORATION SYSTEM (VIVARISM)

Decorative pseudo-elements positioned around a sticker:

```css
.sticker {
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  background: var(--yellow);
  transform: rotate(-2deg);
  box-shadow: var(--sticker-shadow);
  filter: var(--sticker-drop-shadow);
}
.sticker::before {
  content: "";
  position: absolute;
  top: -4px; left: -4px; right: -4px; bottom: -4px;
  border: 2px dashed var(--purple);
  pointer-events: none;
}
.sticker::after {
  content: "";
  position: absolute;
  width: 8px; height: 8px;
  background: var(--red);
  border-radius: 50%;
  top: -3px; right: -3px;
}
```

---

## TECHNIQUE LIBRARY (~80 techniques)

Grouped by category. Layer 10+ per page.

### TEXT EFFECTS (layer 3-5 per page)

**1. 16-direction trig text-shadow outline** — see above (VIVARISM)

**2. Drop-shadow stacking for glow**
```css
.glow {
  filter: drop-shadow(rgb(189,191,157) 0px 0px 1px)
          drop-shadow(rgb(189,191,157) 0px 0px 0px)
          drop-shadow(rgb(189,191,157) 0px 0px 1px)
          drop-shadow(rgb(189,191,157) 0px 0px 0px)
          drop-shadow(rgb(189,191,157) 0px 0px 1px)
          drop-shadow(rgb(189,191,157) 0px 1px 0px);
}
```

**3. Ch-unit text-shadow for font-relative distance**
```css
p { text-shadow: 0.11ch 0.12ch 0.066ch hsl(0,0%,0%/0.2); }
```

**4. Animated gradient text (webring style)**
```css
.gradient-text {
  background-image: linear-gradient(-225deg, rgb(82,42,255) 0%, rgb(217,22,235) 50%, rgb(82,42,255) 100%);
  background-size: 200%; background-clip: text; -webkit-text-fill-color: transparent;
  animation: 2s linear infinite textclip;
}
@keyframes textclip { 100% { background-position: 200% center; } }
```

**5. Rainbow per-letter coloring (bucketing)**
```css
.rainbow-text span:nth-of-type(7n+1) { color: var(--red); }
.rainbow-text span:nth-of-type(7n+2) { color: var(--orange); }
/* ... repeat for 7 colors */
```

**6. Pride flag underline**
```css
.pride-underline {
  background-image: linear-gradient(to right, rgb(85,205,252), rgb(179,157,233),
    rgb(247,168,184), rgb(246,216,221), white 45%, white,
    white 55%, rgb(246,216,221), rgb(247,168,184),
    rgb(179,157,233), rgb(85,205,252));
  background-repeat: no-repeat;
  background-position: right 0px bottom -1px;
  background-size: 100% 4px;
}
```

**7. Vertical writing mode side titles**
```css
.v-title { writing-mode: vertical-rl; text-orientation: upright; font-size: 60px; letter-spacing: 20px; position: fixed; user-select: none; }
```

**8. Stroked text with -webkit-text-stroke**
```css
.stroke { -webkit-text-stroke: 0.11em var(--white); }
.double-stroke { position: relative; }
.double-stroke::before { content: attr(alt); position: absolute; -webkit-text-stroke: 0.11em var(--white); left: 0; z-index: -1; }
.double-stroke::after { content: attr(alt); position: absolute; -webkit-text-stroke: 0.25em var(--black); left: 0; z-index: -2; }
```

### BACKGROUNDS (layer 3-5 per page)

**9. Multi-radial-gradient composited background (WARP ZONE)**
```css
body {
  background:
    radial-gradient(at 22% 31%, rgb(65,53,98), transparent 55%),
    radial-gradient(at 97% 87%, rgb(81,82,132), transparent 55%),
    radial-gradient(at 61% 12%, rgb(209,61,58), transparent 45%),
    radial-gradient(at 53% 57%, rgb(180,65,113), transparent 55%),
    radial-gradient(at 17% 79%, rgb(218,134,77), transparent 55%),
    rgb(0,0,0);
}
```

**10. Repeating diagonal grid pattern**
```css
body {
  background-image:
    repeating-linear-gradient(45deg, rgba(255,20,147,0.03) 0px, rgba(255,20,147,0.03) 2px, transparent 2px, transparent 8px),
    repeating-linear-gradient(-45deg, rgba(124,252,0,0.03) 0px, rgba(124,252,0,0.03) 2px, transparent 2px, transparent 8px);
}
```

**11. Paper textures (Lost Letters)**
```css
.dot-paper { background: radial-gradient(rgb(175,228,232) 1px, transparent 0px) 0% 0% / 20px 20px rgb(225,249,251); }
.grid-paper { background-size: 20px 20px; background-image: linear-gradient(to right, rgb(255,229,247) 2px, transparent 2px), linear-gradient(rgb(255,229,247) 2px, transparent 2px); background-position: 0.5em 0.5em; background-color: white; }
.lined-paper { background-color: rgb(229,229,247); background-size: 20px 20px; background-image: repeating-linear-gradient(0deg, rgb(185,188,255), rgb(218,220,255) 1px, rgb(229,229,247) 1px, rgb(229,229,247)); }
```

**12. Stamp border (Lost Letters)**
```css
.stamp { --radius: .2em;
  background-image: radial-gradient(var(--radius), transparent 98%, white), linear-gradient(white 0 0);
  background-repeat: round, no-repeat;
  background-position: calc(var(--radius) * -1.5) calc(var(--radius) * -1.5), 50%;
  background-size: calc(var(--radius) * 3) calc(var(--radius) * 3), calc(100% - var(--radius) * 3) calc(100% - var(--radius) * 3);
  padding: 1.5em; filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}
```

**13. Noise texture overlay via pseudo-element**
```css
article { background: url("noise.png"), rgba(205,238,246,0.8); }
/* or via ::after */
body::before { content: ""; position: fixed; inset: 0; background: url("noise.png"); opacity: 0.05; pointer-events: none; z-index: 9998; }
```

**14. Background blend-mode multiply with gradient**
```css
.multi-bg { background: linear-gradient(to left, rgb(116,38,108), rgb(0,94,62), rgb(106,114,0), rgb(116,38,108)) 0% 0% / 300px, url("texture.png"); background-blend-mode: multiply; }
```

**15. Glassmorphism with backdrop-filter**
```css
.glass { background: rgba(205,238,246,0.5); backdrop-filter: blur(9px); border-radius: 4px; box-shadow: 0px 1px 8px rgba(0,0,0,0.6), inset 0px 1px 4px rgba(255,255,255,0.7); }
```

### SHADOWS AND BORDERS (layer 3-4 per page)

**16. VIVARISM 7-level shadow system** — see above

**17. Drop-shadow stacking for depth**
```css
filter: drop-shadow(rgba(0,0,0,0.07) 2.8px 2.8px 2.2px) drop-shadow(rgba(0,0,0,0.05) 6.7px 6.7px 5.3px);
```

**18. Border-image repeating frames**
```css
.fancy-border { border-width: 10px; border-style: solid; border-color: transparent; border-image: url("frame.png") 10 / 1 / 0 round; }
.eb-header { border-width: 27px; border-style: solid; border-color: transparent; border-image: url("eb-frame.gif") 27 / 9px / 0 stretch; }
```

**19. Inline data-URI border-image**
```css
h1 { border-image: url("data:image/png;base64,...") 7 / 7px / 0 round; border-width: 7px; border-style: solid; }
```

**20. Overlapping double borders with outline**
```css
border: 3px dotted #E664AE; outline: 5px solid #ADF1FF; outline-offset: 4px;
```

**21. Negative outline-offset notch (NomnomNami)**
```css
.note { outline: 2px dashed var(--border-color); outline-offset: -0.5em; }
```

**22. Polaroid outline + box-shadow (Skyweaver)**
```css
.polaroid { background: white; outline: white solid 16px; box-shadow: rgba(0,0,0,0.3) 0px 1px 8px 16px; margin: 32px; }
```

### LAYOUT (layer 2-3 per page)

**23. CSS honeycomb grid with nth-child offset ([HOME])**
```css
.honeycomb { display: grid; grid-auto-rows: 28px; gap: 30px 18px; }
.hc-7 { grid-template-columns: repeat(7, 32px); }
.hc-7 > :nth-child(14n+1), .hc-7 > :nth-child(14n+3),
.hc-7 > :nth-child(14n+5), .hc-7 > :nth-child(14n+7),
.hc-7 > :nth-child(14n+8), .hc-7 > :nth-child(14n+10),
.hc-7 > :nth-child(14n+12), .hc-7 > :nth-child(14n) { margin-top: 28px; }
```

**24. OS Windows grid layout**
```css
.windows-container { display: grid; grid: 1fr / 1fr 2.2fr 1fr; width: 100%; min-height: 100dvh; gap: 4px; }
```

**25. Responsive columns grid (Skyweaver)**
```css
.columns { display: grid; width: 100%; gap: 24px; }
.two { grid-template-columns: repeat(2, 1fr); }
.three { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 760px) { .two, .three { grid-template-columns: 1fr; } }
```

**26. Details/summary accordion nav (NomnomNami)**
```css
nav details summary { padding: 4px 10px; cursor: pointer; font-weight: bold; list-style: ""; }
nav details:nth-child(7n+1) summary { background-color: var(--extra1); }
/* repeat for 7n+2 through 7n+7 */
nav details ul { padding: 4px 10px; margin: 0; }
nav details ul li { list-style: none; }
```

**27. Sidebar to columns responsive (EGGRAMEN)**
```css
@media (max-width: 540px) {
  .sidebar { position: static; width: 90%; columns: 2; column-fill: balance; }
  .content { margin-left: 0; border: 0; min-height: 0; }
}
```

**28. Fixed centered container (daniele63)**
```css
#container { max-width: 980px; position: absolute; inset: 0; margin: auto; height: fit-content; }
```

**29. Link-table grid for buttons (Skyweaver)**
```css
.link-table div { display: grid; grid-template-columns: 24% auto; gap: 16px; }
.link-table div a { justify-self: end; text-align: right; }
```

### ANIMATIONS (layer 3-5 per page)

**30. Multi-layer dial spin ([HOME])**
```css
@keyframes dial-spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
.dial-layer { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; animation: dial-spin 400s linear infinite; transform: translate(-50%, -50%); }
.dial-layer:nth-child(2) { animation-duration: 500s; animation-direction: reverse; }
```

**31. Skew squish animation (NENRIKIDO) — 10-keyframe squash**
```css
@keyframes pett {
  0%, 11.1%, 100% { transform: none; }
  22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
  33.3% { transform: skewX(6.25deg) skewY(6.25deg); background-size: 100% 95%; }
  /* continues halving the angle: 3.125, 1.5625, 0.78125, 0.390625, 0.195312 */
}
```

**32. steps() choppy wiggle (WARP ZONE)**
```css
#featured { rotate: -5deg; animation: 1s steps(2, start) infinite alternate wiggie; }
@keyframes wiggie { 0% { transform: rotate(-15deg); } 100% { transform: rotate(15deg); } }
```

**33. Hue-rotate hover cycle (WARP ZONE)**
```css
a:hover { animation: 1s linear 0s infinite normal none running huecycle; }
@keyframes huecycle { 0% { filter: hue-rotate(0deg) saturate(200%); } 100% { filter: hue-rotate(360deg) saturate(200%); } }
```

**34. Per-letter staggered animation (bucketing)**
```html
<span style="--n:-10000ms;">b</span><span style="--n:-9900ms;">u</span><span style="--n:-9800ms;">c</span>
```
```css
#header span { animation: wave 1.5s linear var(--n) infinite forwards running, rainbow 3s linear var(--n) infinite forwards running; }
```

**35. Marquee with min() ([HOME])**
```css
@keyframes marquee { 0%, 30% { transform: none; } 100% { transform: translateX(min(-100% + 160px, 0px)); } }
```

**36. CSS preloader with 3D perspective (CALL NOW)**
```css
#preloader { perspective: 500px; width: 100px; height: 100px; position: fixed; }
#preloader-inner { border: 3px solid var(--green); border-top-color: var(--red); border-radius: 50%; transform: rotateY(45deg); animation: 1s linear infinite rotateAnim; }
@keyframes rotateAnim { 0% { transform: rotateY(45deg); } 100% { transform: rotateY(225deg); } }
```

**37. Blink (step-end, not visibility)**
```css
.blink { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
```

**38. Pop-in modal scale animation**
```css
@keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
```

### CLIP-PATH POLYGONS (use 2-3 per page)

**39. Clip-path shapes library**
```css
.folded-btn { clip-path: polygon(89% 0px, 100% 24%, 100% 100%, 0px 100%, 0px 0px); }
.flag { clip-path: polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%); }
.hex { clip-path: polygon(49.64% 0.65%, 98.49% 23.85%, 98.61% 76.24%, 49.55% 99.37%, 1.75% 76.64%, 0.69% 23.89%); }
.tab { clip-path: polygon(0% 0%, 85% 0px, 100% 100%, 0% 100%); }
```

### PSEUDO-ELEMENTS (layer 3-5 per page)

**RULE: Never use emoji or Unicode symbols as pseudo-element content.** No `content: "★"`, `content: "♥"`, `content: "✦"`, `content: "⚠️"`, etc. Use `content: url()` for real icon images, or use `content: ""` with CSS borders/backgrounds/clip-path/box-shadow to draw shapes. Emoji in pseudo-elements is the #1 AI writing tell in indie web CSS.

**40. ::before/::after with content: url() (cinni)**
```css
h1::before { content: url("wing-r.png"); padding-right: 5px; }
h1::after { content: url("wing-l.png"); padding-left: 5px; }
h2::before { content: url("heart-icon.png"); padding: 0 5px; }
```

**41. Tooltip with diamond ::before arrow (irony machine)**
```css
.tooltip::before { content: ""; width: 16px; height: 16px; position: absolute; top: calc(50% - 8px); left: -8px; background: #000; transform: rotate(45deg); border-left: 3px solid #fff; border-bottom: 3px solid #fff; }
```

**42. Details/summary custom markers**
```css
details > summary { list-style-type: none; }
details > summary::before { content: "&#9654;"; display: inline-block; margin-right: 1ch; }
details[open] > summary::before { content: "&#9660;"; }
```

**43. Easy paste corner decorations (VIVARISM)**
```css
.easypaste { --back-position: 0.75em;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat;
  background-position: var(--back-position) var(--back-position),
    calc(100% - var(--back-position)) var(--back-position),
    var(--back-position) calc(100% - var(--back-position)),
    calc(100% - var(--back-position)) calc(100% - var(--back-position)), 0 0;
  background-size: 2em;
  background-image: url("corner.png"), url("corner.png"), url("corner.png"), url("corner.png"), url("bg.png");
}
```

### JAVASCRIPT (always include 3-5 JS interactions per site)

**44. Audio sprite system (WARP ZONE / theabsoluterealm)**
```html
<audio id="openSound" preload="auto"><source src="open.ogg"></audio>
<audio id="closeSound" preload="auto"><source src="close.ogg"></audio>
<audio id="clickSound" preload="auto"><source src="click.ogg"></audio>
<audio id="hoverSound" preload="auto"><source src="hover.ogg"></audio>
<audio id="secretSound" preload="auto"><source src="secret.ogg"></audio>
```
```js
function playSound(id) {
  try {
    var s = document.getElementById(id);
    if (s) { s.currentTime = 0; s.play().catch(function(){}); }
  } catch(e) {}
}
```

**45. Theme switcher with localStorage**
```js
function setTheme(t) {
  document.documentElement.className = t;
  try { localStorage.setItem('theme', t); } catch(e) {}
}
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved) { document.documentElement.className = saved; }
  } catch(e) {}
})();
```

**46. CSS-only theme toggle (NomnomNami)**
```html
<label class="theme-switch"><input type="checkbox" onchange="setTheme(this.checked?'dark':'light')"><span class="slider"></span></label>
```
```css
.slider { position: relative; width: 48px; height: 24px; background: #ccc; border-radius: 12px; display: block; }
.slider::before { content: ""; position: absolute; width: 20px; height: 20px; left: 2px; top: 2px; background: #fff; border-radius: 50%; transition: left 0.2s; }
input:checked + .slider { background: #333; }
input:checked + .slider::before { left: 26px; }
```

**47. Live clock**
```js
function updateClock() {
  var d = new Date(), h = d.getHours() % 12 || 12, m = d.getMinutes();
  document.getElementById('clock').textContent = h + ':' + (m < 10 ? '0' + m : m);
}
setInterval(updateClock, 1000); updateClock();
```

**48. Random mood changer**
```js
var moods = ['existing','vibing','creative','tired','coding','chill'];
setInterval(function() {
  document.getElementById('mood').textContent = moods[Math.floor(Math.random() * moods.length)];
}, 30000);
```

**49. Secret easter egg modal**
```html
<div class="secret-zone" onclick="document.getElementById('secretModal').classList.add('show')"></div>
<div id="secretModal" class="popup"><div class="popup-content">secret!<span onclick="this.closest('.popup').classList.remove('show')">close</span></div></div>
```
```css
.popup { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(5px); z-index: 1000; justify-content: center; align-items: center; }
.popup.show { display: flex; }
.popup-content { animation: popIn 0.3s ease; }
```

**50. Tooltip follower**
```js
function showTooltip(e,t){ var el=document.getElementById('tooltip'); el.textContent=t; el.style.display='block'; moveTooltip(e); }
function moveTooltip(e){ var el=document.getElementById('tooltip'); el.style.left=(e.clientX+15)+'px'; el.style.top=(e.clientY+15)+'px'; }
function hideTooltip(){ document.getElementById('tooltip').style.display='none'; }
```

**51. Status.cafe fetch**
```js
fetch('https://status.cafe/current-status.php?name=YOU')
  .then(function(r){ return r.text(); })
  .then(function(t){ document.getElementById('statuscafe-content').innerHTML = t; })
  .catch(function(){});
```

**52. Last.fm now-playing fetch**
```js
fetch('https://lastfm-last-played.biancarosa.com.br/YOU/latest-song')
  .then(function(r){ return r.json(); })
  .then(function(d){
    if (d && d.track) {
      document.getElementById('song').textContent = d.track.name + ' — ' + d.track.artist;
    }
  })
  .catch(function(){});
```

**53. Webring navigation with JS**
```html
<a href="javascript:void(0)" onclick="window.location.href=webrings[Math.floor(Math.random()*webrings.length)]">random site</a>
```

**54. Button to copy site button code**
```js
function copyCode() {
  var t = document.createElement('textarea');
  t.value = '<a href="https://mysite.neocities.org"><img src="button.gif"></a>';
  document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t);
}
```

### WIDGETS AND EMBEDS (add 2-4 per site)

```html
<!-- status.cafe -->
<div id="statuscafe"><div id="statuscafe-content"></div></div>
<script src="https://status.cafe/current-status.php?name=YOURNAME" defer></script>

<!-- imood -->
<a href="https://www.imood.com/users/YOU"><img src="https://moods.imood.com/display/uname-YOU/fg-COLOR/bg-COLOR/imood.gif"></a>

<!-- Atabook guestbook -->
<a href="https://YOU.atabook.org/">sign my guestbook!</a>

<!-- TamaNOTchi pet -->
<a href="http://tamanotchi.world/ID"><img src="http://tamanotchi.world/i/ID"></a>

<!-- Protected by a CAT (manyface) -->
<div style="background:#fff;padding:10px;border:1px solid;text-align:center"><p>this page is protected by a</p><h1>CAT</h1><img src="cat.jpg" style="max-width:100%"><small><a href="https://hekate.neocities.org/">get your own</a></small></div>

<!-- Webmentions -->
<link rel="webmention" href="https://webmention.io/YOURUSER/webmention">

<!-- Furcadia status -->
<img src="https://www.furcadia.com/services/online/myonlinestatus.php4?username=YOU&online_url=online.png&offline_url=offline.png">

<!-- Melonland Surf Club -->
<object data="https://surf.melonking.net/badge.svg" type="image/svg+xml" style="width:100px;height:100px"></object>
```

### SPECIAL EFFECTS (add 3-4 per page)

**55. CSS filter as theme engine for ALL images (cinni)**
```css
:root, [data-theme="dark"] { --filter: brightness(1.8) hue-rotate(40deg); }
[data-theme="light"] { --filter: brightness(.9) hue-rotate(120deg); }
img, video, audio { filter: var(--filter); }
/* Recolor audio player entirely: */
audio { filter: sepia(100%) hue-rotate(295deg) saturate(600%) contrast(60%) brightness(210%); }
```

**56. Image shape-outside wrapping (Lost Letters)**
```css
.char-wrap { float: left; width: 93px; shape-outside: url("character.png"); shape-margin: 15px; shape-image-threshold: 0; }
```

**57. Hover micro-icon (cinni)**
```css
ul li:nth-child(2n+1):hover { background-image: url("tiny-strawb.png"); background-repeat: no-repeat; background-position: right center; }
ul li:nth-child(2n):hover { background-image: url("tiny-clover.png"); background-repeat: no-repeat; background-position: right center; }
```

**58. Windows 9x title bar gradient**
```css
.window-title { background: linear-gradient(rgb(210,255,64) 0%, rgb(191,250,62) 10%, rgb(101,207,42) 55%, rgb(91,189,39) 56%, rgb(95,195,40) 60%, rgb(97,199,41) 100%); }
```

**59. Backdrop-filter blur overlay (WARP ZONE)**
```css
.overlay { background: rgba(0,0,0,0.55); backdrop-filter: blur(3px); position: fixed; inset: 0; z-index: 100; display: none; }
```

**60. Responsive table with gradient (NomnomNami)**
```css
@media screen and (max-width: 600px) {
  table thead { clip: rect(0,0,0,0); height: 1px; position: absolute; width: 1px; }
  table td { display: block; text-align: right; background: linear-gradient(90deg, var(--border-color) 0%, var(--bg-color) 50%); }
  table td::before { content: attr(data-label); float: left; font-weight: bold; text-transform: uppercase; }
}
```

**61. Custom slider thumbs (CALL NOW)**
```css
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; background: url("screw.png") center no-repeat transparent; }
```

**62. Hover letter-spacing nav (Skyweaver)**
```css
nav a { text-decoration: none; letter-spacing: normal; transition: 0.15s ease-out; }
nav a:hover { letter-spacing: 2px; transition: 0.15s ease-out; }
```

**63. Staggered card box-shadow (NENRIKIDO)**
```css
.card { border: 2px solid var(--secondary); background: var(--tertiary); box-shadow: 6px 6px var(--secondary_muted); }
```

**64. Broken HTML comments (WARP ZONE)**
```html
<!-- this is a broken comment <!-->
```
Leave broken syntax. It's authentic.

**65. ASCII art in comments (cinni)**
```html
<!--
    ___
   /   \__
  /      \
/  (o)(o) \
|    __    |
 \  \__/  /
  \______/
-->
```

**66. Honeycomb CSS grid with nth-child offset**
```css
.honeycomb { display: grid; grid-auto-rows: 28px; gap: 30px 18px; }
.hc-7 { grid-template-columns: repeat(7, 32px); }
.hc-7 > :nth-child(14n+1), .hc-7 > :nth-child(14n+3), .hc-7 > :nth-child(14n+5), .hc-7 > :nth-child(14n+7), .hc-7 > :nth-child(14n+8), .hc-7 > :nth-child(14n+10), .hc-7 > :nth-child(14n+12), .hc-7 > :nth-child(14n) { margin-top: 28px; }
```

**67. Cursor none on nav area (irony machine)**
```css
.nav-hotspot { cursor: none; }
```

**68. :has() parent selector (EGGRAMEN)**
```css
.parent:has(.active-child) { border-color: var(--accent); }
```

**69. Theme-specific font pairings (NENRIKIDO)**
```css
:root.pink { --body-font: "National Park", "Arial"; --header-font: "Distro", "Georgia"; }
:root.blue { --body-font: "Nunito", sans-serif; --header-font: "Franxurter", "Georgia"; }
```

**70. 100+ font loading approach (CALL NOW)**
```css
@font-face { font-family: "fontname"; src: url("https://dl.dropboxusercontent.com/.../font.ttf"); }
```
Repeat for every font. Use names like: argentpixel, gothicpixels, momstype, bubbleboy, blkmetal, cybaninglitch, kamisori, surfism1, badloc, basteleur, cyclops, neuropol.

**71. Marquee inside min-width auto-scroll (NENRIKIDO)**
```css
.marquee-text { display: inline-block; padding-left: 100%; animation: 8s linear infinite marquee; white-space: nowrap; }
@keyframes marquee { 0% { transform: translate(0,0); } 100% { transform: translate(-100%,0); } }
```

**72. 88x31 button wall**
```css
.button-wall { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px; background: #fff; border: 3px ridge #808080; }
.button-wall img { width: 88px; height: 31px; image-rendering: pixelated; }
```

**Real 88x31 button CDNs** (verified working):
```
https://cyber.dabamos.de/88x31/netscape_now.gif
https://cyber.dabamos.de/88x31/ieexplode.gif
https://cyber.dabamos.de/88x31/any_browser.gif
https://cyber.dabamos.de/88x31/winamp.gif
https://cyber.dabamos.de/88x31/neopets.gif
https://cyber.dabamos.de/88x31/made_with_windows.gif
https://cyber.dabamos.de/88x31/linux_powered.gif
https://cyber.dabamos.de/88x31/seti.gif
https://cyber.dabamos.de/88x31/mozilla.gif
https://cyber.dabamos.de/88x31/php.gif
https://cyber.dabamos.de/88x31/free.gif
https://cyber.dabamos.de/88x31/powered-by-debian.gif
https://anlucas.neocities.org/angelfire.gif
https://anlucas.neocities.org/geocitieswww.gif
https://anlucas.neocities.org/aolsucks.gif
https://anlucas.neocities.org/notepad.gif
https://anlucas.neocities.org/macmade.gif
https://anlucas.neocities.org/linux_now.gif
https://yoohoosearch.neocities.org/neocities-buttons/hostedbyneocities.png
https://yoohoosearch.neocities.org/neocities-buttons/neocitiesbutton.gif
```

**73. 10-color bullet list with CSS shapes (VIVARISM)**
```css
ul.cute { list-style: none; }
ul.cute li { margin-left: 2ch; position: relative; }
ul.cute li::before { content: ""; width: 0.6em; height: 0.6em; border-radius: 50%; display: inline-block; margin-right: 1ch; }
ul.cute li:nth-of-type(10n+1)::before { background: #f44; }
ul.cute li:nth-of-type(10n+2)::before { background: #fa4; }
ul.cute li:nth-of-type(10n+3)::before { background: #ff4; }
ul.cute li:nth-of-type(10n+4)::before { background: #4f4; }
ul.cute li:nth-of-type(10n+5)::before { background: #4ff; }
ul.cute li:nth-of-type(10n+6)::before { background: #44f; }
ul.cute li:nth-of-type(10n+7)::before { background: #f4f; }
ul.cute li:nth-of-type(10n+8)::before { background: #fff; border: 1px solid #000; }
ul.cute li:nth-of-type(10n+9)::before { background: #000; border: 1px solid #fff; }
ul.cute li:nth-of-type(10n)::before { background: transparent; border: 2px dashed #f44; }
```

**74. Breadcrumb with gradient separator (VIVARISM)**
```css
p#breadcrumb { text-transform: capitalize; font-size: 0.95em; }
p#breadcrumb a:last-of-type { display: contents; color: inherit; pointer-events: none; }
p#breadcrumb a + a::before { content: ""; display: inline-block; width: 1ch; height: 1ch; background: linear-gradient(135deg, var(--accent1), var(--accent2)); margin: 0 0.5ch; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
```

**75. VIVARISM hover-reveal text cursor**
```css
a, button, details summary, [onclick] { cursor: url("/assets/cursor_4a.ico") 2 5, pointer; }
textarea, input[type="text"] { cursor: url("/assets/cursor_3.ico"), text; }
```

**76. Scrollable container with themed scrollbar (VIVARISM)**
```css
.hugme { overflow: auto; padding-right: 1ch; }
.hugme::-webkit-scrollbar { width: 0.5rem; height: 0.5rem; }
.hugme::-webkit-scrollbar-thumb { background: var(--red-texture); border-color: var(--red); }
```

**77. Textarea for site button code (NomnomNami)**
```html
<textarea rows="3" readonly>&lt;a href="https://mysite.neocities.org"&gt;&lt;img src="button.gif"&gt;&lt;/a&gt;</textarea>
```

**78. Fixed hover reveal on image grid (inverted card)**
```css
.card { position: relative; overflow: hidden; }
.card img { transition: transform 0.3s; }
.card:hover img { transform: scale(1.05); }
.card::after { content: ""; position: absolute; bottom: 6px; right: 6px; width: 24px; height: 24px; border: 3px solid #fff; border-radius: 50%; opacity: 0; transition: opacity 0.2s; box-shadow: 0 0 0 100px rgba(0,0,0,0); }
.card:hover::after { opacity: 1; box-shadow: 0 0 0 100px rgba(0,0,0,0.3); }
```

**79. Slideshow with hover zoom+rotate (Skyweaver)**
```css
.slideshow { display: flex; overflow-x: scroll; gap: 16px; padding: 16px; }
.slideshow img { transition: transform 0.15s; }
.slideshow img:hover { transform: scale(1.05) rotate(-3deg); }
```

**80. Warning/note border callouts (VIVARISM)**
```css
.warning { border-left: 4px solid #f44; padding-left: 1ch; background: linear-gradient(90deg, rgba(255,68,68,0.1), transparent); }
.note { border-left: 4px solid #44f; padding-left: 1ch; background: linear-gradient(90deg, rgba(68,68,255,0.1), transparent); }
```

**81. Alias icon system with content: var() (VIVARISM)**
```css
.alias { height: 1em; width: auto; object-fit: contain; content: var(--alias); transform: translateY(0.25ch); display: inline-block; }
.alias.red { --alias: url("/assets/red.png"); }
.alias.blue { --alias: url("/assets/blue.png"); }
```

**82. Sticky theme-bar with backdrop-filter**
```css
.theme-bar { position: sticky; top: 0; z-index: 10; background: var(--bg); padding: 8px 0; backdrop-filter: blur(5px); }
```

**83. Secret hidden click zone (theabsoluterealm)**
```html
<div class="secret-zone" onclick="document.getElementById('secretModal').classList.add('show')" title="???"></div>
```
```css
.secret-zone { position: fixed; bottom: 10px; right: 10px; width: 20px; height: 20px; cursor: pointer; z-index: 999; }
.secret-zone:hover { background: rgba(179,255,140,0.1); }
```

**84. Earthbound border table system (theabsoluterealm)**
```css
.earthbtble { border-width: 27px; border-style: solid; border-color: transparent; border-image: url("eb-frame.gif") 27 / 9px / 0 stretch; background: rgba(0,0,0,0.6); color: #fff; padding: 16px; }
.earthbtbleMarker { position: relative; }
.earthbtbleMarker div { position: absolute; bottom: -20px; width: 20px; height: 20px; background: #000; transform: rotate(45deg); border: 2px solid #fff; }
```

**85. Multi-keyframe color-change animation (theabsoluterealm)**
```css
@keyframes color-change {
  0% { color: #6bd3bd; } 20% { color: #ff94ad; } 40% { color: #efff5a; }
  60% { color: #ff9a00; } 80% { color: #76d493; } 100% { color: #6bd3bd; }
}
```

---

## DENSITY DEMO: 30+ EFFECTS ON ONE ELEMENT

This is NOT a practical example — it's a DENSITY DEMO to show the model what layering looks like.
Every one of these can be applied to the same `<h1>` element simultaneously:

```css
h1 {
  /* 1. Custom font via @font-face */
  font-family: "Impact", "Arial Black", sans-serif;
  font-size: clamp(2rem, 5vw + 1rem, 6rem);
  text-transform: uppercase;
  letter-spacing: 6px;

  /* 2. Multi-radial-gradient background behind text */
  background: radial-gradient(at 22% 31%, rgb(65,53,98), transparent 55%),
              radial-gradient(at 61% 12%, rgb(209,61,58), transparent 45%);

  /* 3. Animated gradient text fill */
  background-image: linear-gradient(-225deg, rgb(82,42,255) 0%, rgb(217,22,235) 50%, rgb(82,42,255) 100%);
  background-size: 200%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 2s linear infinite textclip;

  /* 4. 16-direction trig text-shadow outline in white */
  --out: 0.05em;
  text-shadow:
    calc(var(--out) * 1) calc(var(--out) * 0) 0 #fff,
    calc(var(--out) * 0.9239) calc(var(--out) * 0.3827) 0 #fff,
    calc(var(--out) * 0.7071) calc(var(--out) * 0.7071) 0 #fff,
    calc(var(--out) * 0.3827) calc(var(--out) * 0.9239) 0 #fff,
    calc(var(--out) * 0) calc(var(--out) * 1) 0 #fff,
    calc(var(--out) * -0.3827) calc(var(--out) * 0.9239) 0 #fff,
    calc(var(--out) * -0.7071) calc(var(--out) * 0.7071) 0 #fff,
    calc(var(--out) * -0.9239) calc(var(--out) * 0.3827) 0 #fff,
    calc(var(--out) * -1) calc(var(--out) * 0) 0 #fff,
    calc(var(--out) * -0.9239) calc(var(--out) * -0.3827) 0 #fff,
    calc(var(--out) * -0.7071) calc(var(--out) * -0.7071) 0 #fff,
    calc(var(--out) * -0.3827) calc(var(--out) * -0.9239) 0 #fff,
    calc(var(--out) * 0) calc(var(--out) * -1) 0 #fff,
    calc(var(--out) * 0.3827) calc(var(--out) * -0.9239) 0 #fff,
    calc(var(--out) * 0.7071) calc(var(--out) * -0.7071) 0 #fff,
    calc(var(--out) * 0.9239) calc(var(--out) * -0.3827) 0 #fff;

  /* 5. Drop-shadow stacking glow */
  filter: drop-shadow(0px 0px 1px rgb(189,191,157))
          drop-shadow(0px 0px 0px rgb(189,191,157))
          drop-shadow(0px 0px 1px rgb(189,191,157))
          drop-shadow(0px 0px 0px rgb(189,191,157))
          drop-shadow(0px 0px 1px rgb(189,191,157))
          drop-shadow(0px 1px 0px rgb(189,191,157));

  /* 6. Hue-rotate hover cycle */
  transition: filter 0.3s;
  &:hover { animation: 1s linear infinite huecycle; }

  /* 7. Rotated */
  transform: rotate(-3deg);

  /* 8. Ch-unit text-shadow for depth behind trig outline */
  /* already used for trig, but add a ch-based one too */

  /* 9. Pride flag underline */
  background-image:
    linear-gradient(to right, rgb(85,205,252), rgb(179,157,233), rgb(247,168,184), rgb(246,216,221), white 45%, white, white 55%, rgb(246,216,221), rgb(247,168,184), rgb(179,157,233), rgb(85,205,252)),
    linear-gradient(-225deg, rgb(82,42,255) 0%, rgb(217,22,235) 50%, rgb(82,42,255) 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0px bottom -1px, 0 0;
  background-size: 100% 4px, 200%;

  /* 10. ::before wing decoration */
  &::before { content: url("wing-r.png"); padding-right: 5px; filter: brightness(1.8) hue-rotate(40deg); display: inline-block; }
  /* 11. ::after wing decoration */
  &::after { content: url("wing-l.png"); padding-left: 5px; filter: brightness(1.8) hue-rotate(40deg); display: inline-block; }
  /* 12. ASCII art in comment not shown here but above in HTML */

  /* 13. Sticker-style border */
  border: 2px dashed #ff1493;
  outline: 3px solid #7cfc00;
  outline-offset: -0.5em;
  padding: 0.5em;

  /* 14. Clip-path flag decoration */
  clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%);
  /* Note: clip-path and background-clip: text conflict, pick one per element */

  /* 15. -webkit-text-stroke for outline support */
  -webkit-text-stroke: 0.02em rgba(255,255,255,0.3);

  /* 16. Backdrop-filter if parent supports */
}
```

The point: **a single heading can carry 16+ CSS effects**. Now imagine doing this to EVERY element on your page.

---

## JS DENSITY: 10 INTERACTIVE PATTERNS FROM REAL SITES

### Audio sprite system with 5 sounds (theabsoluterealm)
```html
<audio id="openUp" preload="auto"><source src="https://site.com/assets/openUp.ogg"></audio>
<audio id="closeUp" preload="auto"><source src="https://site.com/assets/closeUp.ogg"></audio>
<audio id="textSound" preload="auto"><source src="https://site.com/assets/textSound.ogg"></audio>
<audio id="click" preload="auto"><source src="https://site.com/assets/click.ogg"></audio>
<audio id="yahoo" preload="auto"><source src="https://site.com/assets/yahoo.ogg"></audio>
```
```js
function playSound(id) {
  try { var s = document.getElementById(id); if (s) { s.currentTime = 0; s.play().catch(function(){}); } } catch(e) {}
}
// Wire up all interactive elements
document.querySelectorAll('a, button, .clickable').forEach(function(el) {
  el.addEventListener('click', function(e) { playSound('click'); });
  el.addEventListener('mouseenter', function(e) { playSound('textSound'); });
});
```

### Secret easter egg with modal (theabsoluterealm)
```html
<div class="secret-zone" onclick="openEasterEgg()"></div>
<div id="eggModal" class="popup">
  <div class="popup-content">
    <img src="secret.png" alt="easter egg">
    <span onclick="closeEasterEgg()">x</span>
  </div>
</div>
```
```js
function openEasterEgg() {
  document.getElementById('eggModal').classList.add('show');
  playSound('yahoo');
}
function closeEasterEgg() {
  document.getElementById('eggModal').classList.remove('show');
}
```

### Wobble text on hover (theabsoluterealm)
```css
#wobble { display: inline-block; transition: transform 0.2s; }
#wobble:hover { animation: wobble 0.5s ease infinite; }
@keyframes wobble { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
```

### Random mood with cycle (theabsoluterealm)
```js
var moods = [
  { text: 'vibing', color: '#6bd3bd' },
  { text: 'coding', color: '#6aeeff' },
  { text: 'creative', color: '#ff94ad' },
  { text: 'sleepy', color: '#eac0ff' },
  { text: 'focused', color: '#76d493' },
  { text: 'existing', color: '#888' },
  { text: 'hyperfixated', color: '#efff5a' }
];
setInterval(function() {
  var m = moods[Math.floor(Math.random() * moods.length)];
  var el = document.getElementById('mood');
  if (el) { el.textContent = m.text; el.style.color = m.color; }
}, 8000);
```

### Webring randomizer with weighted navigation
```js
var webrings = [
  { name: 'furryring', prev: 'https://thedevilsden.neocities.org/', next: 'https://mooeena.site/', random: 'https://furryring.neocities.org/userlist.html' },
  { name: 'nekowebring', prev: 'https://bufucat.nekoweb.org/', next: 'https://iluvwerewolves.nekoweb.org/', random: '#' },
  { name: 'transfem', prev: 'https://ikelene.dev/', next: 'https://cafepots.neocities.org/', random: 'https://fem.nz/' },
  { name: 'bucket', prev: 'https://webring.bucketfish.me/redirect.html?to=prev&name=shinto', next: 'https://webring.bucketfish.me/redirect.html?to=next&name=shinto', random: 'https://webring.bucketfish.me/' }
];
function randomRing() {
  var r = webrings[Math.floor(Math.random() * webrings.length)];
  window.open(r.random, '_blank');
}
```

### Typewriter effect for status
```js
function typeWriter(el, text, speed) {
  var i = 0;
  el.textContent = '';
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed || 30 + Math.random() * 70);
    }
  }
  type();
}
```

### Click counter with localStorage
```js
(function() {
  var count = parseInt(localStorage.getItem('clickCount') || '0');
  document.addEventListener('click', function() {
    count++;
    localStorage.setItem('clickCount', count);
    var el = document.getElementById('clickCount');
    if (el) el.textContent = count + ' clicks';
  });
})();
```

### Theme switcher with 7 themes and transition
```js
var themes = ['default','mint','strawberry','banana','peanut','alien','plain-noir'];
function setTheme(t) {
  document.documentElement.className = t;
  document.body.style.transition = 'background 0.3s, color 0.3s';
  try { localStorage.setItem('site-theme', t); } catch(e) {}
}
(function() {
  var saved = localStorage.getItem('site-theme');
  if (saved) { document.documentElement.className = saved; }
  // Random theme on secret click
  document.addEventListener('dblclick', function() {
    var r = themes[Math.floor(Math.random() * themes.length)];
    setTheme(r);
  });
})();
```

### Parallax space background scroll (theabsoluterealm)
```css
.spacebg {
  position: fixed; inset: 0; z-index: -2;
  background: url('https://site.com/assets/space.png') repeat;
  animation: backgroundScroll 15s linear reverse infinite;
}
.spacebg2 {
  position: fixed; inset: 0; z-index: -1;
  background: url('https://site.com/assets/space2.png') repeat;
  animation: backgroundScroll2 25s linear reverse infinite;
  opacity: 0.5;
}
@keyframes backgroundScroll { 0% { transform: translate(0,0); } 100% { transform: translate(-100%,-100%); } }
@keyframes backgroundScroll2 { 0% { transform: translate(0,0); } 100% { transform: translate(100%,100%); } }
```

### Fade overlay on page load (theabsoluterealm)
```css
.fadeoverlay {
  position: fixed; inset: 0; z-index: 99999;
  background: #000;
  animation: fadeAway 1s ease forwards;
  pointer-events: none;
}
@keyframes fadeAway { 0% { opacity: 1; } 100% { opacity: 0; } }
```
```html
<div id="fade" class="fadeoverlay"></div>
```

---

## BATCH-3 DEEP DIVES: COMPLETE PATTERNS FROM 5 SITES

### From VIVARISM 3.0 (466-line CSS master)

**Rainbow text with 7-color nth-of-type (nested)**
```css
.rainbow-text {
  & span:nth-of-type(7n+1) { color: var(--red-link); }
  & span:nth-of-type(7n+2) { color: var(--orange-link); }
  & span:nth-of-type(7n+3) { color: var(--yellow-link); }
  & span:nth-of-type(7n+4) { color: var(--green-link); }
  & span:nth-of-type(7n+5) { color: var(--aqua-link); }
  & span:nth-of-type(7n+6) { color: var(--blue-link); }
  & span:nth-of-type(7n+7) { color: var(--purple-link); }
}
```

**10-color nth-of-type bullet list with CSS shapes**
```css
ul.cute { list-style: none; }
ul.cute li { margin-left: 2ch; position: relative; }
ul.cute li::before { content: ""; width: 0.6em; height: 0.6em; border-radius: 50%; display: inline-block; margin-right: 1ch; }
ul.cute li:nth-of-type(10n+1)::before { background: #f44; }
ul.cute li:nth-of-type(10n+2)::before { background: #fa4; }
ul.cute li:nth-of-type(10n+3)::before { background: #ff4; border-radius: 0; }
ul.cute li:nth-of-type(10n+4)::before { background: #4f4; border-radius: 0; }
ul.cute li:nth-of-type(10n+5)::before { background: #4ff; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
ul.cute li:nth-of-type(10n+6)::before { background: #44f; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
ul.cute li:nth-of-type(10n+7)::before { background: #f4f; border-radius: 0; transform: rotate(45deg); }
ul.cute li:nth-of-type(10n+8)::before { background: #fff; border-radius: 0; border: 2px solid #000; }
ul.cute li:nth-of-type(10n+9)::before { background: #000; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px #000; }
ul.cute li:nth-of-type(10n)::before { background: transparent; border: 2px dashed #f44; border-radius: 0; }
ul.cute.reverse li:nth-last-of-type(10n+1)::before { background: #f44; }
/* repeat reverse for all 10 */
```

**Chalkboard texture with inset shadow**
```css
.chalkboard {
  background: var(--black-texture); color: var(--white2);
  border-style: inset; border-color: var(--black);
  --shadow-color: 0deg 0% 9%;
  box-shadow: 1px 1px 3px hsl(0deg 0% 9% / 0.74) inset,
              2.1px 2.1px 5px -1.5px hsl(0deg 0% 9% / 0.57) inset,
              7.8px 7.8px 12px -3px hsl(0deg 0% 9% / 0.41) inset;
}
```

**Alias icon system with content: var()**
```css
.alias { height: 1em; width: auto; object-fit: contain; content: var(--alias); transform: translateY(0.25ch) scale(1.2); margin-left: 0.25ch; margin-right: 0.55ch; display: inline-block !important; }
.alias.confidante { --alias: url("/assets/alias/confidante.png"); }
.alias.green { --alias: url("/assets/alias/green.png"); }
.alias.blue { --alias: url("/assets/alias/blue.png"); }
.alias.red { --alias: url("/assets/alias/red.png"); }
.alias.pink { --alias: url("/assets/alias/pink.png"); }
```

**Custom tooltip with multi-drop-shadow**
```css
#s-m-t-tooltip {
  max-width: 50svw; z-index: 99999;
  margin: -49px 14px 7px 21px;
  padding: 0.75ch 1ch 1ch;
  background: rgba(var(--tooltip-rgb), 0.88);
  border-radius: 1em;
  border: 0.1ch dashed var(--white);
  outline: 0.33ch solid var(--tooltip);
  filter: drop-shadow(rgba(0,0,0,0.07) 2.8px 2.8px 0.5px)
          drop-shadow(rgba(0,0,0,0.05) 4.4px 4.4px 1.1px)
          drop-shadow(rgba(0,0,0,0.05) 6.7px 6.7px 2.2px);
  font-family: var(--body-font);
  font-size: 0.75em;
  color: var(--white2);
  text-align: center;
}
```

**Breadcrumb with auto-capitalize and ::after**
```css
p#breadcrumb {
  text-transform: capitalize;
  font-size: 0.95em;
}
p#breadcrumb a:last-of-type { display: contents; color: inherit; pointer-events: none; }
p#breadcrumb a + a::before { content: ""; display: inline-block; width: 0.6em; height: 0.6em; background: conic-gradient(var(--accent1), var(--accent2), var(--accent1)); margin: 0 0.5ch; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
```

**Footer span separator with ::after**
```css
footer span:not(:last-child)::after { content: ""; display: inline-block; width: 0.4em; height: 0.4em; background: var(--accent1); border-radius: 50%; margin: 0 1ch; vertical-align: middle; }
```

**Custom scrollbar per container (not just global)**
```css
body::-webkit-scrollbar { width: 1rem; height: 1rem; outline: dotted 0.1rem; }
body::-webkit-scrollbar-button:single-button { height: 1rem; width: 1rem; background-image: var(--scrollbar-button); background-position: center center; background-size: 75%; background-repeat: no-repeat !important; }
body::-webkit-scrollbar-track { background: var(--scrollbar-track); }
body::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); }
.hugme::-webkit-scrollbar-thumb { background: var(--red-texture); border-color: var(--red); border-radius: 0.1rem; }
```

**Hover-reveal cursor with 3 variants**
```css
html { cursor: url("/assets/cursor.ico") 2 5, auto; }
a, button, details summary, [popovertarget], [onclick] { cursor: url("/assets/cursor_4a.ico") 2 5, pointer; }
textarea, input[type="text"] { cursor: url("/assets/cursor_3.ico"), text; }
```

### From Skyweaver!! (169-line CSS glassmorphism master)

**Glass button with multi-layer box-shadow + backdrop-filter**
```css
.btn {
  padding: 6px 12px; gap: 4px;
  background: linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.434) 49%, rgba(255,255,255,0.0062) 50%, rgba(255,255,255,0.434) 100%), rgba(205,238,246,0.5);
  box-shadow: rgba(0,0,0,0.47) 0px 1px 6px, rgba(255,255,255,0.7) 0px 1px 4px inset;
  backdrop-filter: blur(10px);
  border-radius: 4px;
  width: fit-content;
}
.btn:hover { box-shadow: rgba(0,0,0,0.47) 0px 2px 8px, rgba(255,255,255,0.9) 0px 2px 4px inset; }
.btn:active { box-shadow: rgba(0,0,0,0.47) 0px 1px 3.38659px inset; }
```

**CSS-only aside toggle on mobile**
```css
@keyframes open { 0% { left: -301px; } 100% { left: 0px; } }
@keyframes close { 0% { left: 0px; } 100% { left: -301px; } }
#aside_check { display: none; }
#aside_check:checked + #aside { left: 0px; animation: open 0.15s ease-out; }
#aside_check:not(:checked) + #aside { left: -100%; animation: close 0.15s ease-out; }
```

**Nav hover letter-spacing transition**
```css
nav li a { text-decoration: none; letter-spacing: normal; transition: 0.15s ease-out; padding: 8px 16px; display: block; }
nav li a:hover { letter-spacing: 2px; transition: 0.15s ease-out; }
```

**::before navigation prefix**
```css
nav li a::before { content: ":: "; }
nav li a.backbtn::before { content: "← "; }
```

**Current page indicator with gradient**
```css
.current_page { background: linear-gradient(90deg, rgba(255,255,255,0.725), rgba(255,255,255,0.192) 50%); }
```

**Divider with gradient border-image**
```css
nav hr {
  box-shadow: rgba(11,31,85,0.224) 0px 1px 2px;
  border: none;
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgb(214,239,253) 50%, rgba(255,255,255,0.1) 100%) 1 / 1 / 0 stretch;
}
```

**Monitor/status box with ::before glass frame**
```css
.monitor {
  background: linear-gradient(160.14deg, rgba(255,255,255,0.5) 11.91%, rgba(255,255,255,0.2) 46.3%, rgba(255,255,255,0.01) 47.27%, rgba(255,255,255,0.2) 87.14%), url("noise.png"), linear-gradient(rgb(197,225,204) 0%, rgb(168,199,184) 100%);
  box-shadow: rgba(0,0,0,0.6) 0px 1px 8px, rgb(41,85,76) 0px 0px 21px inset;
  backdrop-filter: blur(9px);
  border-radius: 4px;
  height: var(--bannerheight);
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.monitor::before {
  position: absolute; inset: 0px; z-index: -1;
  border: 8px solid rgba(0,0,0,0); border-radius: 4px;
  background: linear-gradient(rgb(252,252,252), rgb(226,229,230)) border-box border-box;
  --lyr: conic-gradient(red 0 0);
  mask: var(--lyr) padding-box exclude, var(--lyr);
  content: "";
}
```

**Notebook style with filter drop-shadow**
```css
.note {
  background: url("notebook.jpg");
  padding: 12px 16px;
  box-shadow: rgba(255,255,255,0.7) 0px 1px 4px inset;
  filter: drop-shadow(rgba(0,0,0,0.5) 0px 1px 4px);
}
.note * { font-size: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem); font-family: patrick-hand, cursive; margin: 0px; }
```

### From theabsoluterealm (46 KB, 5 audio sprites, 22+ webrings)

**Multi-layer parallax space background**
```css
/* Two divs animated at different speeds for depth */
.spacebg { animation: backgroundScroll 15s linear reverse infinite; }
.spacebg2 { animation: backgroundScroll2 25s linear reverse infinite; }
@keyframes backgroundScroll { 0% { transform: translate(0,0); } 100% { transform: translate(-100%,-100%); } }
@keyframes backgroundScroll2 { 0% { transform: translate(0,0); } 100% { transform: translate(100%,100%); } }
```

**Earthbound border table system with corner markers**
```css
.earthbtble {
  border-width: 27px; border-style: solid; border-color: transparent;
  border-image: url("eb-frame.gif") 27 / 9px / 0 stretch;
  background: rgba(0,0,0,0.6); color: #fff; padding: 16px;
}
.earthbtbleMarker { position: relative; }
.earthbtbleMarker div {
  position: absolute; bottom: -20px; width: 20px; height: 20px;
  background: #000; transform: rotate(45deg);
  border: 2px solid #fff;
}
```

**22+ webrings in sidebar (nested grid)**
```html
<div class="webring">
  <table><tr>
    <td class="webring-prev"><a href="...">&lt;&lt;</a></td>
    <td class="webring-info"><a href="...">ring name</a><br><span class="webring-links"><a>?</a> | <a href="...">list</a> | <a href="...">!</a></span></td>
    <td class="webring-next"><a href="...">&gt;&gt;</a></td>
  </tr></table>
</div>
```

**Logo animation with cubic-bezier entrance**
```css
header div { animation: logoIn 2s cubic-bezier(0.25, 0.1, 0, 1); }
@keyframes logoIn { 0% { transform: scale(0) rotate(-10deg); opacity: 0; } 100% { transform: scale(1) rotate(0deg); opacity: 1; } }
```

**Caution stripes decoration**
```css
.caution img { width: 400px; image-rendering: pixelated; }
/* Used as separator strips between nav sections */
```

**Marquee for currently listening**
```html
<marquee id="currentlylistening">LAST SONG PLAYED</marquee>
```
```js
// Updates via last.fm API
fetch('https://lastfm-last-played.biancarosa.com.br/YOU/latest-song')
  .then(function(r){ return r.json(); })
  .then(function(d){
    if (d && d.track) {
      document.getElementById('currentlylistening').textContent = d.track.name + ' — ' + d.track.artist;
    }
  });
```

**Secret URL click through for nav**
```html
<a class="btn-link" data-url="CoolStuff/" id="coolStuff" tabindex="0">
```
```js
document.querySelectorAll('.btn-link').forEach(function(el) {
  el.addEventListener('click', function() {
    window.location.href = this.getAttribute('data-url');
  });
});
```

**Font stack with Google Fonts + Shantell Sans**
```css
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');
:root { --body-font: 'Shantell Sans', cursive; }
```

**Custom cursor per element type (3 variants)**
```css
img[alt="..."] { cursor: url("pointer.png"), auto; }
.questionable { cursor: url("help.gif"), auto; }
```

**Wii Ring web component (custom element)**
```html
<wii-ring site="https://mysite.com">
  <!-- shadow DOM with prev/next/random navigation, Mii image -->
</wii-ring>
```
Uses a custom web component with shadow DOM for the ring navigation.

### From scripted's Cursor Collection (32 cursors)

```css
/* System: 32 cursor images as CSS custom properties applied via classes */
.cursor-default { cursor: url('cursors/default.cur'), auto; }
.cursor-pointer { cursor: url('cursors/pointer.cur'), auto; }
.cursor-text { cursor: url('cursors/text.cur'), auto; }
.cursor-wait { cursor: url('cursors/wait.cur'), auto; }
.cursor-help { cursor: url('cursors/help.cur'), auto; }
.cursor-crosshair { cursor: url('cursors/crosshair.cur'), auto; }
.cursor-move { cursor: url('cursors/move.cur'), auto; }
.cursor-grab { cursor: url('cursors/grab.cur'), auto; }
/* repeat for all 32 cursors — includes animated .ani files too */
```

### From Welcome to the Astertrails! (8 CSS files, 41 KB)

**Pet system with CSS animations**
```css
.pet { animation: petBounce 0.5s ease infinite alternate; }
@keyframes petBounce { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }
.pet:hover { animation: petSpin 0.5s ease; }
@keyframes petSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
```

---

## MAXIMALIST COMBINATION RECIPES

These show how to layer 5+ techniques on ONE selector.

### Recipe 1: The "Everything Heading"
```css
h1 {
  /* Font setup */
  font-family: "Impact", sans-serif;
  font-size: clamp(2rem, 5vw, 5rem);
  text-transform: uppercase;
  letter-spacing: 4px;

  /* Gradient text fill + animated */
  background: linear-gradient(-225deg, #ff1493, #7cfc00, #0ff, #ff1493);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;

  /* 16-direction outline */
  --w: 0.04em;
  text-shadow: calc(var(--w)*1) calc(var(--w)*0) 0 #000,
               calc(var(--w)*0.9239) calc(var(--w)*0.3827) 0 #000,
               calc(var(--w)*0.7071) calc(var(--w)*0.7071) 0 #000,
               calc(var(--w)*0.3827) calc(var(--w)*0.9239) 0 #000,
               calc(var(--w)*0) calc(var(--w)*1) 0 #000,
               calc(var(--w)*-0.3827) calc(var(--w)*0.9239) 0 #000,
               calc(var(--w)*-0.7071) calc(var(--w)*0.7071) 0 #000,
               calc(var(--w)*-0.9239) calc(var(--w)*0.3827) 0 #000,
               calc(var(--w)*-1) calc(var(--w)*0) 0 #000,
               calc(var(--w)*-0.9239) calc(var(--w)*-0.3827) 0 #000,
               calc(var(--w)*-0.7071) calc(var(--w)*-0.7071) 0 #000,
               calc(var(--w)*-0.3827) calc(var(--w)*-0.9239) 0 #000,
               calc(var(--w)*0) calc(var(--w)*-1) 0 #000,
               calc(var(--w)*0.3827) calc(var(--w)*-0.9239) 0 #000,
               calc(var(--w)*0.7071) calc(var(--w)*-0.7071) 0 #000,
               calc(var(--w)*0.9239) calc(var(--w)*-0.3827) 0 #000;

  /* Sticker border decoration */
  border: 2px dashed #ff1493;
  outline: 3px solid #7cfc00;
  outline-offset: -0.4em;
  padding: 0.4em 0.6em;

  /* Drop-shadow glow */
  filter: drop-shadow(0 0 3px rgba(255,20,147,0.3));

  /* ::before wing */
  &::before { content: ""; width: 0.6em; height: 0.6em; margin-right: 0.3em; display: inline-block; background: conic-gradient(var(--accent1), var(--accent2), var(--accent1)); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); animation: spin 4s linear infinite; }
  /* ::after wing */
  &::after { content: ""; width: 0.6em; height: 0.6em; margin-left: 0.3em; display: inline-block; background: conic-gradient(var(--accent2), var(--accent1), var(--accent2)); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); animation: spin 4s linear infinite reverse; }

  /* Hover wiggle */
  &:hover { animation: wiggle 0.3s ease; }

  /* Hue-rotate on hover */
  &:hover { filter: drop-shadow(0 0 3px rgba(255,20,147,0.3)) hue-rotate(90deg); }
}

/* = 16 techniques on ONE selector */
```

### Recipe 2: The "Sticker Card" (8 techniques)
```css
.sticker-card {
  /* Stamp border */
  --radius: .2em;
  background-image: radial-gradient(var(--radius), transparent 98%, white), linear-gradient(white 0 0);
  background-repeat: round, no-repeat;
  background-position: calc(var(--radius)*-1.5) calc(var(--radius)*-1.5), 50%;
  background-size: calc(var(--radius)*3) calc(var(--radius)*3), calc(100% - var(--radius)*3) calc(100% - var(--radius)*3);
  padding: 1.5em;

  /* Multi-drop-shadow glow */
  filter: drop-shadow(0 0 1px #ff1493) drop-shadow(0 0 0 #ff1493) drop-shadow(0 0 1px #ff1493) drop-shadow(0 0 1px #ff1493) drop-shadow(2px 2px 0 rgba(0,0,0,0.2));

  /* Sticker pseudo-elements */
  position: relative;
  &::before { content: ""; position: absolute; top: -5px; left: -5px; right: -5px; bottom: -5px; border: 2px dashed #ff1493; pointer-events: none; border-radius: 4px; }
  &::after { content: ""; position: absolute; width: 10px; height: 10px; background: #ff1493; border-radius: 50%; top: -4px; right: -4px; }

  /* Negative outline-offset notch */
  outline: 2px dashed transparent;
  outline-offset: -0.5em;

  /* Pride underline on heading inside */
  & h2 { background-image: linear-gradient(to right, rgb(85,205,252), rgb(179,157,233), rgb(247,168,184), white, rgb(247,168,184), rgb(179,157,233), rgb(85,205,252)); background-repeat: no-repeat; background-position: right 0px bottom -1px; background-size: 100% 4px; display: inline-block; }

  /* Hue-rotate hover on whole card */
  transition: filter 0.3s;
  &:hover { animation: huecycle 1s linear infinite; }
}

/* = 9 techniques on ONE selector, plus all inner content */
```

### Recipe 3: The "Desktop Button" (Skyweaver-style glass)
```css
.glass-btn {
  /* Glass backdrop */
  background: linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.434) 49%, rgba(255,255,255,0.0062) 50%, rgba(255,255,255,0.434) 100%), rgba(205,238,246,0.5);
  backdrop-filter: blur(10px);
  border-radius: 4px;

  /* Multi-box-shadow (resting) */
  box-shadow: rgba(0,0,0,0.47) 0px 1px 6px, rgba(255,255,255,0.7) 0px 1px 4px inset;

  /* Clip-path flag shape */
  clip-path: polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%);
  padding: 8px 20px 8px 12px;

  /* Hover state with additional effects */
  &:hover {
    box-shadow: rgba(0,0,0,0.47) 0px 2px 8px, rgba(255,255,255,0.9) 0px 2px 4px inset;
    letter-spacing: 1px;
    transition: 0.15s ease-out;
  }

  /* ::before icon */
  &::before { content: ""; display: inline-block; width: 0.5em; height: 0.5em; margin-right: 0.3em; background: var(--accent1); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
}

/* = 8 techniques on ONE selector */
```

---

## PAGES REAL SITES HAVE

Pick 3-8. Make each one a DIFFERENT layout than the others.

- Index — portal, marquee, updates, status, rotating h1, secret zone
- About — table, tags, likes/dislikes, texture sections, sticker decorations
- Diary — lined/grid/dot paper, 7-theme switcher, archive, mood tracker
- Links — 88x31 wall, categories, webrings, textarea for code, link-table
- Shrine — tiled bg, rankings, obsessive detail, sticker wall, color texture
- Gallery — polaroid, slideshow, hover grid, fancybox, floating images
- Guestbook — atabook embed, guest comments
- Desktop — OS windows, dial spin, audio sprites, clock, status
- Sitemap — nested list of everything, clickable hex map
- Resources — fonts, tools, tutorials, link-table
- Fanlistings — fan clubs joined
- Now — what you're doing, last.fm integration, mood
- Media log — books, movies, music
- Photos — photography grid
- Recipes — food you make
- Quizzes — personality test results

---

## FONT REPERTORY (REAL FONTS FROM REFERENCE SITES)

LLMs hallucinate font names. Only use fonts below — these are verified from `@font-face` declarations and Google Fonts imports on 83 real indie web sites. Never invent a font name.

### SELF-HOSTED INDIE FONTS (most common on Neocities)

**Pixel / Bitmap / Retro:**
- pixelari, sysfont, pixifont, pixtalic, zpix, PixelMplus10, PixelJP, pixelbody, pixelpirate, pixelgamer, pixelverdana, helvetipixel, Pokemon Classic, Early Gameboy, Minecraftia, NintendoDS, dos-ank30, ank24, F25 Bank Printer, xga, nec, nec2, unifont, bitcount, ipix, Dot, tickerbit, vcr, vcr_osd_monoregular, terminal, font98, Win95, mssans, mssans-pixel, Pixelated MS Sans Serif, MS Gothic, MS PGothic, ms mincho, Pixel Operator, PvzUI, GMaru

**Handwritten / Marker / Crayon:**
- alagard, baubau, bristol, bubblicious, bubbleboy, christana, corgared, frugral crayon, frugral fantasy mono, halloween night, jimmy script, milky, milkywell, morningtea, national park, patrick-hand, phorfeir, phorfeis, quaker shaker, rainbowy, romancea, savate, savateitalic, spray, stampwriter, starife, toywritermop, toywritermopdrip, wobbly, Tanuki Permanent Marker, Yomogi, Yurumoji, delius, mibandamanda, balsamiq regular/bold/bolditalic

**Gothic / Horror / Spooky:**
- gothicpixels, gothique, neoclassicalgoth, neoclassicalgothmelty, neoclassicalgothslim, black flag, blkmetal, BlackNebula, bluunext, boriskarloff, chaos madness, chaos madness italic, Crypt, cyclops, DIEDIEDIE, gnarly bone, gnarly bone black, halloween night, hanged, kamisori, kamisoritalic, kelsifill, kelsioutline, kronika, lastpriestess, lostina, mystery, panic, poisongum, spooky frights, textura, druckers, trickster, zombie, badloc, cistercian

**Display / Decorative / Groovy:**
- argentpixel, Ashven, astrii, aurora, avigea, avigea italic, babydoll, bangalore, bangkitkan bangsa, barkdones, basiic, batang, battlenet, belerofonte, bingo, birdy, bisque, bodedo, bold, brokenFamily, captainp, caran, career, celluloid1, celluloid2, cetary, cherryswash, cherryswash bold, Cherish, chewy, chrysuni, Cinetype, circulate, claudae, clayo, codex, coffeebutter, contb, corak, cristone, damsterdam, daydream, Debussy, Determination, distro, doge sans, domitian, dorisorange regular/medium/juicy, dpcom, ds font, dsbios, el mariachi, erika, erotique/erotiqueregular/erotique2bold/erotique2regular, evol, faedahnya, fancyballoons, fangzheng-pixel, fantastic rock, fizzy soda, forgotten junk, fredella, frosty fizz, ft88 extended, ft88serif, funnytype, gabriele, geo, giygas, gomarice rocks, goudy, gravity, heatizen, hidalgo, honeb, honeu, hour, hs-courier, hs-sans, hs-serif, hypik, IBM, igari, imfell, iperion, jawbhard, jogan, jua, kare, keawneta, kirom, kishimen, knewave, kochi, kochi l3nzy, Koulen, kuficology unica, LAKERG, lamphor one/two/three, legacy, lexend, LOVING IS EASY, madamoiselle, Magic Land, MANOLETE, mario, milky, mirage, momstype, Montel, Montserrat, Montserrat-Bold, MOONRUNE, Motivate, much too loud, myNimbusRomanNo9L, nationalyze, neuropol, neuropolbold, oldnewspaper, paganini, pandub, phorfeir, pillowlava, pink fresh, planetestyle, plastic, polyester, popmagic, positions, poster, poster Clean, pretoria, prime, priprifugring, priprifugringitalic, protorca, psyche, psychohacker, quickend, Rainy, relmond, santacruze, sepura, SF Telegraphic Light, sga, sixtwonine, skygraze, sligoil, sorikomisans, sorikomisansitalic, Space Age, spacemono, spirit, spratblack/spratbold/spratextblack/spratextbold, subaru, super onigiri, superbolt, surfism1, surfism2, teknrn, telegraphem, thicknib, tiny, title, tommy, tuberoot, typer, typerdecal, Typewriter, venice, venice classic, veterantype, vhs, virale, voxel, water resist, werbedeutsch, willow, winter school, yoster, zara, zero, ZorpSans

**Serif / Classical:**
- basteleur, feiwelles, IBM Plex Serif, Bonbon, Miniver, imfell, goudy, Palatino, domitian, compagnon, compagnon bold/light/roman, oldnewspaper, spratblack/spratbold/spratextblack/spratextbold, ft88serif

**Mono / Code:**
- Courier Prime, Courier Prime bold/italic/bolditalic, inconsolata, Source Code Pro, spacemono, PT Mono, Cutive Mono, Chivo Mono, terminus, Consolas, Ubuntu Mono, zpix

**Icon / Symbol / Dingbat:**
- cdicon, iconbitone, iconbittwo, typicons, emoji, emojifont, mamemoji, Bodoni Ornaments ITC, CodersCrux, font98, verified_icon

### GOOGLE FONTS VERIFIED ON REFERENCE SITES

Import these — they're actually used, not guessed:
- Aldrich, BioRhyme, Chango, Chewy, Chivo, Chivo Mono, Cinzel, Cormorant Garamond, Courier Prime, Crimson Text, Cutive Mono, DM Sans, Droid Sans, Eagle Lake, Exo 2, Grandstander, IBM Plex Sans, IBM Plex Serif, Inconsolata, Itim, Jost, Karla, Krona One, Kumbh Sans, Libre Barcode 39, Maven Pro, Miniver, Nothing You Could Do, Nunito, Palanquin, Poppins, Press Start 2P, PT Mono, Questrial, Roboto, Roboto Slab, Rock Salt, Sanchez, Shantell Sans, Silkscreen, Source Code Pro, Stint Ultra Expanded, UnifrakturCook, Zen Dots

### COMMON SYSTEM-FONT FALLBACKS (used by real sites)

Comic Sans MS, MS Gothic, MS PGothic, Arial, Courier New, Georgia, Times New Roman, Palatino, Consolas, Lucida Console

### HOW TO USE

Pick 2-3 fonts per site (one display title, one body, one accent). Layer `@font-face` with local font files in `/fonts/` for self-hosted. Use Google Fonts `@import` for the rest. Never use more than 4 fonts per page — indie sites cram techniques, not font families.

**Font randomization**: For each site, roll randomly:
- **Title font**: pick from Pixel/Bitmap or Display/Decorative lists (avoid Impact, Bebas Neue)
- **Body font**: pick from Serif, Mono, or system fonts (avoid Verdana, Arial, Bebas Neue)
- **Accent font**: pick from Handwritten, Gothic, or Icon lists (avoid Georgia, Bebas Neue)
- Never use Impact/Georgia/Verdana/Bebas Neue as a quartet. If one slips in, the other two must be from unusual categories (e.g. Impact title + Handwritten body + Mono accent).

**Thematic coherence**: Every page of a multi-page site must be generated by ONE subagent in a single session. No parallel subagenting per page — the layout, color palette, font choices, and decorative motifs must carry across all pages consistently.

---

## MISSING PATTERNS FROM REAL SITES

### Border styles beyond solid/dashed
Real sites use: `ridge` (Astertrails: `5px ridge hotpink`), `groove` (Astertrails: `groove rgb(255,109,185)`), `dotted` (vinizone: `dotted #999`), `double` (VIVARISM: `4px double var(--green)`), `inset` (CALL NOW: `border-style: inset`), `outset` (EGGRAMEN: `hr { border-style: none none outset; }`). Don't default to solid.

### Layout techniques beyond grid/flexbox
- Table-cell layout for side-by-side sections (`display: table-cell; vertical-align: middle`)
- CSS columns for masonry-like text (`column-width: 400px` or `column-count: 3`)
- Checkbox-hack for CSS-only toggles (hamburger menu, theme toggle)
- Image-based navigation (`<a><img>` for nav buttons)

### Pseudo-element image decoration
`::before`/`::after` with `background-image: url()` or `content: url()` for sticker art, bullet icons, divider images — not just `content: "text"`. Example: VIVARISM uses sticker PNGs as `::before` decorations. CALL NOW uses `content: url("/assets/graphics/bullets/clover_0o.gif")` on `::after`.

### clip-path for non-flag shapes
`clip-path: polygon()` for arrow-shaped buttons, notched cards. CALL NOW: `.btn { clip-path: polygon(89% 0px, 100% 24%, 100% 100%, 0px 100%, 0px 0px); }` — creates arrow/chevron shapes.

### list-style-image
`list-style-image: url("/assets/graphics/bullets/point.gif")` for custom bullet icons. Don't use emoji or CSS counters for bullets.

### background-blend-mode
`background-blend-mode: color-burn`, `hard-light`, `multiply` on body or elements with multiple backgrounds. CALL NOW uses `background-blend-mode: color-burn` on body with `background-image`.

### CSS nesting
Modern CSS nesting: `p { & b { font-weight: 500; } & a { color: var(--linkcolor); } }` — no preprocessor needed. Skyweaver uses this throughout.

### clamp() for responsive typography
`font-size: clamp(0.875rem, 0.8239rem + 0.2273vw, 1rem);` — fluid font sizing between min and max. More elegant than media queries for font sizes.

### min() / max() functions
`width: min(90%, 720px);` — CSS min/max for responsive sizing. psychic newborn uses min() for video embeds.

### aspect-ratio
`aspect-ratio: 16 / 9;` — maintain aspect ratio without padding-top hack. psychic newborn uses this for video embeds.

### filter: drop-shadow for outline/glow
Multiple drop-shadows create outline and glow effects: `.outline:hover { filter: drop-shadow(white 1px 0) drop-shadow(white -1px 0) drop-shadow(white 0 1px) drop-shadow(white 0 -1px); }` — 4-direction outline. Also `.glow:hover { filter: drop-shadow(rgba(255,255,255,0.7) 0 0 4px) ...; }` — glow effect.

### animation-direction
`animation-direction: reverse;` — plays animation backwards. `animation-direction: alternate;` — alternates direction each iteration. psychic newborn uses both for spin/counterspin and tilt effects.

### mask property
`mask: var(--lyr) padding-box exclude, var(--lyr);` — CSS masking for complex shapes. Skyweaver uses it with `conic-gradient` for gradient borders on `.monitor::before`.

### conic-gradient
`conic-gradient(red 0 0)` — used with mask for gradient borders. Not the same as linear/radial-gradient.

### Noise texture overlay
`background: url("noise.png"), rgba(205, 238, 246, 0.8);` — layer a noise PNG over a semi-transparent color for texture. Common in glassmorphism.

### border-image with gradient
`border-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgb(214,239,253) 50%, rgba(255,255,255,0.1) 100%) 1 / 1 / 0 stretch;` — gradient as border, not just url() images.

### filter: grayscale
`filter: grayscale(1)` for disabled/inactive states. CALL NOW: `.inactive { filter: grayscale(1); }`. Also `filter: brightness(125%)` for hover brightening (Graymin Gardens). Also `filter: saturate(125%)` for color intensity on active states (Snew).

### border-image
`border-image: url("frame.png") 10 / 1 / 0 round` — uses an image as the border. cinni uses it for decorative frames around content sections. Graymin Gardens uses base64 data URIs: `border-image: url("data:image/png;base64,...") 14 / 14px / 0 round`.

### @media (orientation: portrait)
`@media (orientation: portrait) { ... }` — different from max-width, uses device orientation. Graymin Gardens uses this for responsive layout.

### position: sticky
`position: sticky; top: 0;` — element sticks to viewport while scrolling. 14.4ml uses it for page titles that stay visible as you scroll content.

### letter-spacing
`letter-spacing: 3px;` — adjust spacing between characters. Used for decorative header text and nav links.

### mix-blend-mode: multiply
`mix-blend-mode: multiply;` — blend element with background by multiplying colors (darkens). 14.4ml uses it for semi-transparent hover text that blends into background imagery.

### outline shorthand
`outline: white double 3px;` — simpler than `outline-width`, `outline-style`, `outline-color`. psychic newborn: `.secare { outline: white double 3px; }`.

### min() / max() functions
`width: min(90%, 720px);` — CSS min/max for responsive sizing. psychic newborn uses min() for video embeds.

### CSS counters
`counter-reset: sidenote-counter 0;` on parent, `counter-increment: sidenote-counter 1;` on items, `content: counter(sidenote-counter);` in `::after`/`::before`. suboptimalism uses this for numbered sidenotes.

### Animated background scrolling
`@keyframes bg-scrolling { 0% { background-position: 150px 0, -150px 150px, -300px -150px; } }` — animate `background-position` for infinite scrolling texture effect. suboptimalism uses this with multiple tiled background images.

### break-inside: avoid
`break-inside: avoid;` — prevent elements from splitting across column breaks. Used with CSS multi-column layout.

### @media (orientation: landscape)
`@media (orientation: landscape) { ... }` — separate from portrait media query. suboptimalism uses both orientation queries for different layouts.

### flex-shrink
`flex-shrink: 50;` — control how much a flex item shrinks relative to others. suboptimalism uses it for caption panels.

### height: max-content
`height: max-content;` — element height matches its content height. suboptimalism uses it for caption panels.

### filter: invert()
`filter: invert(5%);` — subtle color inversion on hover. suboptimalism: `.index a:hover { filter: invert(5%); }`.

### filter: brightness() contrast()
Combined brightness and contrast: `.dark { filter: brightness(0.6) contrast(1.3); }` — darken + increase contrast for dark mode overlay.

### margin-inline / padding-inline-start
Logical properties: `margin-inline: 0;`, `padding-inline-start: 5%;` — direction-agnostic equivalents of margin-left/right and padding-left.

### :target for lightbox/modal
`.lightbox:target { position: fixed; inset: 0; display: grid; place-items: center; background: var(--bg1); z-index: 100; }` — CSS-only lightbox/modal using `:target` selector. No JavaScript needed. sweetfish.site uses this for image lightbox.

### inset shorthand
`inset: 0;` — shorthand for `top: 0; right: 0; bottom: 0; left: 0;`. Used with `position: fixed` for full-viewport overlays.

### grid-auto-flow: dense
`grid-auto-flow: dense;` — fill gaps in grid by pulling items forward. sweetfish.site uses this for image galleries.

### text-decoration-thickness
`text-decoration-thickness: 1px;` — control underline thickness. sweetfish.site: `.header li a:hover { text-decoration-thickness: 1px; }`.

### flex-basis
`flex-basis: 20%;` — initial main-size of flex item before grow/shrink. sweetfish.site: `.header .home { flex-basis: 20%; }`.

### object-fit / object-position
`object-fit: cover; object-position: 50% 0%;` — control how replaced elements (img, video) fit their container. sweetfish.site uses this for cropped thumbnails.

### Attribute selectors for link styling
`a[href*="//"]::after { content: ""; }` — target external links by href pattern. sweetfish.site uses this to add visual indicators to external links.

### q::before, q::after { content: none }
Remove default quotation marks from `<q>` elements.

### @media (min-width: ...) — desktop-first
`@media (min-width: 768px) { ... }` — desktop-first media query, opposite of max-width. sweetfish.site uses both min-width and max-width queries.

### @import url()
`@import url("/styles/themes/colors/default.css");` — load external CSS files. HEARTSPACE uses this extensively across 35 CSS files. Also valid for loading Google Fonts.

### text-transform
`text-transform: uppercase;` — convert text to uppercase. Also `lowercase`, `capitalize`. HEARTSPACE: `h2, h3, h4, h5, h6 { text-transform: uppercase; }`.

### External link indicators via attribute selectors
`a[target="_blank"]::after { content: " ↗"; }` — indicate external links. HEARTSPACE: `a[target="_blank"]::after { content: " ⤤"; font-size: 0.6em; }`. Also sweetfish: `a[href*="//"]::after { content: ""; }`.

### Hidden text for accessibility
`font-size: 1px;` — hide text visually while keeping it accessible. HEARTSPACE uses this for theme switcher buttons with transparent color.

### Gradient text
`background: linear-gradient(90deg, white 15%, transparent 75%) text; -webkit-text-fill-color: transparent;` — create gradient text. beanbottles uses this for link labels.

### animation-fill-mode
`animation-fill-mode: forwards;` — keep element at animation end state after it finishes. `backwards` applies first keyframe during delay. `both` combines both.

### color-scheme: revert
`color-scheme: revert;` — reset color scheme to browser default. beanbottles uses this as a CSS reset pattern with `revert` keyword on many properties.

### Box-shadow glow matching background
`box-shadow: rgb(196,196,196) 0 0 4px;` — use same color as background for subtle glow. Transitions to `box-shadow: white 0 0 4px` on hover.

### White-space CSS functions
`gap: 0.25rem;` — CSS `gap` for consistent spacing between flex/grid items. leith's site uses this in team links.

### Fixed positioning
`position: fixed; right: 0px; top: 0px; z-index: 1000;` — fixed positioned element at top-right corner with high stack order. Used for sidebars, settings, or overlays.

### Flexbox centering
`display: flex; justify-content: center; align-items: center;` — center child elements both horizontally and vertically in a flex container. leith's site: `#catfolk-webring { display: flex; justify-content: center; align-items: center; }`.

### Tailwind-like CSS custom properties
`.text-shadow: 0px 0px 0px, grey 0px 0px 3px;` — stacked text-shadows for soft glow effect. STROVI.ART uses this for text with 3px grey blur.

### Gradient backgrounds
`background-image: url("flair/collage.png"); background-repeat: repeat; background-position: center center;` — use PNG texture as repeating background. STROVI.ART uses multiple collage images.

### Font size in relative units
`font-size: 0.85em; font-size: 1em;` — relative font sizing with em units for responsive hierarchy. leith's site and STROVI.ART use this.

### Table display property
`display: table;` — layout element as table. leith's site uses this for webring navigation.

### Text-align variations
`text-align: left; text-align: right; text-align: center;` — horizontal text alignment. Common in real sites for menus, info sections.

### Overflow and sizing shortcuts
`max-width: 90px; max-height: 90px; width: fit-content;` — constrain while respecting content. STROVI.ART uses width: fit-content.

### SVG icon sizing
`height: 0.85em;` — size icons relative to font-size of parent element (commonly 1em). Enables scaling with text.

### Nested CSS selectors
`.side a:hover { text-decoration: underline; color: grey; }` — STROVI.ART uses `.side a:hover` for hover styles on navigation sidebar.

### CSS comment syntax
`/* table cell padding: 5px; border: medium; */` — traditional CSS comments for documenting styles.

### user-agent stylesheet reset
`border: medium;` — browser default border width. Normalized to explicit `border-width: medium;`.

### Box-sizing reset
`box-sizing: border-box;` — include padding/borders in width calculations. leith's site uses this extensively.

### Position sticky for header sidebar
`position: sticky; margin: 0px auto;` — STROVI.ART uses position: sticky on sidebar elements for fixed navigation while scrolling.

### Text-shadow with calc()
`text-shadow: calc(0.05em * 1) calc(0.05em * 0) 0 rgb(124,252,0), ...;` — use CSS calc() in text-shadow for complex shadow patterns. calc(0.05em *1) = 0.05em.

### Color functions
`hsl(352,57%,63%); hsl(19,64%,63%);` — HSL color notation instead of hex. VIVARISM 3.0 uses HSL with custom properties for theme colors.

### ch units in shadows
`text-shadow: 0.11ch 0.12ch 0.066ch;` — use ch units for font-relative text-shadow distances. Useful for responsive shadow sizing.

### Multi-color backgrounds
`background: linear-gradient(90deg, white 15%, transparent 75%) text;` — gradient text effect. See `background: url("noise.png"), rgba(205,238,246,0.8);` for layered backgrounds.

### Font-display variants
`font-display: fallback; font-display: swap; font-display: optional;` — control when custom fonts load. CALL NOW uses font-display: swap.

### Linear-gradient on borders
`border-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgb(214,239,253) 50%, rgba(255,255,255,0.1) 100%) 1 / 1 / 0 stretch;` — gradient as border.

### Cubic-bezier easing
`animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);` — custom easing for natural bounce/jump effects. Astertrails uses this for pet animation.

### Transform origin
`transform-origin: center bottom;` — set origin point for rotations/scales. Astertrails: `.jump { transform-origin: center bottom; }` for bouncing pet.

### Resize control
`resize: none;` — disable textarea resizing. Astertrails: `textarea#talk { resize: none; }`. Also `resize: vertical;` or `resize: horizontal;`.

### Vertical-align
`vertical-align: middle;` — align inline elements vertically. FABLED uses `vertical-align: middle` in table cells.

### Scrollbar gutter
`scrollbar-gutter: stable;` — reserve space for scrollbar to prevent layout shift. FABLED: `body { scrollbar-gutter: stable; }`.

### Fixed gradient background
`background: linear-gradient(90deg, rgb(253, 26, 86) 0%, ...) fixed;` — gradient background fixed relative to viewport.

### Global transition
`* { transition: 0.2s; }` — apply transition to all elements. Smooths hover effects site-wide.

### Float inline-start
`float: inline-start;` — logical property for float (start of writing direction). FABLED uses on `.eyecatch` and `.recent`.

### Inline SVG in CSS
`background-image: url("data:image/svg+xml,%3Csvg...%3E");` — embed SVG directly in CSS for icons. FABLED uses for select dropdown arrow.

### Animation play state
`.track { animation-play-state: paused; }` — pause running animation. FABLED: `#marquee:hover .track { animation-play-state: paused; }`.

### Aspect ratio with auto
`aspect-ratio: auto 1 / 1;` — combine auto (natural size) with explicit ratio. FABLED uses for album art.

### Multi-background with fallback
`background: url(...) center top no-repeat, url(...) center bottom no-repeat, linear-gradient(...);` — layer images + gradient. If images fail, gradient shows. Astertrails uses this pattern.

### Grid template areas layout
`grid-template-areas: "header header header header header" ". nav main sidebarR ." ...` — named grid areas for complex layouts. Astertrails uses 5-column grid with header/nav/main/sidebarR/sidebarL/footer areas.

### Grid-template shorthand with row heights and column widths
`grid-template: ". nav main updates ." 465px ". linkback main updates ." 220px / 200px 180px 610px 290px 200px;` — combined areas + row heights + column widths in one declaration. PKLucky uses this for a 5-column layout with 3 explicit row heights.

### Hover slide with position relative
`#nav img:hover { position: relative; left: -10px; }` — slide element on hover. Transitions from position relative + left offset.

### Keyframes inside media query
`@media only screen and (max-width: 768px) { @keyframes marquee { ... } }` — redefine animations inside media queries for different behaviors on mobile.

### Vendor-prefixed keyframes
`@-webkit-keyframes blinker { 0% { opacity: 1; } 60% { opacity: 0; } 100% { opacity: 1; } }` — target specific browsers for animation support (Safari/iOS). u n i c o uses both `@-webkit-keyframes` and `@keyframes`.

### Color scheme restriction
`color-scheme: light only;` — force light mode even in dark mode OS setting. u n i c o uses this.

### Negative margins
`margin: 0px -200px 0px -30px;` — negative values for overlapping/adjusting layout. Used with negative margins on html/body for full-width sections.

### Mix-blend-mode darken
`mix-blend-mode: darken;` — darkens underlying content. u n i c o uses `mix-blend-mode: darken` on specific page images.

### Thin scrollbar for framed areas
`scrollbar-width: thin;` on any scrollable container (combined with `overflow: auto`) gives a slim, unobtrusive scrollbar.

### Hide scrollbar entirely
`.noscrollbar::-webkit-scrollbar { display: none; }` — completely hide scrollbar. Also `scrollbar-width: none;` on element itself.

### Hard/flat box-shadow (zero blur)
`box-shadow: Xpx Ypx 0px 0px;` — hard shadow with no blur and no spread. Creates a flat offset shadow like a sticker or cutout.

### Inset white highlight (3D bevel)
`box-shadow: white 0px 1px inset;` — a white 1px inset shadow at the top edge, creating a subtle 3D bevel/highlight on flat colored boxes.

### Bottom drop shadow (no horizontal offset)
`box-shadow: rgba(0, 0, 0, 0.22) 0px 5px;` — shadow falls straight down with zero horizontal offset, creating a subtle floating/raised effect.

### Gradient fade to solid white
`background-image: linear-gradient(to right, rgba(X, Y, Z, A), rgb(255, 255, 255));` — fades from semi-transparent color to solid white using keyword direction.

### Inset frame + outer drop shadow (embossed panel)
`box-shadow: white 0px 0px Spx Spx inset, rgba(0, 0, 0, 0.22) 0px Ypx;` — white inset shadow with `spread` (Spx) and zero offset/blur creates an inner frame/border. Combined with a bottom drop shadow, the element looks like an embossed/recessed panel.

### Gradient header with seamless panel body
Header: `border-radius: Rpx Rpx 0px 0px; background-image: linear-gradient(...);` — body: `border-radius: 0px 0px Rpx Rpx;` — rounding only top corners of the header and only bottom corners of the body creates a seamless joined panel. The header gradient flows directly into the solid body below.

### Colored hard shadow matching border
`border: Tpx ridge rgb(X, Y, Z); box-shadow: rgb(X, Y, Z) Xoff Yoff 0px 0px;` — shadow uses the same color as the border for a seamless 3D extrusion effect. The hard shadow extends the border outward on the bottom-right.

### Asymmetric border-radius (3 values)
`border-radius: 0px R R;` — only 3 values: top-left, top-right+bottom-left, bottom-right. Creates a pill shape with one flat edge.

### Diagonal border-radius (2 values)
`border-radius: 0px R;` — 2 values: top-left+bottom-right, top-right+bottom-left. Creates diagonal corner rounding where only one pair of opposite corners are rounded.

### calc() function
`min-height: calc(-1rem + 100vh);` — CSS `calc()` for mixing units. C0D3CR34TUR3!!: `.main-container { min-height: calc(-1rem + 100vh); }`.

### Modern media query syntax
`@media (width > 500px) { ... }` — comparison operators in media queries. Also `width <= 500px`, `width < 350px`. More readable than `min-width`/`max-width`.

### SVG styling
`stroke-opacity`, `stroke-width`, `fill-opacity` — style SVG elements directly in CSS. C0D3CR34TUR3!! uses this for solid vs outline icon variants.

### Accessibility patterns
- Skip-to-content link: `.skip { height: 0; position: relative; } .skip a { font-size: 0; } .skip:focus-within { height: auto; }` — hidden until focused
- Focus outlines: `a:focus { outline: 1px solid; }` — visible focus state
- `:has()` selector: `a:focus:has(h2) { padding: 0; }` — modern CSS for conditional styling
- `@media (prefers-reduced-motion)` — disable animations for users who prefer reduced motion. irony machine: shows static image instead of animated GIF.

### Multi-file CSS
Real sites split CSS: global base + page-specific + component files. Don't force everything into one `<style>` block.

### Inline styles
Authentic indie pattern for one-off tweaks. Don't refactor into classes unless prompted.

### Font loading
Local @font-face with `font-display: fallback` or `swap` to prevent invisible text. Multiple formats: `.woff2` + `.ttf`/`.otf`. Some sites load 50-100+ fonts (CALL NOW: 100+, cinni: 4 local fonts).

### scroll-behavior: smooth
`html { scroll-behavior: smooth; }` — smooth scrolling for anchor links. Common in real sites.

### image-rendering: pixelated
`img { image-rendering: pixelated; }` — keeps pixel art sharp when scaled. NomnomNami: `.pixelart { image-rendering: pixelated; }`. Also `image-rendering: crisp-edges` for similar effect (derrek.org).

### rotate property (not transform)
`.tilted { rotate: -2deg; }` — modern CSS `rotate` property instead of `transform: rotate()`. Simpler syntax.

### zoom property
`body { zoom: 85%; }` — non-standard CSS zoom for scaling entire page. Shadok uses this for mobile. Not the same as `transform: scale()`.

### width: fit-content
`width: fit-content;` — intrinsic sizing, element shrinks to content width. Shadok uses this for the mona panel.

### Asymmetric border-radius
`border-radius: 70px 70px 10px 10px;` — different values per corner. Creates rounded-top, flat-bottom shapes. derrek.org uses this on header images.

### order property
`main { order: 2; } #leftSidebar { order: 1; }` — reorder flex items without changing HTML. Useful for responsive layouts.

### Gallery hover with border compensation
`.gallery img:hover { border: 3px solid; margin: -3px; }` — adds border on hover without shifting layout by pulling the image inward.

### Responsive table
On mobile, hide thead, make td display:block, use `td::before { content: attr(data-label); }` to show the column header. NomnomNami uses this pattern for accessible tables.

### YouTube embed
`.youtube-embed { position: relative; padding-top: 56.25%; } .youtube-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; }` — responsive 16:9 video embed.

### Custom range slider
`input[type="range"] { appearance: none; }` removes default styling. Then `::-webkit-slider-thumb { appearance: none; width: 15px; height: 15px; background: white; border-radius: 50%; }` for custom thumb. oceanfront uses this for music player. pixalina uses SVG data URIs for Win98-style slider thumbs. Also supports vertical sliders via `transform: rotate(270deg)`.

### Windows 98 / retro UI theme
Complete Win98 theme: `.window { background: silver; box-shadow: inset 1px 1px; }`, `.title-bar { background: linear-gradient(90deg, navy, blue); }`, title bar controls with SVG data URIs for minimize/maximize/close buttons. pixalina implements this with 98.css font.

### Custom scrollbar with base64 images
`::-webkit-scrollbar-track { background-image: url("data:image/png;base64,..."); }` — pixel-art scrollbar tracks and thumbs using inline base64 PNGs. pixalina uses this for Win98-style scrollbars.

### appearance: none
`appearance: none` — removes default browser styling from form elements. Used on range sliders, checkboxes, buttons.

### Fixed sliding element
`#todobox { position: fixed; bottom: -220px; }` with `#todobox:hover { bottom: 0px; transition: 0.8s ease-in-out; }` — element slides up from bottom on hover. oceanfront uses this for a todo widget.

### place-items / place-content
`display: grid; place-items: center;` — shorthand for `align-items: center; justify-items: center;`. Also `place-content: center` for grid container alignment. irony machine uses this for splash screen.

### cursor variations
Different cursors for different states: `cursor: grab` for draggable elements, `cursor: none` for custom tooltip areas, `cursor: url("..."), auto` for custom cursor images.

### Partial borders
`border-style: none solid solid` — only bottom and right borders. irony machine uses this on buttons for a 3D effect.

### user-select: none
`nav { user-select: none; }` — prevents text selection on navigation elements. Common in interactive UI.

### text-rendering
`text-rendering: geometricprecision` — precise text rendering for pixel-perfect typography. irony machine uses this on tooltips.

### border-image
`border-image: url("frame.png") 10 / 1 / 0 round` — uses an image as the border. cinni uses it for decorative frames around content sections.

### list-style with custom strings
`ul { list-style-type: "★ "; }` — use a string as the list marker. cinni cycles colored star images via `list-style-image` on nth-child selectors. Also works on details/summary: `details > summary { list-style-type: "+ "; }` changes to `"- "` when open (Firozah.com).

### -webkit-text-stroke
`h1 a:hover { -webkit-text-stroke: 0.25px rgb(56, 6, 9); }` — thin outline around text. Firozah.com uses it on hover states.

### text-decoration variations
`text-decoration: underline dotted;` — dotted underline instead of solid. Combined with `text-underline-offset: 0.5rem;` to control underline position.

### font-variant: all-small-caps
`h3 { font-variant: all-small-caps; }` — renders lowercase as small uppercase letters. Different from `text-transform: uppercase`.

### text-align: justify
`p { text-align: justify; }` — justified text alignment. Common in older-style sites like Firozah.com.

### scrollbar-color (standard)
`scrollbar-color: thumb track` alongside `::-webkit-scrollbar` — the standard property works in Firefox, webkit in Chrome/Safari. Also `scrollbar-width: none` to hide scrollbar while keeping scroll (oceanfront).

### Theme switching approaches
1. **data-theme attribute** (cinni): `[data-theme="dark"] { --bg: #382d2c; }` — JS sets `document.documentElement.dataset.theme`
2. **Class-based** (NENRIKIDO): `:root.pink { --primary: #ffc8ea; }` — JS toggles `document.documentElement.className`
3. **Alternate stylesheet** (Lost Letters): `<link rel="stylesheet" title="Sakura">` — user selects via browser
4. **prefers-color-scheme** (sweetfish.site): `@media (prefers-color-scheme: dark) { ... }`

### Text-shadow outline (4-direction)
`text-shadow: color -1px 0px, color 0px 1px, color 1px 0px, color 0px -1px;` — 4 shadows at cardinal directions create a colored outline/stroke around text without `-webkit-text-stroke`. Simpler than trig-based 16-direction outlines.

### Drop-shadow filter for shape-aware shadows
`filter: drop-shadow(color 0px 0px Rpx);` — shadows follow the element's actual shape (including `border-radius: 50%`), unlike `box-shadow` which stays rectangular. Useful for circular/oval containers.

### Multi-stop radial gradient for glowing center effect
`background: radial-gradient(circle, rgb(0,0,0) 48%, rgb(A,B,C) 66%, rgb(D,E,F) 82%, color 100%);` — use multiple percentage stops to create a smooth glow that fades from dark center to bright edge. A 4-stop radial gradient creates a lens/flare effect.

### Wavy text-decoration on links
`a { text-decoration-style: wavy; }` — sets a wavy underline on links. Works with `text-decoration-thickness` to control width. More distinctive than solid underline.

### Decorative link prefix via ::before
`a::before { content: "//"; }` — prepends decorative characters to every link using pseudo-element. Creates a consistent link indicator without markup changes.

### CSS variable button theming
Define: `.btn { --btn-bg: var(--blue); --btn-shadow: var(--dd-blue); --btn-hover: var(--l-blue); padding: 0.3em 0.6em; border-radius: 20px; background: var(--btn-bg); box-shadow: .123em .123em var(--btn-shadow); }` — theme entire button by overriding CSS variables. Variants just set `--btn-bg/--btn-shadow/--btn-hover` to different colors. Button press effect: `:active { transform: translate(var(--btn-shadow-size), var(--btn-shadow-size)); box-shadow: none; }`.

### Repeated text-shadow stacking for intense glow
Repeat the same `text-shadow` declaration 3-5x: `text-shadow: 0px 0px Rpx color, 0px 0px Rpx color, 0px 0px Rpx color;` — each repetition layers the glow, creating a much stronger effect than a single shadow. Works because CSS composites multiple identical shadows.

### GPU-accelerated transforms for fixed decorative elements
`transform: translate3d(var(--offset),0,0); will-change: transform; contain: layout paint; backface-visibility: hidden;` — moves positioning work to the GPU for smooth animations on fixed/parallax elements. `translate3d` forces hardware acceleration. `contain: layout paint` isolates rendering.

### Fixed pseudo-element divider
`#main::before { content: ""; position: fixed; border-right: 1px dashed color; height: 90%; }` — creates a persistent vertical dashed divider line that stays in place while content scrolls. Uses `::before` so no extra markup needed.

### Asymmetric blink keyframe (mostly visible)
`@keyframes blinker { 20% { opacity: 0.3; } }` — element is fully visible 80% of the time, briefly fades to 30% opacity. Less aggressive than the standard 50%-on/50%-off blink.

### Split colored drop-shadow (anaglyph/chromatic effect)
`filter: drop-shadow(colorA 1px 0px 0px) drop-shadow(colorB -1px 0px 0px);` — two different colored shadows on each side creates a red/blue anaglyph 3D effect without images. Works on any element with shape-following drop-shadow.

### Bottom slide-up tab
`#tab { position: fixed; bottom: -220px; z-index: 999; width: 200px; height: 250px; overflow: hidden scroll; transition: 0.8s ease-in-out; scrollbar-width: none; } #tab:hover { bottom: 0; }` — a panel fixed at the bottom of the viewport, mostly hidden offscreen, that slides up on hover. Acts as a drawer for extras (to-do, chat, links). Pairs `scrollbar-width: none` with hidden overflow for a clean popup feel.

### Inset box-shadow inner rim
`box-shadow: white 0px 0px 8px 8px inset;` — creates a soft inner white glow/rim inside a bordered box. Unlike drop-shadow (which follows shape), inset box-shadow glows inward from all edges. Use on headers, containers, and panels for a frosted/rimlit look.

### Per-letter bubble gradient text
Each letter of a word gets its own `<span id="bubb0">` through `<span id="bubbN">` with a slightly different `color` and identical `text-shadow`. The result is a bubbly gradient effect across the word without any CSS gradient. Each letter can be individually animated, colored, or shaded — works with any font and doesn't require `background-clip: text`.

### Win98 3D bevel via quad inset box-shadow
`box-shadow: #0a0a0a -1px -1px inset, #fff 1px 1px inset, grey -2px -2px inset, #dfdfdf 2px 2px inset;` — four layered inset shadows create a classic 90s raised button. Outermost layer (2px) is light, next (-2px) is dark, inner (1px) reverses, innermost (-1px) reverses again. Swap signs for sunken/pressed. Apply to `.window`, `button`, `select`, `textarea` for retro OS feel.

### Full retro scrollbar with beveled buttons
`.retro-scroll::-webkit-scrollbar { width: 16px; height: 16px; }` then style `thumb` (with 3D bevel `box-shadow`), `track` (pixel pattern `background-image`), `button` (4 directional arrow buttons with `background-image` SVGs), `corner`, and `resizer`. Each button has `:active` for pressed state. Far beyond basic thumb/track — recreates classic Win98 scrollbar entirely in CSS.

### Scanline overlay via repeating-linear-gradient
`body::before { content: ""; position: fixed; inset: 0; background: repeating-linear-gradient(rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px); pointer-events: none; z-index: 1000; }` — creates a full-viewport scanline/CRT overlay without images. The subtle 1px dark line every 2px gives a screen-door effect. `pointer-events: none` ensures it doesn't block clicks.

### Paper-stack multi-box-shadow depth
`box-shadow: rgba(0,0,0,0.08) 0px 2px 4px, rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.12) 0px 25px 50px, rgba(0,0,0,0.15) 0px 40px 80px;` — four shadows at increasing blur and offset create a realistic stack-of-paper depth effect. Each layer is slightly darker and more offset, mimicking physical paper layers.

### Lace divider via repeating image
`.lace { height: 30px; background: url("lace.png") repeat-x; }` — a decorative lace/pattern image as a horizontal separator. Uses `repeat-x` to tile along the full width. Height matches the pattern's slice height. Placed between sections for a frilly/seamstress aesthetic.

### GIF horizontal rule
`hr { border: none; height: 13px; background: url("divider.gif") no-repeat center; }` — replaces the boring solid `<hr>` with a centered GIF as decorative divider. No `repeat` (or `repeat-x` for tiled dividers).

### Full-viewport flex centering
```css
html, body { height: 100%; margin: 0; }
body { display: flex; flex-direction: column; justify-content: center; }
``` — vertically centers content on the full viewport. The `html, body { height: 100% }` is critical — without it, `justify-content: center` has no frame of reference. Works with `position: fixed` decorative elements floating around the centered content.

### Sprite sheet frame animation via steps() + background-position
`.door-sprite { background-image: url("sprite.png"); background-repeat: no-repeat; background-position: 0px 0px; } .door-sprite:hover { animation: 0.5s steps(3) 1 normal forwards running doorOpen; } @keyframes doorOpen { 0% { background-position: 0px 0px; } 100% { background-position: 0px -756px; } }` — animate `background-position` across a sprite sheet using `steps(3)` to jump between frames instead of smoothly interpolating. The sprite frames stack vertically; the negative Y offset at 100% reveals the last frame. The `steps(3)` breaks the animation into exactly 3 discrete jumps (one per frame). Unlike `steps(2, start)` wiggle which alternates rotation, this is true frame-by-frame sprite animation. Works for door opens, character animations, any multi-frame sprite.

### Double border via outline + positive outline-offset
`.panel { border: 10px solid brown; outline: yellow dotted 3px; outline-offset: -6px; }` — creates a decorative inner border between the element edge and the outer border. The `outline` draws on top of the border; negative `outline-offset` pulls it inward. Unlike the "negative outline-offset notch" pattern (which creates a dashed notch on interactive elements), this uses a THICK outer border + contrasting outline to create a bold two-layer border frame. Vary `outline-style` (dotted, dashed, double, ridge) for different effects.

### Mixed border-style per side
`border-style: inset none inset inset; border-color: black currentcolor black black;` — apply different border styles to each side individually (top, right, bottom, left order). Using `none` on one or more sides creates an "open" edge useful for attaching elements visually. The `currentcolor` keyword in `border-color` skips color override on that side. Also works with `border-width: medium` (the CSS default) for explicit browser-default sizing without a numeric value.

### Quarter-pill button (3 rounded corners)
`.btn { border-radius: 0px 100px 100px 100px; }` — three corners fully rounded, one corner square. Creates a pill shape with a flat "stem" edge. The 4-value `border-radius` maps to top-left / top-right / bottom-right / bottom-left. Setting one value to 0 and the rest to a large radius (≥50% of the smaller dimension) produces a D-shape or tab-like button. Cinnamuff's Galaxy uses `border-radius: 0px 100px 100px 100px` for nav buttons, creating a tab protruding from the left edge.

### Gradient scrollbar thumb
`::-webkit-scrollbar-thumb { background: linear-gradient(down, pink, yellow, green, blue); }` — apply a gradient to the scrollbar thumb instead of a solid color. Combined with `::-webkit-scrollbar { width: 6px; }` for a slim rainbow scrollbar. The gradient follows the scrollbar orientation (vertical scrollbar uses the first direction listed). The Rainbow Locker uses a pastel rainbow gradient across 5 stops.

---

## BEFORE YOU GENERATE, ASK YOURSELF

- Is each page going to have enough CSS for the scope? (100+ lines for simple, 400+ for complex)
- Am I using Impact/Georgia/Verdana/Bebas Neue again? Pick fonts from the list that aren't those four.
- Am I layering effects on the same selector?
- Are there custom scrollbar, custom cursor, and ::selection styling? (For cursor: use real .cur/.ico assets — hand-written base64 PNG cursors corrupt and disappear.)
- Is there at least ONE broken/half-finished element?
- Is there audio feedback (even if sound files are placeholder)?
- Is there a secret easter egg somewhere?
- Does this color scheme look like a brand or like someone's favorite colors?
- Am I using CSS variables because I need them or because I'm being tidy?
- Would a real person write this content?
- Is every page a different layout from the others?
- Does each page have at least ONE weird/ugly/unique choice?
- If a stranger stumbled here, would they get a sense of who I am?
- Did I forget to add at least 3 JS interactions?
- Am I using any emoji/Unicode character as a pseudo-element icon? If so, replace with CSS shapes or url().
- Am I using border styles beyond solid? (ridge, groove, dotted, double all appear in real sites)
- Am I using pseudo-elements for image decoration, not just text?
- If multi-page, am I splitting CSS into multiple files?