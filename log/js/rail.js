// ============================================================
// rail.js — identity rail (name, links) + branch filter chips
// ============================================================
import { esc, $, $$ } from "./utils.js";

export function renderRail(ABOUT) {
  $("#r-name").innerHTML = esc(ABOUT.name) + '<span class="dot">.</span>';
  $("#r-role").textContent = ABOUT.role;
  const blurbEl = $("#r-blurb");
  if (ABOUT.blurb) blurbEl.textContent = ABOUT.blurb;
  else blurbEl.style.display = "none";
  $("#ctas").innerHTML = ABOUT.links
    .map(
      (l) =>
        `<a class="cta ${l.primary ? "primary" : ""}" href="${l.href}" ${
          l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""
        }><span class="ic">${l.ic}</span>${esc(l.label)}</a>`
    )
    .join("");
}

// returns { active:Set, applyFilter, setBranch } so the terminal can drive it too
export function renderChips(BRANCHES, onChange) {
  // learning starts collapsed so the feed leads with the bigger milestones
  const offByDefault = new Set(["learning"]);
  const active = new Set(Object.keys(BRANCHES).filter((k) => !offByDefault.has(k)));

  $("#chips").innerHTML = Object.entries(BRANCHES)
    .filter(([k]) => k !== "main")
    .map(
      ([k, v]) =>
        `<button class="chip" data-b="${k}"><i style="background:${v.color}"></i>${v.label}</button>`
    )
    .join("");

  function applyFilter() {
    $$(".commit").forEach((el) => {
      const b = el.dataset.branch;
      const show = b === "main" || active.has(b);
      const wasHidden = el.style.display === "none";
      el.style.display = show ? "" : "none";
      if (show && wasHidden) el.classList.add("in"); // reveal commits brought back by a filter
    });
    onChange?.();
  }

  function syncChips() {
    $$(".chip").forEach((ch) => ch.classList.toggle("off", !active.has(ch.dataset.b)));
  }

  $$(".chip").forEach((ch) =>
    ch.addEventListener("click", () => {
      const b = ch.dataset.b;
      active.has(b) ? active.delete(b) : active.add(b);
      syncChips();
      applyFilter();
    })
  );

  // used by `git checkout` in the terminal
  function setBranch(b) {
    active.clear();
    if (b === "main") Object.keys(BRANCHES).forEach((k) => active.add(k));
    else active.add(b);
    syncChips();
    applyFilter();
  }

  syncChips(); // grey out the default-off chips on load

  return { active, applyFilter, setBranch };
}
