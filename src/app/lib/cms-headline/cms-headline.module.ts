import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsHeadlineComponent } from './cms-headline.component';

@NgModule({
  declarations: [
    CmsHeadlineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmsHeadlineComponent
  ]
})
export class CmsHeadlineModule {}
