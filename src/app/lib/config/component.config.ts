export interface IComponentConfig {
  config?: IComponent;
}

export interface IComponent {
  name: string;
  id?: string;
  headline?: string;
  subheadline?: string;
  text?: string;
  list?: string[];
  address?: IAddressForm;
}

export interface IAddressForm {
  zip: string;
  [key: string]: any;
}
