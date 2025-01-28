import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value).then(
      () => {
        //TODO Show toast
      },
      (err) => {
        //TODO Show toast
      }
    );
  }
}
