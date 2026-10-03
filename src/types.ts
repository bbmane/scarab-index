export type Level = "beginner" | "intermediate" | "expert";

export type ResourceKind =
  | "website"
  | "portal"
  | "database"
  | "book"
  | "journal"
  | "archive"
  | "museum"
  | "language-tool";

export interface Resource {
  /** unique identifier, kebab-case */
  id: string;
  title: string;
  kind: ResourceKind;
  /** one or more levels the resource suits */
  levels: Level[];
  /** free-text topic area, e.g. "archaeology", "language", "mythology", "maps" */
  category: string;
  description: string;
  /** optional: absent for non-online resources (e.g. print books) */
  url?: string;
  /** true if the site offers interconnected interactive maps and/or timelines */
  hasMapsOrTimeline?: boolean;
  /** true if it requires institutional access/subscription */
  requiresAccess?: boolean;
}
