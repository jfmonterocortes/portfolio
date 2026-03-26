import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ dark, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 ml-1 text-muted dark:text-[#6B6055] hover:text-ink dark:hover:text-[#EDE8DF] transition-colors"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
