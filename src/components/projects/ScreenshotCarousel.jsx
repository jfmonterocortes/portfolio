import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export function ScreenshotCarousel({ screenshots, labels }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = (e) => { e?.stopPropagation(); setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1)); };
  const next = (e) => { e?.stopPropagation(); setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1)); };

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, index]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
        {/* Browser chrome */}
        <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white dark:bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 dark:text-slate-500 font-mono truncate">
            {labels?.[index] ?? 'app'}
          </div>
          <button
            onClick={() => setLightbox(true)}
            className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            title="View fullscreen"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {/* Screenshot */}
        <div
          className="relative bg-slate-50 dark:bg-slate-900 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <img
            src={screenshots[index]}
            alt={labels?.[index] || `Screenshot ${index + 1}`}
            className="w-full h-auto block"
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

        {/* Dots */}
        {screenshots.length > 1 && (
          <div className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-4 py-2 flex justify-center gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-violet-500' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={screenshots[index]}
            alt={labels?.[index] || `Screenshot ${index + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {labels && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-white/70 text-sm">{labels[index]}</span>
              {screenshots.length > 1 && (
                <div className="flex gap-1.5">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === index ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
