import { useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { getSkills } from '../../services/api';

const CATEGORY_ORDER = ['LANGUAGE', 'FRAMEWORK', 'DATABASE', 'TOOL'];
const CATEGORY_LABELS = {
  LANGUAGE: 'Languages',
  FRAMEWORK: 'Frameworks & Runtimes',
  DATABASE: 'Databases & ORM',
  TOOL: 'Tools',
};

const FALLBACK_SKILLS = {
  LANGUAGE: ['C', 'C#', 'JavaScript', 'Python', 'SQL'],
  FRAMEWORK: ['Node.js', 'Express', '.NET 8', 'ASP.NET Core', 'React', 'WPF', 'Tailwind CSS'],
  DATABASE: ['PostgreSQL', 'SQL Server', 'Prisma ORM'],
  TOOL: ['Git', 'Azure DevOps', 'Vitest', 'Zod', 'Pydantic'],
};

export function TechStack() {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(() => setError(true));
  }, []);

  const data = error || !skills ? FALLBACK_SKILLS : skills;

  return (
    <section id="stack" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Tech Stack</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_ORDER.map((cat, i) => (
            <ScrollReveal key={cat} delay={i * 0.1}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <ul className="space-y-2">
                  {(data[cat] || []).map((skill) => (
                    <li
                      key={typeof skill === 'string' ? skill : skill.name}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      {typeof skill === 'string' ? skill : skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
