import { ElementRef } from '@angular/core';
import { OnlynumbersDirective } from './onlynumbers.directive';

describe('OnlynumbersDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef({ value: '' });
    const directive = new OnlynumbersDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
