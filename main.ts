import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch tells me to breathe, then panics when my heart rate spikes from reading its notification.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be one non-blank line of 1-200 characters.
const length = [...LINE].length;
if (LINE.trim().length === 0 || length > 200 || LINE.includes("\n")) {
  throw new Error(`Invalid roast line: ${length} characters, must be 1-200, single line.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
