import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulo]',
})
export class TituloDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    console.log(el.nativeElement.baseURI);
  }
  ngAfterViewInit() {
    this.el.nativeElement.firstChild.firstChild.childNodes.forEach(
      (element: any) => {
        element.style && this.renderer.setStyle(element, 'font-size', '20px');
      }
    );
  }
}
