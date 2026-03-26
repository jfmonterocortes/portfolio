import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ dark, toggle }) {
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
          jfmontero
        </a>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                active === item.id
                  ? 'text-violet-600 dark:text-violet-400 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle dark={dark} toggle={toggle} />
        </div>
      </nav>
    </header>
  );
}
