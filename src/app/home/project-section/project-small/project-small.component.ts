import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface GitHubLink {
  name: string;
  link: string;
}

@Component({
  selector: 'app-project-small',
  imports: [NgFor],
  templateUrl: './project-small.component.html',
  styleUrl: './project-small.component.scss'
})
export class ProjectSmallComponent {
  @Input({ required: true }) imgSrc!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) type!: string;
  @Input({ required: true }) description!: string;

  @Input() github: GitHubLink[] = [];
  @Input() live: string | null = null;
}
