import { resources } from "./data/resources.js";
import type { Level, Resource, ResourceKind } from "./types.js";

export function byLevel(level: Level): Resource[] {
  return resources.filter((r) => r.levels.includes(level));
}

export function byKind(kind: ResourceKind): Resource[] {
  return resources.filter((r) => r.kind === kind);
}

export function withMapsOrTimeline(): Resource[] {
  return resources.filter((r) => r.hasMapsOrTimeline);
}

export function search(query: string): Resource[] {
  const q = query.toLowerCase();
  return resources.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q),
  );
}

export function all(): Resource[] {
  return resources;
}
