#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { song2Dialect } from "@neta-art/score-dialect-song2";
import { formatDiagnostic } from "@neta-art/score-editor";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skills = path.join(root, "skills");

async function findFiles(dir, extension) {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await findFiles(full, extension)));
    } else if (entry.isFile() && entry.name.endsWith(extension)) {
      found.push(full);
    }
  }
  return found;
}

const all = await findFiles(skills, ".abc");
const examples = all.filter((file) =>
  path.relative(skills, file).split(path.sep).includes("assets"),
);

if (examples.length === 0) {
  console.error("No .abc examples found under skills/**/assets/.");
  process.exit(1);
}

let failed = 0;

for (const file of examples.sort()) {
  const relative = path.relative(root, file);
  const text = await readFile(file, "utf8");
  const parsed = song2Dialect.parse(text);
  const diagnostics = [...parsed.diagnostics];
  if (parsed.score !== null) {
    diagnostics.push(...song2Dialect.check(parsed.score));
  }

  if (diagnostics.length === 0) {
    console.log(`${relative}: ok`);
    continue;
  }

  failed += 1;
  console.error(`${relative}: ${diagnostics.length} diagnostic(s)`);
  for (const diagnostic of diagnostics) {
    console.error(`  ${formatDiagnostic(diagnostic, "en")}`);
  }
}

if (failed > 0) {
  console.error(`${failed} of ${examples.length} example(s) failed.`);
  process.exit(1);
}

console.log(`${examples.length} example(s) read with zero diagnostics.`);
