export function getComponent(componentRef: string): string | null {
  if (componentRef === 'cms-text') {
    return 'CmsTextComponent';
  } else if (componentRef === 'cms-headline') {
    return 'CmsHeadlineComponent';
  } else if (componentRef === 'cms-subheadline') {
    return 'CmsSubheadlineComponent';
  } else if (componentRef === 'cms-list') {
    return 'CmsListComponent';
  } else if (componentRef === 'cms-address') {
    return 'CmsAddressComponent';
  }
  return null;
}
