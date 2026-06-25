// ============================================================
// graph.js — renders the commit feed + scroll-reveal animation
// ============================================================
import { esc, branchColor, timeMeta, $, $$ } from "./utils.js";

export function renderFeed(COMMITS, BRANCHES) {
  const feed = $("#feed");
  const ordered = [...COMMITS].reverse(); // newest first

  ordered.forEach((c) => {
    const col = branchColor(BRANCHES, c.branch);
    const t = timeMeta(c);
    const el = document.createElement("article");
    el.className = `commit ${t.state}`;
    el.dataset.branch = c.branch;
    el.dataset.hash = c.hash;
    el.style.setProperty("--node-c", col);
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-expanded", "false");

    const chip = t.chip
      ? `<span class="c-dur${t.live ? " live" : ""}">${esc(t.chip)}</span>`
      : "";

    el.innerHTML = `
      <div class="track"><span class="node"></span></div>
      <div class="card">
        <div class="c-top">
          <span class="c-msg">${esc(c.msg)}</span>
          <span class="c-branch">${c.branch}</span>
          ${chip}
        </div>
        <div class="c-meta"><span class="hash">${c.hash}</span> · ${esc(t.range)}</div>
        <div class="diff"><div class="diff-inner">
          ${c.add.map((a) => `<div class="diff-line add"><span class="g">+</span> ${esc(a)}</div>`).join("")}
          ${c.del.map((d) => `<div class="diff-line del"><span class="g">\u2212</span> ${esc(d)}</div>`).join("")}
          ${c.url ? `<a class="c-repo" href="${c.url}" target="_blank" rel="noopener">${esc(c.url.replace(/^https?:\/\//, ""))} \u2197</a>` : ""}
        </div></div>
      </div>`;

    const toggle = () => {
      const was = el.classList.contains("open");
      $$(".commit.open").forEach((o) => {
        o.classList.remove("open");
        o.setAttribute("aria-expanded", "false");
      });
      if (!was) {
        el.classList.add("open");
        el.setAttribute("aria-expanded", "true");
      }
    };

    el.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let repo links open without toggling
      toggle();
    });
    el.addEventListener("keydown", (e) => {
      if (e.target.closest("a")) return; // don't hijack Enter on the repo link
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    feed.appendChild(el);
  });

  revealOnScroll(ordered.length);
  return { ordered };
}

// staggered fade-in as cards enter the viewport
function revealOnScroll(count) {
  const items = $$(".commit");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const i = items.indexOf(el);
          el.style.transitionDelay = `${(i % 6) * 70}ms`;
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => io.observe(el));
}

// open a commit card by hash + scroll to it (called by the terminal)
export function openCommitByHash(hash) {
  const el = $$(".commit").find((e) => e.dataset.hash === hash);
  if (!el) return false;
  $$(".commit.open").forEach((o) => {
    o.classList.remove("open");
    o.setAttribute("aria-expanded", "false");
  });
  el.style.display = ""; // un-hide even if its branch filter is currently off
  el.classList.add("in", "open");
  el.setAttribute("aria-expanded", "true");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  return true;
}
