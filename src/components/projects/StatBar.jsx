export function StatBar({ stats }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4">
      {stats.map((stat, i) => (
        <span key={stat} className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted dark:text-[#6B6055]">{stat}</span>
          {i < stats.length - 1 && (
            <span className="font-mono text-xs text-rule dark:text-[#2A2420]">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
