// ============================================================
// script.js — mobile menu, active-section highlight, footer year
// ============================================================
const menu = document.getElementById("menu");
const links = document.getElementById("links");

const setMenu = (open) => {
  links.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
menu.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// highlight the nav link for the section in view
const navLinks = [...links.querySelectorAll('a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  navLinks.forEach((a) => {
    const s = document.querySelector(a.getAttribute("href"));
    if (s) io.observe(s);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
