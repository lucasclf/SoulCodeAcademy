import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[patientAttend]'
})
export class PatientAttendDirective implements OnInit{

  @Input() patientAttend: boolean

  constructor( private el: ElementRef) { }

  ngOnInit() {
    if(this.patientAttend) {
      this.el.nativeElement.style.color = "purple"
    }
  }

}
