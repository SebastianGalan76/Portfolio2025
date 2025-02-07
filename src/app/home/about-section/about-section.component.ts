import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { PopupService } from '../../service/popup.service';
import { SelectCVPopupComponent } from '../../shared/popup-container/popup/select-cvpopup/select-cvpopup.component';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeaderComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

  constructor(
    private popupService: PopupService
  ) { }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openSelectCVPopup() {
    this.popupService.showPopup(SelectCVPopupComponent, [], []);
  }
}
