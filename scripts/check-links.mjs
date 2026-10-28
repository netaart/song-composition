#!/usr/bin/env node
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skills = path.join(root, "skills");

async function findMarkdown(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await findMarkdown(full)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      found.push(full);
    }
  }
  return found;
}

const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
let checked = 0;
const broken = [];

for (const file of (await findMarkdown(skills)).sort()) {
  const text = await readFile(file, "utf8");
  const lines = text.split("\n");
  for (const [index, line] of lines.entries()) {
    for (const match of line.matchAll(linkPattern)) {
      const raw = match[1].trim();
      if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("mailto:")) {
        continue;
      }
      const target = raw.split("#")[0];
      if (target === "") {
        continue;
      }
      checked += 1;
      const resolved = path.resolve(path.dirname(file), target);
      let ok = false;
      try {
        ok = (await stat(resolved)).isFile();
      } catch {
        ok = false;
      }
      if (!ok) {
        broken.push(`${path.relative(root, file)}:${index + 1} -> ${raw}`);
      }
    }
  }
}

if (broken.length > 0) {
  console.error(`Broken relative links: ${broken.length}`);
  for (const entry of broken) {
    console.error(`  ${entry}`);
  }
  process.exit(1);
}

console.log(`${checked} relative link(s) under skills/ resolve to a file.`);
