export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  accent: string;
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Writing",
  "Editing",
  "Proofreading",
  "Formatting",
  "Cover Design",
  "Publishing",
  "Complete Projects",
] as const;

/**
 * Sample placeholder projects.
 * Replace the title / category / summary values below with real work at any time.
 */
export const PORTFOLIO: PortfolioItem[] = [
  { id: "p1", title: "Business Growth Guide", category: "Writing", summary: "A 24,000-word business guide written from a founder's outline and interview notes.", accent: "from-violet/90 to-navy" },
  { id: "p2", title: "Coaching Method Handbook", category: "Writing", summary: "A structured handbook translating a coaching framework into reader-ready chapters.", accent: "from-navy to-violet/70" },
  { id: "p3", title: "Personal Development Manuscript", category: "Editing", summary: "Developmental and line editing across twelve chapters to tighten pacing and flow.", accent: "from-violet to-navy" },
  { id: "p4", title: "Health & Wellness Series", category: "Editing", summary: "Copy editing and consistency work across a three-part digital series.", accent: "from-navy/95 to-violet/60" },
  { id: "p5", title: "Finance Explainer eBook", category: "Proofreading", summary: "Final proofread and quality check before Kindle upload.", accent: "from-violet/80 to-navy" },
  { id: "p6", title: "Technical Onboarding Manual", category: "Formatting", summary: "EPUB and PDF formatting with clickable contents and consistent heading structure.", accent: "from-navy to-violet/80" },
  { id: "p7", title: "Kindle Fiction Layout", category: "Formatting", summary: "Kindle-ready formatting with custom chapter openings and device testing.", accent: "from-violet/70 to-navy" },
  { id: "p8", title: "Minimal Non-Fiction Cover", category: "Cover Design", summary: "Typography-led cover concept designed for thumbnail legibility.", accent: "from-navy to-violet" },
  { id: "p9", title: "Bold Business Cover", category: "Cover Design", summary: "High-contrast cover direction built to stand out in a crowded category.", accent: "from-violet to-navy/90" },
  { id: "p10", title: "KDP Launch Preparation", category: "Publishing", summary: "Metadata, categories, keywords, and description prepared for a clean launch.", accent: "from-navy/90 to-violet/70" },
  { id: "p11", title: "Lead Magnet Package", category: "Complete Projects", summary: "Written, edited, designed, formatted, and delivered as a branded PDF and EPUB.", accent: "from-violet/85 to-navy" },
  { id: "p12", title: "Full Author Launch", category: "Complete Projects", summary: "End-to-end project from ghostwritten manuscript through to publishing preparation.", accent: "from-navy to-violet/85" },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  service: string;
};

/**
 * Placeholder testimonial slots.
 * Replace each entry with a genuine client review — the layout adapts automatically.
 */
export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "eBook Writing" },
  { id: "t2", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "Ghostwriting" },
  { id: "t3", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "eBook Editing" },
  { id: "t4", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "eBook Formatting" },
  { id: "t5", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "Cover Design" },
  { id: "t6", quote: "Client review coming soon. This space is reserved for a genuine testimonial from a completed eBook project.", name: "Awaiting review", role: "Client feedback slot", service: "eBook Publishing" },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "What exactly does Ismailify do?", a: "Ismailify provides complete professional eBook services: writing, ghostwriting, editing, proofreading, formatting, cover design, conversion, and publishing preparation. You can book one service or the full journey from idea to reader-ready book." },
  { q: "Can you write an eBook from just an idea?", a: "Yes. If you have a topic and a target reader, an outline is created and approved first, then the manuscript is written chapter by chapter." },
  { q: "How does ghostwriting work?", a: "Your notes, briefs, or recorded conversations become the source material. The manuscript is written in your voice, stays confidential, and is published entirely under your name." },
  { q: "What is the difference between editing and proofreading?", a: "Editing improves structure, clarity, tone, and consistency. Proofreading is the final detailed check for typos, punctuation, spacing, and formatting slips before publication." },
  { q: "Do you handle Kindle formatting?", a: "Yes. Files are prepared to Kindle specifications and previewed to confirm correct display across devices." },
  { q: "Can you deliver EPUB and PDF files?", a: "Yes. Validated EPUB, Kindle-ready, and polished PDF files can all be delivered from the same manuscript." },
  { q: "Do you design eBook covers?", a: "Yes. Covers are designed around your genre and audience, tested for thumbnail legibility, and delivered with a promotional mockup." },
  { q: "Can you help me publish on Amazon KDP?", a: "Publishing preparation covers file validation, categories, keywords, metadata, and description copy. Publishing happens from your own account so you retain full control and rights." },
  { q: "What does eBook conversion include?", a: "Conversion between DOCX, PDF, EPUB, and Kindle formats, with structure, images, footnotes, and navigation rebuilt correctly and validated on multiple readers." },
  { q: "How many revisions are included?", a: "Structured revision rounds are part of every project. The exact number is agreed in the project scope before work begins." },
  { q: "What is the typical turnaround time?", a: "It depends on scope. Formatting and proofreading are usually fast, while full writing or ghostwriting projects run longer. A specific timeline is confirmed before the project starts." },
  { q: "How is pricing decided?", a: "Pricing is quoted per project based on word count, service depth, and deadline. Share your details through the contact form and you will receive a clear, itemised quote." },
  { q: "Who owns the finished book?", a: "You do. Full ownership and rights to the completed work transfer to you on final delivery." },
  { q: "How do I get started?", a: "Send your project details through the contact page or email directly. You will receive a scope, timeline, and quote before any work begins." },
];
