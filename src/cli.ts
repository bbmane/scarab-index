#!/usr/bin/env node
import { all, byLevel, search, withMapsOrTimeline } from "./query.js";
import type { Level, Resource } from "./types.js";

function printResource(r: Resource): void {
  const link = r.url ? ` — ${r.url}` : "";
  console.log(`\n[${r.kind}] ${r.title}${link}`);
  console.log(`  levels: ${r.levels.join(", ")} | category: ${r.category}`);
  console.log(`  ${r.description}`);
}

function printList(list: Resource[]): void {
  if (list.length === 0) {
    console.log("No results.");
    return;
  }
  list.forEach(printResource);
  console.log(`\n(${list.length} results)`);
}

function main(): void {
  const [, , cmd, ...rest] = process.argv;

  switch (cmd) {
    case "list":
      printList(all());
      break;
    case "level": {
      const level = rest[0] as Level | undefined;
      if (!level) {
        console.error("Usage: scarab level <beginner|intermediate|expert>");
        process.exit(1);
      } else {
        printList(byLevel(level));
      }
      break;
    }
    case "maps":
      printList(withMapsOrTimeline());
      break;
    case "search": {
      const query = rest.join(" ");
      if (!query) {
        console.error("Usage: scarab search <term>");
        process.exit(1);
      }
      printList(search(query));
      break;
    }
    default:
      console.log(`Usage:
  scarab list                                show all resources
  scarab level <beginner|intermediate|expert> filter by level
  scarab maps                                 only resources with maps/timelines
  scarab search <term>                        search by title/description/category
`);
  }
}

main();
