import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sheet-modal',
  templateUrl: './sheet-modal.component.html',
  styleUrls: ['./sheet-modal.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({        
        transform: 'translateY(0)',
      })),
      state('closed', style({
        transform: 'translateY(100vh)',
      })),
      transition('open => closed', [
        animate('0.5s ease-in')
      ]),
      transition('closed => open', [
        animate('0.5s ease-out')
      ]),
    ]),
  ],
})
export class SheetModalComponent {

  @Input() isOpen = false;
  constructor() { }

  public toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

}
