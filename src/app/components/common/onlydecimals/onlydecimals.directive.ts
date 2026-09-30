import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlydecimals]'
})
export class OnlydecimalsDirective {

  @Input() onlyNumbersWithDecimals: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    let processedValue = this.onlyNumbersWithDecimals ? this.processDecimal(initialValue) : this.processInteger(initialValue);
    this.el.nativeElement.value = processedValue;
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  private processInteger(value: string): string {
    return value.replace(/[^0-9]*/g, '');
  }

  private processDecimal(value: string): string {
    // Permite números enteros o decimales con un punto o coma
    const decimalSeparator = '.'; // Puedes cambiar a ',' según la configuración regional
    const regex = new RegExp(`[^0-9${decimalSeparator}]`, 'g');
    
    // Elimina todos los caracteres no permitidos
    let sanitizedValue = value.replace(regex, '');

    // Si hay más de un punto, elimina los adicionales
    const parts = sanitizedValue.split(decimalSeparator);
    if (parts.length > 2) {
      sanitizedValue = parts.slice(0, 2).join(decimalSeparator);
    }

    return sanitizedValue;
  }
}