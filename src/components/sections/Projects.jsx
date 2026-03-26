import { ScrollReveal } from '../ui/ScrollReveal';
import { ProjectSection } from '../projects/ProjectSection';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted dark:text-[#6B6055] mb-3">
              03 / Work
            </p>
            <div className="h-px bg-rule dark:bg-[#2A2420]" />
          </div>
        </ScrollReveal>
        {PROJECTS.map((project, i) => (
          <ProjectSection key={project.slug} project={project} index={i} flip={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
