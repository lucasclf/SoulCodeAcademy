import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Directive({
  selector: '[validaNumero]',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumeroDirective,
      multi: true
    }
  ]
})
export class NumeroDirective {

  OnTouched: any;
  OnChange: any;


  constructor(private el?: ElementRef) { }


  @HostListener('keyup', ['$event']) onKeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.OnChange(valor);

  }

  registerOnChange(fn: any): void {
    this.OnChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }


}
