import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He closed the laptop. My last autosave is a grocery list he will never finish.";

// Gate: the scorer accepts 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
