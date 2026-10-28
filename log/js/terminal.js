// ============================================================
// terminal.js — slide-up terminal drawer with a tiny shell
// ============================================================
import { esc, branchColor, timeMeta, $, $$ } from "./utils.js";
import { openCommitByHash } from "./graph.js";

export function initTerminal({ ABOUT, BRANCHES, COMMITS, ordered, chips }) {
  const drawer = $("#drawer");
  const term = $("#term");
  const cmd = $("#cmd");

  const openDrawer = () => {
    drawer.classList.add("show");
    drawer.setAttribute("aria-hidden", "false");
    setTimeout(() => cmd.focus(), 220);
  };
  const closeDrawer = () => {
    drawer.classList.remove("show");
    drawer.setAttribute("aria-hidden", "true");
  };

  $("#termToggle").addEventListener("click", openDrawer);
  $("#termClose").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  const out = (html, cls = "") => {
    const d = document.createElement("div");
    d.className = "tl-line " + cls;
    d.innerHTML = html;
    term.appendChild(d);
    term.scrollTop = term.scrollHeight;
    return d;
  };

  // typewriter for the boot banner
  function typeLine(text, cls = "", speed = 14) {
    return new Promise((resolve) => {
      const line = out("", cls);
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.innerHTML = "&nbsp;";
      line.appendChild(cursor);
      let i = 0;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        line.textContent = text;
        resolve();
        return;
      }
      const tick = () => {
        if (i <= text.length) {
          line.textContent = text.slice(0, i);
          line.appendChild(cursor);
          term.scrollTop = term.scrollHeight;
          i++;
          setTimeout(tick, speed);
        } else {
          cursor.remove();
          resolve();
        }
      };
      tick();
    });
  }

  const gitLog = () =>
    ordered.forEach((c) => {
      const t = timeMeta(c);
      out(
        `<span style="color:${branchColor(BRANCHES, c.branch)}">${c.hash}</span> ` +
          `<span class="t-out">(${c.branch})</span> ${esc(c.msg)} ` +
          `<span class="t-out">· ${esc(t.range)}${t.live ? " <span class='t-add'>●</span>" : ""}</span>`
      );
    });

  function gitShow(h) {
    const c = COMMITS.find((x) => x.hash.toLowerCase() === (h || "").toLowerCase());
    if (!c) return out(`fatal: bad object ${esc(h || "")}`, "t-del");
    const t = timeMeta(c);
    out(`<span class="t-h">commit ${c.hash} (${c.branch})</span>`, "t-out");
    out(`Date: ${esc(t.range)}${t.chip ? `  (${esc(t.chip)})` : ""}\n\n    ${esc(c.msg)}\n`, "t-out");
    c.add.forEach((a) => out(`+ ${esc(a)}`, "t-add"));
    c.del.forEach((d) => out(`\u2212 ${esc(d)}`, "t-del"));
    if (c.url)
      out(`\n  <a class="t-link" href="${c.url}" target="_blank" rel="noopener">${esc(c.url.replace(/^https?:\/\//, ""))} \u2197</a>`);
    out("");
    openCommitByHash(c.hash);
  }

  function gitCheckout(b) {
    if (!BRANCHES[b]) return out(`error: branch '${esc(b || "")}' not found`, "t-del");
    out(`Switched to branch '${b}'`, "t-out");
    chips.setBranch(b);
  }

  const CMDS = {
    help() {
      out("commands:", "t-h");
      out(
        "  git log           list all commits\n" +
          "  git show &lt;hash&gt;    open a commit\n" +
          "  git checkout &lt;b&gt;   filter a branch\n" +
          "  whoami            about me\n" +
          "  links             contact links\n" +
          "  clear             clear screen",
        "t-out"
      );
    },
    whoami() {
      out(`${ABOUT.name} — ${ABOUT.role}`, "t-h");
      out(ABOUT.blurb, "t-out");
    },
    links() {
      ABOUT.links.forEach((l) =>
        out(`${l.label.padEnd(9)} <a class="t-link" href="${l.href}" target="_blank">${l.href}</a>`)
      );
    },
    clear() {
      term.innerHTML = "";
    },
  };

  function run(raw) {
    const line = raw.trim();
    if (!line) return;
    out(`<span class="t-prompt">~ ❯</span> <span class="t-in">${esc(line)}</span>`);
    const p = line.split(/\s+/);
    if (p[0] === "git" && p[1] === "log") return gitLog();
    if (p[0] === "git" && p[1] === "show") return gitShow(p[2]);
    if (p[0] === "git" && p[1] === "checkout") return gitCheckout(p[2]);
    if (CMDS[p[0]]) return CMDS[p[0]]();
    out(`zsh: command not found: ${esc(p[0])} — try 'help'`, "t-del");
  }

  // command history with up/down arrows
  const hist = [];
  let hp = -1;
  cmd.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (cmd.value.trim()) {
        hist.push(cmd.value);
        hp = hist.length;
      }
      run(cmd.value);
      cmd.value = "";
    } else if (e.key === "ArrowUp") {
      if (hp > 0) {
        hp--;
        cmd.value = hist[hp];
        e.preventDefault();
      }
    } else if (e.key === "ArrowDown") {
      if (hp < hist.length - 1) {
        hp++;
        cmd.value = hist[hp];
      } else {
        hp = hist.length;
        cmd.value = "";
      }
    }
  });

  // boot banner (typed)
  (async () => {
    await typeLine(
      `life.git — ${COMMITS.length} commits, ${Object.keys(BRANCHES).length - 1} branches`,
      "t-out"
    );
    out("");
    CMDS.help();
  })();
}
