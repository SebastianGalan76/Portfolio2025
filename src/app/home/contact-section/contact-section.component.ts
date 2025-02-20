import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { ClipboardService } from '../../service/clipboard.service';

@Component({
  selector: 'app-contact-section',
  imports: [SectionHeaderComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

  constructor(
    public clipboard: ClipboardService
  ) { }
}
