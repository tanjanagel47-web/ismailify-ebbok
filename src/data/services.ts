export type ServiceDetail = {
  slug: string;
  name: string;
  tagline: string;
  overview: string[];
  includes: string[];
  benefits: string[];
  audience: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

const commonProcessNote =
  "Every engagement follows the same five-step Ismailify process: discovery, planning, production, review, and delivery.";

export const SERVICES: ServiceDetail[] = [
  {
    slug: "ebook-writing",
    name: "eBook Writing",
    tagline: "Original, well-structured eBooks written from your idea, outline, or research.",
    overview: [
      "eBook writing turns a concept into a complete, coherent manuscript. Starting from your topic, notes, or outline, the book is researched, structured, and written chapter by chapter with a consistent voice and a clear promise to the reader.",
      `The focus is readability: short paragraphs, logical progression, and practical value on every page. ${commonProcessNote}`,
    ],
    includes: [
      "Topic research and audience positioning",
      "Chapter-by-chapter outline for approval",
      "Full manuscript written to the agreed word count",
      "Consistent tone, terminology, and structure",
      "Introduction, chapter openings, and conclusion",
      "Structured revision rounds",
    ],
    benefits: [
      "A finished manuscript without spending months writing",
      "Clear structure that keeps readers moving forward",
      "Content shaped around a specific reader and outcome",
      "A base asset you can use for lead generation or sales",
    ],
    audience: [
      "Entrepreneurs building authority in a niche",
      "Coaches and consultants packaging their method",
      "Businesses producing lead magnets and guides",
      "Anyone with an idea but no time to write it",
    ],
    deliverables: [
      "Approved chapter outline",
      "Complete manuscript (DOCX and PDF)",
      "Clean, ready-to-edit source file",
    ],
    faqs: [
      { q: "Do I need an outline before we start?", a: "No. If you only have an idea, the outline is created for you and approved before writing begins." },
      { q: "Who owns the finished book?", a: "You do. Full rights transfer to you on final delivery." },
      { q: "Can you match a specific tone?", a: "Yes. Share samples or notes and the manuscript is written to match that voice." },
    ],
  },
  {
    slug: "ghostwriting",
    name: "Ghostwriting",
    tagline: "Your ideas, your voice, your name on the cover — written for you, credited to you.",
    overview: [
      "Ghostwriting captures how you think and speak, then puts it on the page. Through briefs, notes, recordings, or interviews, your expertise becomes a manuscript that reads as if you wrote it yourself.",
      `Confidentiality is standard and authorship is entirely yours. ${commonProcessNote}`,
    ],
    includes: [
      "Voice and style discovery from your material",
      "Interview or brief-based content gathering",
      "Outline development and approval",
      "Full manuscript written in your voice",
      "Confidential handling of all material",
      "Structured revision rounds",
    ],
    benefits: [
      "A book that sounds authentically like you",
      "Your knowledge captured without writing it yourself",
      "Complete authorship and ownership",
      "A professional asset for credibility and growth",
    ],
    audience: [
      "Founders and executives sharing hard-won lessons",
      "Coaches turning frameworks into books",
      "Speakers and creators building authority",
      "Professionals with expertise but no writing time",
    ],
    deliverables: ["Voice and style guide", "Complete ghostwritten manuscript", "Editable source files"],
    faqs: [
      { q: "Will my name appear as author?", a: "Yes. Ghostwriting means the finished book is published entirely under your name." },
      { q: "How is my material kept private?", a: "All notes, recordings, and drafts stay confidential and are never shared or reused." },
      { q: "How much involvement is needed from me?", a: "Usually a kickoff conversation, source material, and feedback at review points." },
    ],
  },
  {
    slug: "ebook-editing",
    name: "eBook Editing",
    tagline: "Developmental, line, and copy editing that sharpens structure, clarity, and flow.",
    overview: [
      "Editing takes a completed draft and makes it work. Developmental editing addresses structure and argument, line editing improves rhythm and clarity sentence by sentence, and copy editing enforces grammar, consistency, and correctness.",
      `You choose the depth you need, or combine all three for a full polish. ${commonProcessNote}`,
    ],
    includes: [
      "Developmental review of structure and chapter order",
      "Line editing for clarity, rhythm, and tone",
      "Copy editing for grammar, syntax, and usage",
      "Consistency in terminology, names, and style",
      "Tracked changes plus an editorial summary",
      "One follow-up review pass",
    ],
    benefits: [
      "A manuscript that reads smoothly from start to finish",
      "Weak chapters restructured before publication",
      "Professional standard of language throughout",
      "Confidence that nothing embarrassing slipped through",
    ],
    audience: [
      "Authors with a finished first draft",
      "Self-publishers preparing for launch",
      "Non-native English writers wanting native-level polish",
      "Businesses publishing under a brand name",
    ],
    deliverables: ["Tracked-changes manuscript", "Clean edited version", "Editorial notes and recommendations"],
    faqs: [
      { q: "What is the difference between editing and proofreading?", a: "Editing improves structure, clarity, and style. Proofreading is the final check for typos and formatting slips." },
      { q: "Can you edit only part of the book?", a: "Yes. Editing can be scoped to specific chapters or sections." },
      { q: "Will my voice be changed?", a: "No. Editing sharpens your writing without replacing your voice." },
    ],
  },
  {
    slug: "proofreading",
    name: "Proofreading",
    tagline: "The final, detail-obsessed check before your eBook goes live.",
    overview: [
      "Proofreading is the last quality gate. Every page is reviewed for spelling, punctuation, grammar, spacing, heading consistency, and formatting slips that survive editing and layout.",
      `Nothing structural is changed at this stage — the goal is a flawless, publish-ready file. ${commonProcessNote}`,
    ],
    includes: [
      "Spelling, punctuation, and grammar check",
      "Consistency of headings, captions, and numbering",
      "Spacing, indentation, and layout slip detection",
      "Table of contents and link verification",
      "Final quality check report",
    ],
    benefits: [
      "A clean, credible, error-free reading experience",
      "Fewer negative reviews caused by typos",
      "Confidence at upload and launch",
      "Professional presentation on every device",
    ],
    audience: [
      "Authors about to publish",
      "Anyone who self-edited and needs fresh eyes",
      "Businesses protecting brand reputation",
      "Writers submitting to platforms or clients",
    ],
    deliverables: ["Proofread manuscript", "List of corrections applied", "Final quality check summary"],
    faqs: [
      { q: "Should proofreading come last?", a: "Yes. It works best after editing and formatting are complete." },
      { q: "Do you proofread formatted files?", a: "Yes. Formatted EPUB, PDF, and Kindle files can all be checked." },
      { q: "Is a second pass available?", a: "Yes, a verification pass after corrections can be included." },
    ],
  },
  {
    slug: "ebook-formatting",
    name: "eBook Formatting",
    tagline: "Clean, professional layouts for Kindle, EPUB, PDF, and print-style manuscripts.",
    overview: [
      "Formatting is what makes a manuscript feel like a real book. Typography, spacing, headings, chapter openings, and navigation are set up to platform standards so your file displays correctly everywhere.",
      `Kindle, EPUB, PDF, and manuscript formatting are all supported. ${commonProcessNote}`,
    ],
    includes: [
      "Professional typography and paragraph styling",
      "Chapter openings, headers, and page structure",
      "Clickable, auto-generated table of contents",
      "Kindle, EPUB, and PDF formatting",
      "Image, table, and list placement",
      "Device and reader preview checks",
    ],
    benefits: [
      "A polished, premium reading experience",
      "Files that pass platform validation",
      "Consistent display across phones, tablets, and e-readers",
      "No reflow or spacing surprises after upload",
    ],
    audience: [
      "Self-publishers uploading to Kindle or other stores",
      "Authors with a finished, edited manuscript",
      "Businesses distributing branded PDFs",
      "Anyone whose file looks broken on devices",
    ],
    deliverables: ["Formatted EPUB", "Kindle-ready file", "Print-style or digital PDF", "Source layout file"],
    faqs: [
      { q: "Which formats do you deliver?", a: "EPUB, Kindle-ready, and PDF, plus formatted DOCX manuscripts on request." },
      { q: "Do you include a clickable table of contents?", a: "Yes, navigable contents are standard in every formatted file." },
      { q: "Can you match a brand style?", a: "Yes. Fonts, colors, and layout can follow your brand guidelines." },
    ],
  },
  {
    slug: "ebook-cover-design",
    name: "eBook Cover Design",
    tagline: "Covers that earn the click and signal professional quality instantly.",
    overview: [
      "A cover is your first and strongest marketing asset. Design starts with your genre, audience, and competing titles, then builds a composition that stays legible at thumbnail size and looks premium at full size.",
      `Front covers, spines, and full wraps are available. ${commonProcessNote}`,
    ],
    includes: [
      "Genre and market research",
      "Concept directions for your feedback",
      "Typography, color, and imagery selection",
      "Thumbnail legibility testing",
      "Revision rounds on the chosen direction",
      "Print-ready wrap on request",
    ],
    benefits: [
      "Higher click-through in crowded storefronts",
      "Immediate perception of quality and credibility",
      "Cover that fits genre expectations",
      "Assets ready for social and promotional use",
    ],
    audience: [
      "Self-published authors launching a title",
      "Businesses producing lead magnets",
      "Authors with an underperforming cover",
      "Creators refreshing an existing series",
    ],
    deliverables: ["High-resolution front cover (JPG/PNG)", "3D mockup for promotion", "Full wrap PDF on request"],
    faqs: [
      { q: "How many concepts do I see?", a: "Multiple directions are presented before refining the one you choose." },
      { q: "Do you provide source files?", a: "Yes, source files can be included on request." },
      { q: "Can you design a series?", a: "Yes, a consistent template can be built across multiple titles." },
    ],
  },
  {
    slug: "ebook-publishing",
    name: "eBook Publishing",
    tagline: "Amazon KDP preparation, metadata, and a clean, confident launch setup.",
    overview: [
      "Publishing preparation covers everything between a finished file and a live listing: correct file specifications, categories, keywords, description copy, and pricing setup guidance.",
      `The goal is a listing that is technically correct and clearly presented to the right readers. ${commonProcessNote}`,
    ],
    includes: [
      "Amazon KDP account and listing preparation guidance",
      "File specification and validation checks",
      "Category and keyword research",
      "Book description and metadata writing support",
      "Pricing and territory setup guidance",
      "Pre-launch checklist review",
    ],
    benefits: [
      "Fewer rejected uploads and formatting errors",
      "A listing that describes the book persuasively",
      "Better discoverability through relevant categories",
      "A calm, organised launch instead of guesswork",
    ],
    audience: [
      "First-time self-publishers",
      "Authors moving from draft to store listing",
      "Businesses publishing under a brand account",
      "Anyone who found KDP confusing the first time",
    ],
    deliverables: ["Validated upload files", "Metadata and description copy", "Category and keyword list", "Launch checklist"],
    faqs: [
      { q: "Do you publish on my behalf?", a: "Files and listing assets are fully prepared; publishing happens from your own account so you keep full control." },
      { q: "Is the book description included?", a: "Yes, description and metadata support are part of the service." },
      { q: "Which platforms are supported?", a: "Amazon KDP primarily, with EPUB files suitable for other major stores." },
    ],
  },
  {
    slug: "ebook-conversion",
    name: "eBook Conversion",
    tagline: "Accurate conversion between DOCX, PDF, EPUB, and Kindle formats.",
    overview: [
      "Conversion moves your content between formats without losing structure. Headings, lists, images, footnotes, and navigation are rebuilt properly rather than exported and hoped for.",
      `Every converted file is checked on multiple readers before delivery. ${commonProcessNote}`,
    ],
    includes: [
      "DOCX, PDF, EPUB, and Kindle conversion",
      "Structure and heading hierarchy rebuild",
      "Image, table, and footnote handling",
      "Navigable table of contents",
      "Validation and device testing",
    ],
    benefits: [
      "Distribute the same book across every major store",
      "No broken layouts or lost formatting",
      "Files that pass platform validation",
      "Consistent reading experience across devices",
    ],
    audience: [
      "Authors expanding beyond one platform",
      "Publishers with legacy PDF-only titles",
      "Businesses repurposing existing documents",
      "Anyone with a file rejected at upload",
    ],
    deliverables: ["Converted files in each requested format", "Validation report", "Device preview confirmation"],
    faqs: [
      { q: "Can you convert a scanned PDF?", a: "Yes, though scanned or image-based files require extra work and time." },
      { q: "Is the layout preserved?", a: "Structure and styling are rebuilt to suit each format's rules rather than copied blindly." },
      { q: "How long does conversion take?", a: "Most straightforward conversions are quick; length and complexity determine the exact timeline." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export type ServiceGroup = {
  category: string;
  blurb: string;
  items: { name: string; description: string; slug?: string }[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    category: "Writing",
    blurb: "From blank page to complete manuscript.",
    items: [
      { name: "eBook Writing", description: "Full manuscripts written from your idea, notes, or outline.", slug: "ebook-writing" },
      { name: "Ghostwriting", description: "Your expertise and voice, written for you and credited to you.", slug: "ghostwriting" },
    ],
  },
  {
    category: "Editing",
    blurb: "Structure, clarity, and craft at every level.",
    items: [
      { name: "Developmental Editing", description: "Big-picture work on structure, argument, and chapter flow.", slug: "ebook-editing" },
      { name: "Copy Editing", description: "Grammar, syntax, consistency, and correctness throughout.", slug: "ebook-editing" },
      { name: "Line Editing", description: "Sentence-level rhythm, tone, and readability refinement.", slug: "ebook-editing" },
    ],
  },
  {
    category: "Quality",
    blurb: "The final gate before publication.",
    items: [
      { name: "Proofreading", description: "Detailed final check for typos, spacing, and slips.", slug: "proofreading" },
      { name: "Final Quality Check", description: "Full review of the finished file before you upload.", slug: "proofreading" },
    ],
  },
  {
    category: "Formatting",
    blurb: "Layouts built to platform specifications.",
    items: [
      { name: "eBook Formatting", description: "Professional typography, spacing, and chapter structure.", slug: "ebook-formatting" },
      { name: "Kindle Formatting", description: "Files prepared to display correctly across Kindle devices.", slug: "ebook-formatting" },
      { name: "EPUB Formatting", description: "Validated EPUB files for all major reading platforms.", slug: "ebook-formatting" },
      { name: "PDF Formatting", description: "Polished digital and print-style PDF layouts.", slug: "ebook-formatting" },
      { name: "Manuscript Formatting", description: "Clean, standards-compliant manuscript documents.", slug: "ebook-formatting" },
    ],
  },
  {
    category: "Design",
    blurb: "Visual work that makes the book look the part.",
    items: [
      { name: "eBook Cover Design", description: "Covers built for thumbnail impact and genre fit.", slug: "ebook-cover-design" },
      { name: "Table of Contents", description: "Clickable, well-structured navigation readers can trust.", slug: "ebook-formatting" },
    ],
  },
  {
    category: "Publishing",
    blurb: "Everything between a finished file and a live listing.",
    items: [
      { name: "Amazon KDP Preparation", description: "Files, categories, and settings ready for KDP upload.", slug: "ebook-publishing" },
      { name: "Publishing Preparation", description: "Pre-launch checks so nothing is missed at go-live.", slug: "ebook-publishing" },
      { name: "Metadata & Book Description Support", description: "Keywords, categories, and persuasive listing copy.", slug: "ebook-publishing" },
    ],
  },
  {
    category: "Conversion",
    blurb: "One book, every format.",
    items: [
      { name: "eBook Conversion", description: "Accurate DOCX, PDF, EPUB, and Kindle conversion.", slug: "ebook-conversion" },
    ],
  },
];
