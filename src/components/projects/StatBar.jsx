export function StatBar({ stats }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {stats.map((stat) => (
        <span
          key={stat}
          className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
        >
          {stat}
        </span>
      ))}
    </div>
  );
}
