import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { Expression } from "@angular/compiler/src/output/output_ast";

@Directive({
    'selector': '[ifNot]'
})
export class IfNotDirective {
    constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {}
    
    @Input() set ifNot(conditin: boolean) {
        if(!conditin) {
            this.viewRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewRef.clear();
        }
    }
}   