import { IComponent, IComponentConfig } from './lib/config/component.config';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly dataSvc: DataService) {}

  readonly data$: Observable<IComponent[]> = this.dataSvc.data$;

}
