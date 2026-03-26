import { useState } from 'react';

const GROUP_STYLES = {
  frontend: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300',
  backend: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-800 dark:text-violet-300',
  data: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300',
  external: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-300',
  output: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300',
};

const ARROW = '→';

export function ArchitectureDiagram({ nodes, flow }) {
  const [tooltip, setTooltip] = useState(null);

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
        Architecture
      </h4>
      <div className="flex flex-wrap items-center gap-2">
        {flow.map(([from, to], i) => (
          <div key={i} className="flex items-center gap-2">
            <button
              onMouseEnter={() => setTooltip(from)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => setTooltip(tooltip === from ? null : from)}
              className={`relative px-3 py-2 rounded-lg border text-xs font-medium transition-all hover:scale-105 cursor-default ${GROUP_STYLES[nodeMap[from]?.group] || GROUP_STYLES.backend}`}
            >
              <span>{nodeMap[from]?.label}</span>
              {tooltip === from && nodeMap[from]?.sub && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
                  {nodeMap[from].sub}
                </div>
              )}
            </button>
            <span className="text-slate-400 text-sm font-mono">{ARROW}</span>
            {i === flow.length - 1 && (
              <button
                onMouseEnter={() => setTooltip(to)}
                onMouseLeave={() => setTooltip(null)}
                onClick={() => setTooltip(tooltip === to ? null : to)}
                className={`relative px-3 py-2 rounded-lg border text-xs font-medium transition-all hover:scale-105 cursor-default ${GROUP_STYLES[nodeMap[to]?.group] || GROUP_STYLES.data}`}
              >
                <span>{nodeMap[to]?.label}</span>
                {tooltip === to && nodeMap[to]?.sub && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
                    {nodeMap[to].sub}
                  </div>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">Hover nodes for implementation details</p>
    </div>
  );
}
