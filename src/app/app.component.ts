import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntryComponent, ProjectComponent } from './cards';
import { AWARDS, EDUCATION, PROFILE, PROJECTS, SKILLS, TEAMS, WORK } from './data';
import { IconComponent } from './icon.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, IconComponent, EntryComponent, ProjectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly profile = PROFILE;
  readonly work = WORK;
  readonly teams = TEAMS;
  readonly projects = PROJECTS;
  readonly education = EDUCATION;
  readonly awards = AWARDS;
  readonly skills = SKILLS;
  readonly year = new Date().getFullYear();
  // the hero's "right now" column reads these straight from data.ts, so the site can never disagree with the resume
  readonly next = WORK.find((e) => e.upcoming);              // Jane Street
  readonly previous = WORK.find((e) => !e.upcoming);         // Culture Amp
  readonly built = PROJECTS.find((p) => !!p.featured && !!p.image) ?? PROJECTS[0];   // Fills and Fees
}
