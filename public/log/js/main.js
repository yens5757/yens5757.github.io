// ============================================================
// main.js — entry point. Imports data + modules and wires up.
// ============================================================
import { ABOUT } from "../data/about.js";
import { BRANCHES, COMMITS } from "../data/commits.js";
import { renderRail, renderChips } from "./rail.js";
import { renderFeed } from "./graph.js";
import { initTerminal } from "./terminal.js";

renderRail(ABOUT);
const chips = renderChips(BRANCHES);
const { ordered } = renderFeed(COMMITS, BRANCHES);
chips.applyFilter(); // hide the default-off branches now that commits exist
initTerminal({ ABOUT, BRANCHES, COMMITS, ordered, chips });
