import { ScrollReveal } from '../ui/ScrollReveal';
import { MapPin, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Software Engineering Technology student at Conestoga College. I build backend systems
                that handle real business logic - role-based access, transactional writes, custom
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
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Conestoga College</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Software Engineering Technology</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Kitchener, Ontario</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Open to co-op</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
