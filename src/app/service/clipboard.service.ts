import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private notificationService: NotificationService) { }

  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value).then(
      () => {
        this.notificationService.showNotification("Skopiowano " + value + " do schowka.");
      },
      (err) => {
        this.notificationService.showNotification("Wystąpił nieoczekiwany błąd.", NotificationType.ERROR);
      }
    );
  }
}
