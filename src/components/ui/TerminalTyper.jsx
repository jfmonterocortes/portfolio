import { useState, useEffect } from 'react';

const LINES = [
  { prompt: '$ whoami', output: 'Juan Felipe Montero Cortes' },
  { prompt: '$ cat focus.txt', output: 'Backend · APIs · Systems · Databases' },
  { prompt: '$ ls projects/ | wc -l', output: '5 production-quality projects' },
  { prompt: '$ echo $status', output: 'Open to co-op - Waterloo, ON' },
];

export function TerminalTyper() {
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState('typing-prompt');
  const [charIndex, setCharIndex] = useState(0);
  const [shown, setShown] = useState([]);

  const current = LINES[lineIndex];

  useEffect(() => {
    if (phase === 'typing-prompt') {
      if (charIndex < current.prompt.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('showing-output'), 300);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'showing-output') {
      const t = setTimeout(() => {
        setShown((s) => [...s, { prompt: current.prompt, output: current.output }]);
        setPhase('next');
      }, 150);
      return () => clearTimeout(t);
    }

    if (phase === 'next') {
      if (lineIndex < LINES.length - 1) {
        const t = setTimeout(() => {
          setLineIndex((i) => i + 1);
          setCharIndex(0);
          setPhase('typing-prompt');
        }, 600);
        return () => clearTimeout(t);
      }
    }
  }, [phase, charIndex, lineIndex, current]);

  return (
    <div className="font-mono text-sm bg-slate-900 dark:bg-slate-950 text-green-400 rounded-lg p-5 text-left w-full max-w-lg shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-slate-500 text-xs">portfolio.sh</span>
      </div>
      {shown.map((line, i) => (
        <div key={i} className="mb-2">
          <div className="text-slate-400">{line.prompt}</div>
          <div className="text-white">{line.output}</div>
        </div>
      ))}
      {phase !== 'done' && (
        <div className="text-slate-400">
          {current.prompt.slice(0, charIndex)}
          <span className="animate-pulse">▋</span>
        </div>
      )}
    </div>
  );
}
