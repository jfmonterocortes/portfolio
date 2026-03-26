import { useState, useEffect } from 'react';

export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs, i) => {
        const el = document.getElementById(ids[i]);
        if (obs && el) obs.unobserve(el);
      });
    };
  }, [ids]);

  return active;
}
