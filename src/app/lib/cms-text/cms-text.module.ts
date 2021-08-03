import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsTextComponent } from './cms-text.component';

@NgModule({
  declarations: [
    CmsTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmsTextComponent
  ]
})
export class CmsTextModule {}
