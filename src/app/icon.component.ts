// ============================================================
// icon.component.ts — inline SVG icons (no icon font, nothing to load)
// ============================================================
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github' | 'linkedin' | 'mail' | 'download' | 'pin' | 'chat' | 'cap' | 'ext'
  | 'sun' | 'moon' | 'chart' | 'trophy' | 'phone' | 'database' | 'layers' | 'game'
  | 'route' | 'code' | 'wrench' | 'arrow';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `:host{ display:inline-flex; width:var(--icon, 18px); height:var(--icon, 18px); flex:none; }
           svg{ width:100%; height:100%; }`,
  template: `
    @switch (name()) {
      @case ('github') {
        <svg viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      }
      @case ('linkedin') {
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
      }
      @default {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          @switch (name()) {
            @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/> }
            @case ('download') { <path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/> }
            @case ('pin') { <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/> }
            @case ('chat') { <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/> }
            @case ('cap') { <path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/> }
            @case ('ext') { <path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/> }
            @case ('sun') { <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/> }
            @case ('moon') { <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/> }
            @case ('chart') { <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/> }
            @case ('trophy') { <path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/> }
            @case ('phone') { <rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/> }
            @case ('database') { <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/> }
            @case ('layers') { <path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/> }
            @case ('game') { <rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6"/><circle cx="18" cy="13.5" r=".6"/> }
            @case ('route') { <circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7"/> }
            @case ('code') { <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/> }
            @case ('wrench') { <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/> }
            @case ('arrow') { <path d="M5 12h14M13 6l6 6-6 6"/> }
          }
        </svg>
      }
    }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
