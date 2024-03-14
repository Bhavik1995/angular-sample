import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './notification.component.html',
  template: `<div class="alert alert success" [ngClass]="{fadeOut: displayNotify}">
                  This website uses cookies.
                <div class="close"><button class="btn" (click)="closeButton()">X</button></div>
              </div>
              `,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align: center;}",".close{float:right, margin-top: -15px}",".fadeOut{visibility: hidden; opacity:0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {

  displayNotify: boolean = false;

  closeButton(){
    this.displayNotify = true;    
  }
}
