import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Start a Project — Oaksis",
  description: "Tell us about your brand and what you need.",
};

export default function StartAProjectPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHero
        eyebrow="Start a project"
        title="Let's build something with roots."
        subtitle="Fill in a few details below, or reach out directly — either way, a real person reads every message."
      />

      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ProjectForm />

          <div className="mt-16 rounded-2xl border border-ink/10 bg-white/40 p-8">
            <p className="font-display text-xl text-ink">Prefer to talk directly?</p>
            <p className="mt-2 font-body text-ink/70">
              Email us and we'll pick it up from there.
            </p>
            <a
              href="mailto:hello@oaksisstudio.com"
              className="focus-ring mt-4 inline-block font-body text-teal underline decoration-oasis underline-offset-4 transition hover:text-oasis"
            >
              hello@oaksisstudio.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
