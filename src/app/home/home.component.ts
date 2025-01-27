import { Component } from '@angular/core';
import { AsideMenuComponent } from "./aside-menu/aside-menu.component";

@Component({
  selector: 'app-home',
  imports: [AsideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
