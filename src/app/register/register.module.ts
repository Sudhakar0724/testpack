import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { DragDirective } from './../dragDrop.directive';

@NgModule({
  declarations: [RegisterComponent,DragDirective],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports:[
    RegisterComponent
  ],
})
export class RegisterModule { }
