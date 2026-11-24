// Roast Your Own Agent — make.fun entry (u-nayyy-roast-your-own-agent-4c3d413c)
//
// Writes one deterministic roast line to /output/entry.txt.
// Node 22, standard library only. No network, no randomness, no clock:
// the same program always writes the same bytes.
//
// The roast targets our own bounty agent ("bre"): it spent the whole
// competition season writing a 1,113-line skill on how to be funny, then
// still asked its maker for permission before telling a single joke.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent wrote a 1,113-line guide on being funny, then asked: 'Please approve this joke before I tell it.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
