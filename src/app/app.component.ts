import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from './browser';
import { EntryComponent, ProjectComponent } from './cards';
import { AWARDS, EDUCATION, PROFILE, PROJECTS, SKILLS, TEAMS, WORK } from './data';
import { IconComponent } from './icon.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, IconComponent, EntryComponent, ProjectComponent, RevealDirective],
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
}
