import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsListComponent } from './cms-list.component';

@NgModule({
  declarations: [
    CmsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmsListComponent
  ]
})
export class CmsListModule {}
