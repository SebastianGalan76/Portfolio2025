import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from "./shared/notification/notification.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationComponent],
  template: `
    <app-notification />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {

}
