import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SheetModalComponent } from '../sheet-modal/sheet-modal.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule
  ],
  declarations: [SheetModalComponent],
  exports: [SheetModalComponent]
})
export class SheetModalModule { }
