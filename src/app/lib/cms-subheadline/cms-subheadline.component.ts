import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IComponentConfig, IComponent } from './../config';

@Component({
  selector: 'cms-subheadline',
  templateUrl: './cms-subheadline.component.html',
  styleUrls: ['./cms-subheadline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsSubheadlineComponent implements IComponentConfig {
  config?: IComponent;
}
