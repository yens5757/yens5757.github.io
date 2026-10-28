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
            <a [href]="'#' + s.id" [class.active]="active() === s.id" (click)="open.set(false)">{{ s.label }}</a>
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

  constructor() {
    // highlight the link for the section in the middle of the screen
    afterNextRender(() => {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
        { rootMargin: '-45% 0px -50% 0px' },
      );
      this.sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) io.observe(el);
      });
    });
  }
}
