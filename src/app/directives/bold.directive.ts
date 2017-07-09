// import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

// @Directive({
//     selector: '[app-bold]',

// })

// export class BoldDirective {
//     @Input('app-bold') elt: ElementRef;

//     constructor(
//         private elRef: ElementRef,
//         private rendrer: Renderer2
//     ) {
//         this.rendrer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
//     }

//     @HostListener('mouseenter') onMouseEnter() {
//         this.setFontWeight('bold');
//     }
//     @HostListener('mouseleave') onMouseLeave() {
//         this.setFontWeight('normal');
//     }
//     private setFontWeight(val: string) {
//         this.rendrer.setStyle(this.elRef.nativeElement, 'font-weight', val);
//     }
// }
