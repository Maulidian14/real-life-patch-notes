// SPDX-License-Identifier: MIT
// Real-Life Patch Notes: The Comedy Changelog
// One patch note for a bug in human biology, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The bug everyone has had: the word vanishes mid-sentence, then comes back
// hours later in the shower, when it is far too late to use it. The fix is
// stated as if it shipped, in the dry register of a real release note.
const NOTE =
  "v3.0.1: fixed a bug where the brain lost a word mid-sentence and replaced it with 'the thing'; the word now returns three hours later, in the shower.";

const here = dirname(fileURLToPath(import.meta.url));

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), NOTE, "utf8");
} catch {
  mkdirSync(join(here, "out"), { recursive: true });
  writeFileSync(join(here, "out", "entry.txt"), NOTE, "utf8");
}

console.log(`wrote ${NOTE.length} chars`);
