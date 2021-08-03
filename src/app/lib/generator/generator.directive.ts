import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';

import { IComponent, IComponentConfig } from './../config';
import { getComponent } from './mapper';

@Directive({
  selector: '[cmsContent], cmsContent'
})
export class GeneratorDirective {

  @Input() set cmsContent(config: IComponent) {
    this.viewContainerRef?.clear();
    this.createComponent(config);
  }

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef) { }

  private async createComponent<T extends IComponentConfig>(componentConfig?: IComponent): Promise<void> {
    if (!!componentConfig) {
      const componentName = getComponent(componentConfig?.name);
      if (!!componentName) {
        const loader = await import(`./../../lib/${componentConfig.name}/index`);
        const component = loader[componentName];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(component);
        const componentInstance = this.viewContainerRef.createComponent(componentFactory);
        componentInstance.instance.config = componentConfig;
        componentInstance.changeDetectorRef.detectChanges();
      }
    }
  }
}
