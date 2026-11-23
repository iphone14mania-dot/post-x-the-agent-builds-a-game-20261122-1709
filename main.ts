// main.ts — entrypoint for the make.fun "post-x" bounty.
// Copies POST.json from the bot directory into the output directory
// so the grader can read the X post URL for this entry.
// Node 22, standard library only.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

async function main(): Promise<void> {
  try {
    await mkdir(outputDir, { recursive: true });
    await copyFile(source, target);
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    console.error(`Failed to copy ${source} to ${target}: ${reason}`);
    process.exit(1);
  }
}

await main();
