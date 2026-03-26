import {
  ExternalLink, Shield, Users, FileText, RefreshCw, CheckSquare,
  Maximize2, Layers, Settings, Activity, Wifi, Cpu, AlertTriangle,
  Database, Lock, Trash2,
} from 'lucide-react';
import { TechBadge } from './TechBadge';
import { StatBar } from './StatBar';
import { ScreenshotCarousel } from './ScreenshotCarousel';
import { CodeSnippet } from './CodeSnippet';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ScrollReveal } from '../ui/ScrollReveal';

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

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

const PROJECT_NUMBERS = ['01', '02', '03', '04', '05'];

export function ProjectSection({ project, index = 0, flip = false }) {
  return (
    <ScrollReveal>
      <div className="py-14 border-b border-rule dark:border-[#2A2420] last:border-0">
        {/* Header row: number + category */}
        <div className="flex items-baseline justify-between gap-4 mb-5">
          <span className="font-mono text-5xl font-medium text-rule dark:text-[#2A2420] leading-none select-none">
            {PROJECT_NUMBERS[index] ?? `0${index + 1}`}
          </span>
          <span className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055]">
            {project.category}
          </span>
        </div>

        <div className="h-px bg-rule dark:bg-[#2A2420] mb-6" />

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl font-bold text-ink dark:text-[#EDE8DF] mb-5">
          {project.title}
        </h3>

        {/* Impact line — the B1 improvement */}
        {project.impact && (
          <p className="font-body italic text-lg text-muted dark:text-[#8A7F75] mb-6 max-w-2xl leading-relaxed border-l-2 border-accent dark:border-[#D9622F] pl-4">
            {project.impact}
          </p>
        )}

        <div className="h-px bg-rule dark:bg-[#2A2420] mb-7" />

        {/* Tech badges + links */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {project.techStack.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
          <div className="flex gap-4 ml-auto">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] hover:text-accent dark:hover:text-[#D9622F] transition-colors"
            >
              <GithubIcon />
              Source
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] hover:text-accent dark:hover:text-[#D9622F] transition-colors"
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}
          </div>
        </div>

        {/* 2-column content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <div className={flip ? 'lg:order-2' : ''}>
            {project.architecture && project.architectureFlow && (
              <ArchitectureDiagram nodes={project.architecture} flow={project.architectureFlow} />
            )}
            <div className="mt-6 space-y-2">
              {project.decisions.map((d) => {
                const Icon = ICON_MAP[d.icon] || Shield;
                return (
                  <div
                    key={d.title}
                    className="flex gap-3 p-4 border border-rule dark:border-[#2A2420]"
                  >
                    <Icon size={15} className="text-accent dark:text-[#D9622F] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-mono text-xs font-medium uppercase tracking-wide text-ink dark:text-[#EDE8DF] mb-1">
                        {d.title}
                      </div>
                      <div className="font-body text-sm text-muted dark:text-[#8A7F75] leading-relaxed">
                        {d.body}
                      </div>
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
      </div>
    </ScrollReveal>
  );
}
