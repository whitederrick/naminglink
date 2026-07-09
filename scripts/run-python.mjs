import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const script = process.argv[2];
const scriptArgs = process.argv.slice(3);

if (!script) {
  console.error("Usage: node scripts/run-python.mjs <script.py> [...args]");
  process.exit(1);
}

const candidates = [
  process.env.PYTHON,
  "C:\\Users\\white\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe",
  "python",
  "py",
].filter(Boolean);

let lastError = "";

for (const candidate of candidates) {
  const isPath = candidate.includes("\\") || candidate.includes("/");

  if (isPath && !existsSync(candidate)) {
    continue;
  }

  const result = spawnSync(candidate, [script, ...scriptArgs], {
    stdio: "inherit",
    shell: false,
  });

  if (!result.error) {
    process.exit(result.status ?? 0);
  }

  lastError = result.error.message;
}

console.error(`Python executable was not found. ${lastError}`);
process.exit(1);
