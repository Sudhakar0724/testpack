import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    NgxPrintModule
  ],
  exports:[
    ContactusComponent
  ]
})
export class ContactusModule { }
