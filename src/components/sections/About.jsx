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
                I'm a Software Engineering Technology student at Conestoga College, focused on backend
                development, API design, and systems programming. I enjoy building software that solves
                real problems — from cattle weighing management systems to AI-powered job application tools.
              </p>
              <p>
                My projects span C, C#/.NET, Node.js, React, and Python. I care about clean architecture,
                transactional consistency, and writing code that's understandable six months later.
              </p>
              <p>
                Currently seeking co-op opportunities where I can contribute to meaningful backend systems
                and keep learning from experienced engineers.
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
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Waterloo, Ontario</div>
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
