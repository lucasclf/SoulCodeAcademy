import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskConcluded]'
})
export class TaskConcludedDirective implements OnInit{

  @Input() taskConcluded: boolean

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if(this.taskConcluded) {
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }

}
