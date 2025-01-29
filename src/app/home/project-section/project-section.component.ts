import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { ProjectSmallComponent } from "./project-small/project-small.component";
import { ProjectMcListComponent } from "./project-big/project-mc-list.component";
import { ProjectMathComponent } from './project-big/project-math.component';

@Component({
  selector: 'app-project-section',
  imports: [SectionHeaderComponent, ProjectSmallComponent, ProjectMcListComponent, ProjectMathComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {

}
