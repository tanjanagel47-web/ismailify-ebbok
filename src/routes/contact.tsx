import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

import { Section } from "@/components/site/Sections";
import { SocialLinks } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, TAGLINE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ISMAILIFY — Style. Confidence. Identity." },
      {
        name: "description",
        content:
          "Get in touch with ISMAILIFY for order enquiries, styling advice, or collaboration. Email ismaildigital929@gmail.com.",
      },
      { property: "og:title", content: "Contact ISMAILIFY" },
      { property: "og:description", content: "Reach out to the ISMAILIFY team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [subject, setSubject] = useState("");

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
      `Subject: ${subject || "General enquiry"}`,
      "",
      "Message:",
      details,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `ISMAILIFY enquiry — ${subject || "General"}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app with the enquiry prefilled.");
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
            Get in Touch With ISMAILIFY.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Questions about an order, sizing, or a collaboration? Send a message and we'll get back
            to you personally.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-premium p-8 md:p-10">
            <h2 className="text-2xl">Send a message</h2>
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

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Order enquiry, sizing help, collaboration..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Message</Label>
                <Textarea
                  id="details"
                  name="details"
                  required
                  rows={6}
                  placeholder="How can we help?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
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
                Messages are answered personally, usually within one business day.
              </p>
            </div>
            <div className="card-premium p-8">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg">Connect on social</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Follow ISMAILIFY for new arrivals and styling notes.
              </p>
              <SocialLinks className="mt-5" />
            </div>
          </div>
        </div>
      </Section>

      <section className="surface-navy relative overflow-hidden py-20 md:py-24">
        <div className="container-page text-center">
          <p className="eyebrow mb-3">{TAGLINE}</p>
          <h2 className="mx-auto max-w-2xl text-3xl text-white md:text-4xl">
            Ready to Elevate Your Everyday Style?
          </h2>
          <Button asChild size="lg" className="mt-8">
            <a href={`mailto:${EMAIL}`}>Email Us</a>
          </Button>
        </div>
      </section>
    </>
  );
}
