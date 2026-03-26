export function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 font-mono text-xs border border-rule dark:border-[#2A2420] text-muted dark:text-[#6B6055]">
      {name}
    </span>
  );
}
