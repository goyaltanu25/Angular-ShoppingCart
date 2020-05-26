import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective{
  
  constructor(private elem: ElementRef) { }

  ngOnInit(){
    // console.log(this.elem.nativeElement.style);
    
  }

  @HostListener('mouseenter') toggleborder(){
    this.elem.nativeElement.style.border = '1px solid red';
  }

  @HostListener('mouseover') toggleback(){
    this.elem.nativeElement.style.border = '1px solid #ececec';
  }
}
