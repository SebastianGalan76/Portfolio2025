import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [NgClass],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() description: string | null = null;
  @Input() colorStyle: string = "";
}
