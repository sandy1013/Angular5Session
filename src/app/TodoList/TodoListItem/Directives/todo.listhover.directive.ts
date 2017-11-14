import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[listHover]'
})
export class ListHoverDirective {
    constructor(private element: ElementRef ,private renderer2: Renderer2) {}

    @Input() highlightColor: string;
    @Input() textColor: string;

    @Output() listDelete = new EventEmitter<any>();

    @HostBinding('style.color') color: string; 

    @HostListener('click') onMosueClick() {

        this.color = this.textColor;

        setTimeout(() => {
            this.listDelete.emit();
        }, 1000);
    }
 
    @HostListener('mouseenter') onMouseEnter () {
        this.renderer2.setStyle(this.element.nativeElement, 'background', this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave () {
        this.renderer2.setStyle(this.element.nativeElement, 'background', 'white');
    }
}