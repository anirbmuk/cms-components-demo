import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsAddressComponent } from './cms-address.component';

@NgModule({
  declarations: [
    CmsAddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CmsAddressComponent
  ]
})
export class CmsAddressModule {}
