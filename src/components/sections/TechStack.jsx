import { useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { getSkills } from '../../services/api';

const CATEGORY_ORDER = ['LANGUAGE', 'FRAMEWORK', 'DATABASE', 'TOOL', 'CONCEPT'];
const CATEGORY_LABELS = {
  LANGUAGE: 'Languages',
  FRAMEWORK: 'Frameworks & Runtimes',
  DATABASE: 'Databases & ORM',
  TOOL: 'Tools & Platforms',
  CONCEPT: 'Concepts & Technologies',
};

const FALLBACK_SKILLS = {
  LANGUAGE: ['C', 'C#', 'JavaScript', 'Python', 'SQL'],
  FRAMEWORK: ['Node.js', 'Express', '.NET 8', 'ASP.NET Core', 'React', 'WPF', 'Tailwind CSS'],
  DATABASE: ['PostgreSQL', 'SQL Server', 'Prisma ORM'],
  TOOL: ['Git', 'Azure DevOps', 'GitHub Actions', 'Docker', 'Postman', 'Vercel', 'Render'],
  CONCEPT: ['REST APIs', 'MVC Architecture', 'Layered Architecture', 'TCP/IP', 'Socket Programming', 'Client-Server Systems', 'JWT Authentication', 'Input Validation', 'Unit Testing', 'Integration Testing'],
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
    <section id="stack" className="py-24 bg-[#EDE8DE] dark:bg-[#0D0B09]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted dark:text-[#6B6055] mb-3">
              02 / Stack
            </p>
            <div className="h-px bg-rule dark:bg-[#2A2420]" />
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {CATEGORY_ORDER.map((cat, i) => (
            <ScrollReveal key={cat} delay={i * 0.06}>
              <div className="grid md:grid-cols-4 gap-4 items-baseline py-6 border-b border-rule dark:border-[#2A2420] last:border-0">
                <p className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055]">
                  {CATEGORY_LABELS[cat]}
                </p>
                <div className="md:col-span-3 flex flex-wrap gap-x-5 gap-y-1">
                  {(data[cat] || []).map((skill) => (
                    <span
                      key={typeof skill === 'string' ? skill : skill.name}
                      className="font-body text-base text-ink dark:text-[#B5AFA6]"
                    >
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
