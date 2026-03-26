import { ScrollReveal } from '../ui/ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted dark:text-[#6B6055] mb-3">
              01 / About
            </p>
            <div className="h-px bg-rule dark:bg-[#2A2420]" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-5 text-ink/80 dark:text-[#B5AFA6] leading-relaxed text-lg">
              <p>
                Software Engineering Technology student at Conestoga College. I build backend systems
                that handle real business logic — role-based access, transactional writes, custom
                network protocols, and AI-driven pipelines.
              </p>
              <p>
                My projects aren't tutorials. One runs in a real cattle weighing business in Colombia.
                Another uses OpenAI to generate job applications with iterative refinement until a
                quality threshold is met. I've shipped across C, C#, Node.js, React, and Python.
              </p>
              <p>
                Looking for a co-op where I can contribute to production systems and work with
                engineers who care about correctness.
              </p>
            </div>
            <div className="space-y-6 pt-1">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] mb-1">
                  Education
                </p>
                <p className="font-body text-base font-semibold text-ink dark:text-[#EDE8DF]">
                  Conestoga College
                </p>
                <p className="font-body text-sm text-muted dark:text-[#6B6055]">
                  Software Engineering Technology
                </p>
              </div>
              <div className="h-px bg-rule dark:bg-[#2A2420]" />
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] mb-1">
                  Location
                </p>
                <p className="font-body text-base font-semibold text-ink dark:text-[#EDE8DF]">
                  Kitchener, Ontario
                </p>
                <p className="font-body text-sm text-muted dark:text-[#6B6055]">
                  Open to co-op
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
