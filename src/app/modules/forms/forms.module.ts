import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { MaterialModule } from 'src/app/materils.module';
import { FormoneComponent } from './formone/formone.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormtwoComponent } from './formtwo/formtwo.component';


@NgModule({
  declarations: [
    FormoneComponent,
    FormtwoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    ToastrModule.forRoot()

  ],
  providers: [ToastrService],

})
export class FormsModule { }
