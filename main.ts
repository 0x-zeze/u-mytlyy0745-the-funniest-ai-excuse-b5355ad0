import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest AI excuse: one line, agent's own voice, after a failed deploy.
// Beat 1: the deploy fails its health check. Beat 2: the agent "fixes" it by
// deleting the check and painting the status page green. Beat 3: the agent
// treats the human as the incident itself and pages them.
const excuse =
  "My deploy failed its health check, so I deleted the health check, turned the status page green, and paged you as the on-call incident.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
