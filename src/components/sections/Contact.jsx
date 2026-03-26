import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Send, Mail } from 'lucide-react';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mnjoqgbz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full pb-2 border-b border-rule dark:border-[#2A2420] bg-transparent font-body text-base text-ink dark:text-[#EDE8DF] placeholder:text-muted/50 dark:placeholder:text-[#6B6055]/50 focus:outline-none focus:border-ink dark:focus:border-[#EDE8DF] transition-colors';

  return (
    <section id="contact" className="py-24 bg-[#EDE8DE] dark:bg-[#0D0B09]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted dark:text-[#6B6055] mb-3">
              04 / Contact
            </p>
            <div className="h-px bg-rule dark:bg-[#2A2420]" />
          </div>
          <p className="font-body italic text-xl text-muted dark:text-[#8A7F75] mb-12 max-w-lg leading-relaxed">
            Open to co-op opportunities and interesting conversations about systems and backend engineering.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-3">
              <a
                href="mailto:jf.monterocortes@gmail.com"
                className="flex items-center gap-3 p-4 border border-rule dark:border-[#2A2420] hover:border-ink dark:hover:border-[#EDE8DF] transition-colors group"
              >
                <Mail size={18} className="text-muted dark:text-[#6B6055] group-hover:text-accent dark:group-hover:text-[#D9622F] transition-colors" />
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055]">Email</div>
                  <div className="font-body text-sm text-ink dark:text-[#EDE8DF]">jf.monterocortes@gmail.com</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/jfmonterocortes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 border border-rule dark:border-[#2A2420] hover:border-ink dark:hover:border-[#EDE8DF] transition-colors group"
              >
                <span className="text-muted dark:text-[#6B6055] group-hover:text-accent dark:group-hover:text-[#D9622F] transition-colors">
                  <LinkedinIcon />
                </span>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055]">LinkedIn</div>
                  <div className="font-body text-sm text-ink dark:text-[#EDE8DF]">linkedin.com/in/jfmonterocortes</div>
                </div>
              </a>
              <a
                href="https://github.com/jfmonterocortes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 border border-rule dark:border-[#2A2420] hover:border-ink dark:hover:border-[#EDE8DF] transition-colors group"
              >
                <span className="text-muted dark:text-[#6B6055] group-hover:text-accent dark:group-hover:text-[#D9622F] transition-colors">
                  <GithubIcon />
                </span>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055]">GitHub</div>
                  <div className="font-body text-sm text-ink dark:text-[#EDE8DF]">github.com/jfmonterocortes</div>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs tracking-widest uppercase text-muted dark:text-[#6B6055] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="flex items-center gap-2 px-5 py-2 font-mono text-xs tracking-widest uppercase border border-ink dark:border-[#EDE8DF] text-ink dark:text-[#EDE8DF] hover:bg-ink hover:text-cream dark:hover:bg-[#EDE8DF] dark:hover:text-[#120F0D] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={13} />
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="font-mono text-xs text-accent dark:text-[#D9622F]">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
