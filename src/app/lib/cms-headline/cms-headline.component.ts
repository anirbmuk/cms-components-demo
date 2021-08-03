import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IComponentConfig, IComponent } from './../config';

@Component({
  selector: 'cms-headline',
  templateUrl: './cms-headline.component.html',
  styleUrls: ['./cms-headline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsHeadlineComponent implements IComponentConfig {
  config?: IComponent;
}
