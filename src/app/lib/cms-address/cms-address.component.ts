import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IComponentConfig, IComponent } from './../config';

@Component({
  selector: 'cms-address',
  templateUrl: './cms-address.component.html',
  styleUrls: ['./cms-address.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsAddressComponent implements IComponentConfig, OnInit {

  config?: IComponent;
  formGroup: FormGroup = new FormGroup({});

  controls: string[] = [];

  ngOnInit(): void {
    const formConfig = this.config?.address;
    if (!formConfig) {
      throw new Error(`An address component must have a defined address configuration`);
    }
    this.controls = Object.keys(formConfig).filter(control => control !== 'zip');
    const group: {
      [key: string]: FormControl
    } = {};
    for (const control of this.controls) {
      group[control] = new FormControl();
    }
    group.zip = new FormControl();
    this.formGroup = new FormGroup(group);
  }

  saveForm(): void {
    console.log(this.formGroup.value);
  }
}
