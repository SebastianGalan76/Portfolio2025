import { Component } from '@angular/core';
import { AsideMenuComponent } from "./aside-menu/aside-menu.component";
import { HeroComponent } from "./hero/hero.component";
import { StackComponent } from "./stack-section/stack-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { ProjectSectionComponent } from "./project-section/project-section.component";

@Component({
  selector: 'app-home',
  imports: [AsideMenuComponent, HeroComponent, StackComponent, ContactSectionComponent, ProjectSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
