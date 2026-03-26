import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ScreenshotCarousel({ screenshots, labels }) {
  const [index, setIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
      <div className="relative aspect-video">
        <img
          src={screenshots[index]}
          alt={labels?.[index] || `Screenshot ${index + 1}`}
          className="w-full h-full object-cover"
        />
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      {labels && (
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">{labels[index]}</span>
          {screenshots.length > 1 && (
            <div className="flex gap-1">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index
                      ? 'bg-violet-500'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
