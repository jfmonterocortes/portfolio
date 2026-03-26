import { ExternalLink, Shield, Users, FileText, RefreshCw, CheckSquare, Maximize2, Layers, Settings, Activity, Wifi, Cpu, AlertTriangle, Database, Lock, Trash2 } from 'lucide-react';

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import { TechBadge } from './TechBadge';
import { StatBar } from './StatBar';
import { ScreenshotCarousel } from './ScreenshotCarousel';
import { CodeSnippet } from './CodeSnippet';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ScrollReveal } from '../ui/ScrollReveal';

const ICON_MAP = {
  shield: Shield,
  users: Users,
  'file-text': FileText,
  'refresh-cw': RefreshCw,
  'check-square': CheckSquare,
  'maximize-2': Maximize2,
  layers: Layers,
  settings: Settings,
  activity: Activity,
  wifi: Wifi,
  cpu: Cpu,
  'alert-triangle': AlertTriangle,
  database: Database,
  lock: Lock,
  'trash-2': Trash2,
};

export function ProjectSection({ project, flip = false }) {
  return (
    <ScrollReveal>
      <div className={`grid lg:grid-cols-2 gap-10 items-start py-16 border-b border-slate-200 dark:border-slate-800 last:border-0`}>
        {/* Left column */}
        <div className={flip ? 'lg:order-2' : ''}>
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.tagline}</p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mb-8">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <GithubIcon />
              Source code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <ExternalLink size={15} />
                Live demo
              </a>
            )}
          </div>

          {/* Architecture diagram */}
          {project.architecture && project.architectureFlow && (
            <ArchitectureDiagram nodes={project.architecture} flow={project.architectureFlow} />
          )}

          {/* Engineering decisions */}
          <div className="mt-6 space-y-3">
            {project.decisions.map((d) => {
              const Icon = ICON_MAP[d.icon] || Shield;
              return (
                <div
                  key={d.title}
                  className="flex gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <Icon size={18} className="text-violet-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{d.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{d.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div className={flip ? 'lg:order-1' : ''}>
          <ScreenshotCarousel screenshots={project.screenshots} labels={project.screenshotLabels} />
          <CodeSnippet label={project.codeLabel} code={project.codeSnippet} />
          <StatBar stats={project.stats} />
        </div>
      </div>
    </ScrollReveal>
  );
}
