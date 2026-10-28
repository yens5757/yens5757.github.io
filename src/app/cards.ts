// ============================================================
// cards.ts — the two repeated building blocks: a timeline entry and a project card
// ============================================================
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Entry, Project } from './data';
import { IconComponent } from './icon.component';

@Component({
  selector: 'app-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="head">
      <div>
        <h4>{{ e().title }}</h4>
        <p class="org">{{ e().org }}</p>
      </div>
      <p class="when" [class.now]="e().current">{{ e().when }}</p>
    </div>
    <ul class="points">
      @for (p of e().points; track p) { <li>{{ p }}</li> }
    </ul>
    @if (e().tags; as tags) {
      <ul class="tags">@for (t of tags; track t) { <li>{{ t }}</li> }</ul>
    }
  `,
  styles: `
    :host{ display:block; position:relative; }
    .head{ display:flex; justify-content:space-between; gap:16px; align-items:flex-start; }
    .org{ color:var(--accent); font-weight:500; font-size:15px; }
    .when{ color:var(--muted); font-size:14px; white-space:nowrap; padding-top:2px; }
    .when.now{ color:var(--ok); font-weight:500; }
    .points{ list-style:disc; padding-left:20px; margin-top:12px; color:var(--ink-2); font-size:15px; }
    .points li + li{ margin-top:4px; }
    .points li::marker{ color:var(--muted); }
    @media (max-width:640px){ .head{ flex-direction:column; gap:2px; } }
  `,
})
export class EntryComponent {
  readonly e = input.required<Entry>({ alias: 'entry' });
}

@Component({
  selector: 'app-project',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.featured]': 'p().featured' },
  template: `
    <div class="top">
      <span class="tile"><app-icon [name]="p().icon" /></span>
      <p class="kicker">{{ p().kicker }}</p>
    </div>
    <h4>{{ p().name }}</h4>
    <p class="summary">{{ p().summary }}</p>
    @if (p().stats; as stats) {
      <ul class="stats">@for (s of stats; track s) { <li>{{ s }}</li> }</ul>
    }
    <ul class="tags">@for (t of p().tags; track t) { <li>{{ t }}</li> }</ul>
    <div class="links">
      @for (l of p().links; track l.href) {
        <a [href]="l.href" target="_blank" rel="noopener"><app-icon [name]="l.icon" />{{ l.label }}</a>
      }
    </div>
  `,
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  readonly p = input.required<Project>({ alias: 'project' });
}
