import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from "./shared/notification/notification.component";
import { PopupContainerComponent } from "./shared/popup-container/popup-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationComponent, PopupContainerComponent],
  template: `
    <app-notification />
    <router-outlet />
    <popup-container>
  `,
  styles: [],
})
export class AppComponent {

}
