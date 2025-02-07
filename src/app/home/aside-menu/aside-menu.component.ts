import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PopupService } from '../../service/popup.service';
import { SelectCVPopupComponent } from '../../shared/popup-container/popup/select-cvpopup/select-cvpopup.component';

@Component({
  selector: 'app-aside-menu',
  imports: [NgClass],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent {
  isActive: boolean = false;

  constructor(
    private popupService: PopupService
  ) { }

  openSelectCVPopup() {
    this.popupService.showPopup(SelectCVPopupComponent, [], []);
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isActive = false;
    }
  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
