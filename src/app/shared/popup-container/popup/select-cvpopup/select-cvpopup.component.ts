import { Component } from '@angular/core';
import { PopupComponent } from '../popup.component';

@Component({
  selector: 'app-select-cvpopup',
  imports: [],
  templateUrl: './select-cvpopup.component.html',
  styleUrl: './select-cvpopup.component.scss'
})
export class SelectCVPopupComponent {
  constructor(
    public parent: PopupComponent
  ) { }
}
