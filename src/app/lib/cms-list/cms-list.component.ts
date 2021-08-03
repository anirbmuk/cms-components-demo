import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IComponentConfig, IComponent } from '../config';

@Component({
  selector: 'cms-text',
  templateUrl: './cms-list.component.html',
  styleUrls: ['./cms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsListComponent implements IComponentConfig {
  config?: IComponent;
}
