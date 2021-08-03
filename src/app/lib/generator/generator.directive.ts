import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';

import { IComponent, IComponentConfig } from './../config';
import { getComponent } from '.';

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
      // Load component name (string) from a mapping function
      const componentName = getComponent(componentConfig?.name);
      if (!!componentName) {
        // Lazy load the component
        const loader = await import(`./../../lib/${componentConfig.name}/index`);
        // Get the component class
        const component = loader[componentName];
        // Build the component factory resolver object
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(component);
        // Build the component
        const componentInstance = this.viewContainerRef.createComponent(componentFactory);
        // Pass the configuration value to the class member object
        componentInstance.instance.config = componentConfig;
        componentInstance.changeDetectorRef.detectChanges();
      }
    }
  }
}
