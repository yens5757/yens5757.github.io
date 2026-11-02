// ============================================================
// cards.ts — the two repeated rows: an experience entry and a project.
// Every row is a hairline-topped grid on the page's shared left gutter
// (--gutter): the date sits in the gutter, the content beside it, so the
// eye runs down one edge. Under 600px the gutter folds above the title.
// Nothing is hidden, elevated or animated: the pre-rendered HTML is the page.
// ============================================================
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Entry, Project } from './data';
import { IconComponent } from './icon.component';

/** data.ts adds `image?: { src, alt }` to Project; reading it through this type compiles either way. */
type ProjectView = Project & { image?: { src: string; alt: string } };

@Component({
  selector: 'app-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="when" [class.now]="e().current">{{ e().when }}</p>
    <div class="body">
      <h4>{{ e().title }}@if (e().upcoming) {<span class="soon">Incoming</span>}</h4>
      <p class="org">
        @if (e().url; as url) { <a [href]="url" target="_blank" rel="noopener">{{ e().org }}</a> } @else { {{ e().org }} }
        @if (e().where; as where) { <span class="where"> · {{ where }}</span> }
      </p>
      @if (e().points.length) {
        <ul class="points">
          @for (p of e().points; track p) { <li>{{ p }}</li> }
        </ul>
      }
      @if (e().tags; as tags) {
        <ul class="tags">@for (t of tags; track t) { <li>{{ t }}</li> }</ul>
      }
    </div>
  `,
  // .soon and .tags are global (styles.css); only the row layout lives here
  styles: `
    :host{
      display:grid; grid-template-columns:var(--gutter) minmax(0,1fr); column-gap:var(--gutter-gap); align-items:start;
      padding:var(--s-row) 0; border-top:1px solid var(--line);
    }
    .when{ padding-top:3px; font-family:var(--mono); font-size:var(--t-meta); line-height:1.5; color:var(--muted); }
    .when.now{ color:var(--ok); }
    .body{ min-width:0; }
    h4{ font-family:var(--display); font-size:var(--t-h4); font-weight:700; line-height:1.25; letter-spacing:-.01em; color:var(--ink); }
    .org{ margin-top:3px; font-size:var(--t-small); font-weight:500; color:var(--ink-2); }
    .org a{
      color:inherit; text-decoration:underline; text-decoration-thickness:1px; text-underline-offset:4px; text-decoration-color:var(--line);
      transition:color .15s, text-decoration-color .15s;
    }
    .org a:hover{ color:var(--accent); text-decoration-color:currentColor; }
    .where{ font-weight:400; color:var(--muted); }
    .points{ list-style:disc; padding-left:18px; margin-top:10px; max-width:var(--measure); font-size:var(--t-small); color:var(--ink-2); }
    .points li + li{ margin-top:3px; }
    .points li::marker{ color:var(--muted); }
    @media (max-width:599px){
      :host{ grid-template-columns:1fr; row-gap:4px; }
      .when{ padding-top:0; }
    }
  `,
})
export class EntryComponent {
  readonly e = input.required<Entry>({ alias: 'entry' });
}

@Component({
  selector: 'app-project',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.featured]': '!!p().featured', '[class.has-image]': '!!frame()' },
  template: `
    @if (frame(); as f) {
      <a class="frame" [attr.href]="f.href" [attr.target]="f.href ? '_blank' : null" [attr.rel]="f.href ? 'noopener' : null">
        <img [src]="f.src" [alt]="f.alt" loading="lazy" decoding="async" (error)="broken.set(true)" />
      </a>
    }
    <p class="meta">
      @if (meta().when; as when) { <span class="when" [class.now]="meta().now">{{ when }}</span> }
      <span class="kind"><app-icon [name]="p().icon" />{{ meta().kind }}</span>
    </p>
    <div class="body">
      <h3 class="title">{{ p().name }}</h3>
      <p class="summary">{{ p().summary }}</p>
      @if (p().stats; as stats) {
        <ul class="stats">@for (s of stats; track s) { <li>{{ s }}</li> }</ul>
      }
      <ul class="tags">@for (t of p().tags; track t) { <li>{{ t }}</li> }</ul>
      <div class="links">
        @for (l of p().links; track l.href) {
          <a class="link" [href]="l.href" target="_blank" rel="noopener"><app-icon [name]="l.icon" />{{ l.label }}</a>
        }
      </div>
    </div>
  `,
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  readonly p = input.required<Project>({ alias: 'project' });
  /** set when the browser reports the image file missing: the row then renders as a plain row */
  readonly broken = signal(false);
  /** "Data pipeline · Oct 2026 – Present" -> kind + date, no data change; a kicker without " · " is all kind */
  readonly meta = computed(() => {
    const [kind, ...rest] = this.p().kicker.split(' · ');
    const when = rest.join(' · ');
    return { kind, when, now: /present/i.test(when) };
  });
  /** the image frame, if the data has one and it loaded; it links to the project's first link (the live site) */
  readonly frame = computed(() => {
    const { image, links } = this.p() as ProjectView;
    if (!image?.src || this.broken()) return null;
    return { src: image.src, alt: image.alt ?? '', href: links[0]?.href ?? null };
  });
}
