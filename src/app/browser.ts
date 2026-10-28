// ============================================================
// browser.ts — theme state + scroll-reveal. Both only run in the browser
// (the page is pre-rendered at build time, where there is no window).
// ============================================================
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Injectable, afterNextRender, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;
  readonly dark = signal(false);

  constructor() {
    // index.html sets data-theme before first paint; mirror it once the app is live
    afterNextRender(() => this.dark.set(this.root.dataset['theme'] === 'dark'));
  }

  toggle() {
    const next = this.dark() ? 'light' : 'dark';
    this.root.dataset['theme'] = next;
    try { localStorage.setItem('theme', next); } catch { /* private mode: choice just won't persist */ }
    this.dark.set(next === 'dark');
  }
}

/** Fades an element up the first time it scrolls into view. */
@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class RevealDirective {
  constructor() {
    const el: HTMLElement = inject(ElementRef).nativeElement;
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) return el.classList.add('in');
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } },
        { rootMargin: '0px 0px -40px 0px' },
      );
      io.observe(el);
    });
  }
}
