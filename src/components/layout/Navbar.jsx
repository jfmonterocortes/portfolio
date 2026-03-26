import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ dark, toggle }) {
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 dark:bg-[#120F0D]/95 backdrop-blur-sm border-b border-rule dark:border-[#2A2420]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-bold text-ink dark:text-[#EDE8DF] tracking-tight">
          jfm
        </a>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors ${
                active === item.id
                  ? 'text-accent dark:text-[#D9622F]'
                  : 'text-muted dark:text-[#6B6055] hover:text-ink dark:hover:text-[#EDE8DF]'
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
