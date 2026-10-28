// ============================================================
// nav.component.ts — sticky header: section links, theme toggle, mobile menu
// ============================================================
import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { ThemeService } from './browser';
import { IconComponent } from './icon.component';
import { PROFILE } from './data';

@Component({
  selector: 'app-nav',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'open.set(false)' },
  template: `
    <header class="nav">
      <div class="wrap row">
        <a class="brand" href="#top"><span class="mono">AL</span>{{ name }}</a>

        <nav class="links" [class.open]="open()" id="nav-links" aria-label="Sections">
          @for (s of sections; track s.id) {
            <a [href]="'#' + s.id" [class.active]="active() === s.id" (click)="select(s.id)">{{ s.label }}</a>
          }
          <a class="btn btn-primary btn-sm" [href]="resume" target="_blank" rel="noopener">Resume</a>
        </nav>

        <div class="tools">
          <button class="round" type="button" (click)="theme.toggle()"
                  [attr.aria-label]="theme.dark() ? 'Switch to light mode' : 'Switch to dark mode'">
            <app-icon class="show-light" name="moon" />
            <app-icon class="show-dark" name="sun" />
          </button>
          <button class="round menu" type="button" (click)="open.set(!open())"
                  [attr.aria-expanded]="open()" aria-controls="nav-links"
                  [attr.aria-label]="open() ? 'Close menu' : 'Open menu'">
            <span [class.x]="open()"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './nav.component.css',
})
export class NavComponent {
  readonly theme = inject(ThemeService);
  readonly name = PROFILE.name;
  readonly resume = PROFILE.resume;
  readonly sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  readonly open = signal(false);
  readonly active = signal('');
  // a clicked link stays highlighted until the visitor scrolls by hand
  private pinned = false;

  select(id: string) {
    this.open.set(false);
    this.active.set(id);
    this.pinned = true;
  }

  constructor() {
    // highlight the last section whose top has passed the middle of the screen; at the very bottom of
    // the page pick the last section, since a short final section can never reach the middle
    afterNextRender(() => {
      const els = this.sections
        .map((s) => document.getElementById(s.id))
        .filter((el): el is HTMLElement => !!el);
      let queued = false;
      const update = () => {
        queued = false;
        if (this.pinned) return;
        const root = document.documentElement;
        if (innerHeight + scrollY >= root.scrollHeight - 4) return this.active.set(els[els.length - 1].id);
        const passed = els.filter((el) => el.getBoundingClientRect().top <= innerHeight * 0.45);
        this.active.set(passed.length ? passed[passed.length - 1].id : '');
      };
      addEventListener('scroll', () => {
        if (!queued) { queued = true; requestAnimationFrame(update); }
      }, { passive: true });
      const unpin = () => { this.pinned = false; };
      for (const ev of ['wheel', 'touchstart', 'keydown', 'mousedown'] as const) addEventListener(ev, unpin, { passive: true });
      update();
    });
  }
}
