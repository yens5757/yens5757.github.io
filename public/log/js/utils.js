// ============================================================
// utils.js — small shared helpers
// ============================================================

export const cvar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const branchColor = (BRANCHES, b) => {
  const m = BRANCHES[b].color.match(/^var\((--[\w-]+)\)$/);
  return m ? cvar(m[1]) : BRANCHES[b].color;
};

export const esc = (s) =>
  String(s).replace(/[&<>]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m]));

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ---- dates: parse "Mon YYYY" + compute an inclusive duration label ----
const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                 Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

const parseMonth = (s) => {
  const [mo, yr] = String(s).split(" ");
  return { y: +yr, m: MONTHS[mo] ?? 0 };
};

// inclusive month span, e.g. Nov 2025 → Feb 2026 = "4 mo", Feb 2023 → Jul 2024 = "1y 6m"
export function durationLabel(start, end) {
  const a = parseMonth(start), b = parseMonth(end);
  const n = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  if (n < 12) return `${n} mo`;
  const y = Math.floor(n / 12), r = n % 12;
  return r ? `${y}y ${r}m` : `${y}y`;
}

// derive how a commit reads on the timeline: range string, chip label, state class
export function timeMeta(c) {
  if (c.hash === "HEAD") return { range: c.date, chip: "", live: false, state: "head" };
  if (c.ongoing)
    return { range: `${c.date} → present`, chip: "ongoing", live: true, state: "ongoing" };
  if (c.end)
    return { range: `${c.date} → ${c.end}`, chip: c.dur || durationLabel(c.date, c.end), live: false, state: "done" };
  return { range: c.date, chip: c.dur || "", live: false, state: "point" };
}
