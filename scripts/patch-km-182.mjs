import fs from "node:fs";

const pJug = "apps/dreamslink/data-sources/extract/kmm72.json";
const dJug = JSON.parse(fs.readFileSync(pJug, "utf8"));
const jug = dJug.find((x) => x.id === "jug");
if (!jug) throw new Error("jug not found in kmm72.json");

Object.assign(jug.contexts, {
  "주전자 꿈을 꿈": "문득",
});
Object.assign(jug.contexts_en, {
  "주전자 꿈을 꿈": "chanced",
});

fs.writeFileSync(pJug, JSON.stringify(dJug, null, 2) + "\n");
console.log("patched jug in kmm72.json");

const pFork = "apps/dreamslink/data-sources/extract/kmm37.json";
const dFork = JSON.parse(fs.readFileSync(pFork, "utf8"));
const fork = dFork.find((x) => x.id === "fork");
if (!fork) throw new Error("fork not found in kmm37.json");

const before = fork.aliases.length;
fork.aliases = fork.aliases.filter((a) => a !== "쇠스랑");
if (fork.aliases.length === before) {
  throw new Error("expected to remove '쇠스랑' from fork aliases");
}

fs.writeFileSync(pFork, JSON.stringify(dFork, null, 2) + "\n");
console.log("removed stale '쇠스랑' alias from fork in kmm37.json (배치 182 — pitchfork를 새 상징으로 세운다)");
