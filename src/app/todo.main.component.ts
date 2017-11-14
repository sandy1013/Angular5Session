import { Component, Renderer2, ElementRef } from "@angular/core";

@Component({
    selector: 'main-component',
    templateUrl: 'todo.main.component.html'
})
export class MainComponent {
    menuState: boolean;
    
    constructor(private renderer: Renderer2) {}

    onMenu(menu: ElementRef) {
        this.menuState = !this.menuState;
        if (this.menuState) {
            this.renderer.addClass(menu, 'show');
        } else {
            this.renderer.removeClass(menu, 'show');
        }
    }
}