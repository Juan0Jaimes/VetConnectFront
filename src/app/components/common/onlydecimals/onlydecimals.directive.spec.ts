import { ElementRef } from '@angular/core';
import { OnlydecimalsDirective } from './onlydecimals.directive';

describe('OnlydecimalsDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef({ value: '' });
    const directive = new OnlydecimalsDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
