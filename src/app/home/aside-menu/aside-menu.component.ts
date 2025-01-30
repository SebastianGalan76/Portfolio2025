import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  imports: [NgClass],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent {
  isActive: boolean = false;

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
