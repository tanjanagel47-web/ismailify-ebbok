import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

import { Section, CTASection } from "@/components/site/Sections";
import { SocialLinks } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EMAIL } from "@/data/site";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ismailify — Start Your eBook Project" },
      {
        name: "description",
        content:
          "Tell Ismailify about your eBook project and receive a clear scope, timeline, and quote. Email ismaildigital929@gmail.com.",
      },
      { property: "og:title", content: "Contact Ismailify" },
      { property: "og:description", content: "Let's bring your eBook idea to life." },
    ],
  }),
  component: Contact,
});

const BUDGETS = [
  "Under $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Not sure yet",
];

function Contact() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const details = String(data.get("details") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service || "Not specified"}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New eBook project enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app with the project details prefilled.");
  }

  return (
    <>
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="container-page relative py-20 md:py-24">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="max-w-3xl text-4xl leading-[1.1] text-white md:text-5xl">
            Let's Bring Your eBook Idea to Life.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Share a few details about your project and you'll receive a clear scope, realistic
            timeline, and an honest quote before any work begins.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-premium p-8 md:p-10">
            <h2 className="text-2xl">Tell me about your project</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.slug} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="Complete Project">Complete Project</SelectItem>
                      <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger id="budget" className="w-full">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGETS.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  required
                  rows={6}
                  placeholder="Topic, word count, current stage, deadline, and anything else that helps."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Project Details
              </Button>
              <p className="text-xs text-muted-foreground">
                Submitting opens your email client with the details prefilled, addressed to{" "}
                {EMAIL}.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-8">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg">Email directly</h3>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block text-sm font-medium break-all text-primary hover:underline"
              >
                {EMAIL}
              </a>
            </div>
            <div className="card-premium p-8">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg">Response time</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Enquiries are answered personally, usually within one business day.
              </p>
            </div>
            <div className="card-premium p-8">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg">Connect on social</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer messaging? Reach out on any platform below.
              </p>
              <SocialLinks className="mt-5" />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure which service you need?"
        text="Describe where your manuscript is today and you'll get an honest recommendation — even if it's a smaller service than you expected."
      />
    </>
  );
}
