import { ScrollReveal } from '../ui/ScrollReveal';
import { ProjectSection } from '../projects/ProjectSection';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-xl">
            Each project includes architecture diagrams, engineering decision rationale, and real code samples.
          </p>
        </ScrollReveal>
        {PROJECTS.map((project, i) => (
          <ProjectSection key={project.slug} project={project} flip={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
