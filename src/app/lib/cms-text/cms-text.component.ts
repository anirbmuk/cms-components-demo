import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IComponentConfig, IComponent } from './../config';

@Component({
  selector: 'cms-text',
  templateUrl: './cms-text.component.html',
  styleUrls: ['./cms-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsTextComponent implements IComponentConfig {
  config?: IComponent;
}
