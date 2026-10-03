import type { Resource } from "../types.js";

export const resources: Resource[] = [
  // ---------- BEGINNER ----------
  {
    id: "van-de-mieroop-history-of-ancient-egypt",
    title: "A History of Ancient Egypt",
    kind: "book",
    levels: ["beginner", "intermediate"],
    category: "general history",
    description:
      "Scholarly yet accessible survey by Marc Van De Mieroop; a solid first organic overview.",
  },
  {
    id: "kemp-ancient-egypt",
    title: "Ancient Egypt: Anatomy of a Civilization",
    kind: "book",
    levels: ["beginner"],
    category: "general history",
    description: "Barry Kemp, more discursive and introductory in tone.",
  },
  {
    id: "world-history-encyclopedia",
    title: "World History Encyclopedia",
    kind: "website",
    levels: ["beginner", "intermediate"],
    category: "encyclopedia",
    url: "https://www.worldhistory.org",
    description:
      "Well-written, free entries with bibliography — a good starting point beyond Wikipedia.",
  },
  {
    id: "british-museum-collection",
    title: "British Museum - Collection Online",
    kind: "museum",
    levels: ["beginner", "intermediate"],
    category: "collections",
    url: "https://www.britishmuseum.org/collection",
    description: "Artifacts with descriptive entries, useful for seeing real objects.",
  },
  {
    id: "museo-egizio-torino",
    title: "Museo Egizio di Torino",
    kind: "museum",
    levels: ["beginner", "intermediate"],
    category: "collections",
    url: "https://www.museoegizio.it",
    description:
      "Online collection and introductory articles (Italian/English), great for absolute beginners.",
  },

  // ---------- INTERMEDIATE ----------
  {
    id: "digital-egypt-for-universities",
    title: "Digital Egypt for Universities",
    kind: "portal",
    levels: ["intermediate", "expert"],
    category: "general portal / maps / timeline",
    url: "https://www.ucl.ac.uk/museums-static/digitalegypt/",
    description:
      "UCL/Petrie Museum portal with 3,000+ interconnected pages, organized by theme, archaeological site, and historical period; includes a homepage, timeline, and clickable maps.",
    hasMapsOrTimeline: true,
  },
  {
    id: "theban-mapping-project",
    title: "Theban Mapping Project",
    kind: "portal",
    levels: ["intermediate", "expert"],
    category: "maps / Theban archaeology",
    url: "https://thebanmappingproject.com",
    description:
      "Run by ARCE: measurable interactive maps, tomb diagrams, printable PDFs, a timeline and glossary, focused on the Valley of the Kings/Queens and Thebes.",
    hasMapsOrTimeline: true,
  },
  {
    id: "osirisnet",
    title: "Osirisnet",
    kind: "website",
    levels: ["intermediate", "expert"],
    category: "funerary architecture",
    url: "https://osirisnet.net",
    description: "Detailed tomb entries with photos and floor plans.",
  },
  {
    id: "ancient-egypt-online",
    title: "Ancient Egypt Online",
    kind: "website",
    levels: ["intermediate"],
    category: "mythology / religion",
    url: "https://www.ancientegyptonline.co.uk",
    description: "Good introduction to Egyptian mythology and religion.",
  },
  {
    id: "academia-edu",
    title: "Academia.edu",
    kind: "database",
    levels: ["intermediate", "expert"],
    category: "academic papers",
    url: "https://www.academia.edu",
    description: "Many Egyptologists upload their own papers here for free.",
  },
  {
    id: "awol",
    title: "Ancient World Online (AWOL)",
    kind: "website",
    levels: ["intermediate", "expert"],
    category: "updates / open access",
    url: "https://ancientworldonline.blogspot.com",
    description: "A blog tracking open-access Egyptology publications.",
  },

  // ---------- EXPERT ----------
  {
    id: "trismegistos",
    title: "Trismegistos",
    kind: "database",
    levels: ["expert"],
    category: "texts / papyri / prosopography",
    url: "https://www.trismegistos.org",
    description:
      "The standard research database for texts, papyri, names, and places of ancient Egypt.",
  },
  {
    id: "griffith-institute",
    title: "Griffith Institute (Oxford)",
    kind: "archive",
    levels: ["expert"],
    category: "digitized archives",
    url: "http://www.griffith.ox.ac.uk",
    description:
      "Digitized archives, including Howard Carter's Tutankhamun excavation archive.",
  },
  {
    id: "jea-jstor",
    title: "Journal of Egyptian Archaeology (via JSTOR)",
    kind: "journal",
    levels: ["expert"],
    category: "peer-reviewed journal",
    url: "https://www.jstor.org",
    description: "Peer-reviewed journal, often requires institutional access.",
    requiresAccess: true,
  },
  {
    id: "thesaurus-linguae-aegyptiae",
    title: "Thesaurus Linguae Aegyptiae",
    kind: "language-tool",
    levels: ["expert"],
    category: "language / hieroglyphs",
    url: "https://aaew.bbaw.de/tla",
    description: "Hieroglyphic text corpus with translations.",
  },
  {
    id: "digital-karnak",
    title: "Digital Karnak",
    kind: "portal",
    levels: ["expert", "intermediate"],
    category: "3D reconstructions / architecture",
    url: "https://digitalkarnak.ucsc.edu",
    description: "3D reconstructions of the Karnak temple complex (UC Berkeley).",
    hasMapsOrTimeline: true,
  },
];
