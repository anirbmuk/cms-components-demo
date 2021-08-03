import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

import { IComponent } from './../lib/config/component.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: IComponent[] = [
    {
      name: "cms-headline",
      headline: "CMS Headline"
    },
    {
      name: "cms-text",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      name: "cms-subheadline",
      subheadline: "CMS Sub-Headline"
    },
    {
      name: "cms-list",
      list: [
        "Angular",
        "Code-splitting",
        "ViewContainerRef",
        "ComponentFactoryResolver"
      ]
    },
    {
      name: "cms-subheadline",
      subheadline: "Address"
    },
    {
      name: "cms-address",
      address: {
        zip: 'Zip',
        addressLine1: 'Address Line 1',
        addressLine2: 'Address Line 2'
      }
    }
  ];

  readonly data$: Observable<IComponent[]> = of(this.data).pipe(startWith([]), delay(500))
}
