import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";

@Component({
  selector: 'app-about-section',
  imports: [SectionHeaderComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
