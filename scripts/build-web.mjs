// Plain JS (no type-checking needed) so it can run with plain `node`
// after `tsc` has compiled src/ to dist/.
//
// Reads the compiled resources from dist/data/resources.js (single source
// of truth: src/data/resources.ts), injects them as JSON into the web app
// template, and writes the result to docs/index.html.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// dynamic import() requires a file:// URL on Windows (a plain "C:\..." path
// is not a valid URL scheme), so always go through pathToFileURL.
const resourcesUrl = pathToFileURL(
  path.join(root, "dist", "data", "resources.js"),
);
const { resources } = await import(resourcesUrl.href);

const templatePath = path.join(root, "scripts", "web-template.html");
const outPath = path.join(root, "docs", "index.html");

const template = await readFile(templatePath, "utf8");
const json = JSON.stringify(resources, null, 2);

const output = template.replace(
  "const resources = /*__RESOURCES_JSON__*/[];",
  `const resources = ${json};`,
);

if (output === template) {
  throw new Error(
    "Placeholder not found in template — did scripts/web-template.html change?",
  );
}

await writeFile(outPath, output, "utf8");
console.log(`✓ docs/index.html regenerated from ${resources.length} resources`);
