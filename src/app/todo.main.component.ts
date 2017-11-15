import { Component, Renderer2, ElementRef } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { StorageService } from "./Shared/Services/todo.storage.service";

@Component({
    selector: 'main-component',
    templateUrl: 'todo.main.component.html'
})
export class MainComponent {
    menuState: boolean;

    constructor(private renderer: Renderer2, private http: HttpClient, private store: StorageService, private router: Router) {}

    onLogout() {
        this.http.get<any>('/api/logout', {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('all', 'false')
        })
        .subscribe((response: any) => {
            if (response.success) {
                this.store.deleteAll();
                this.router.navigate(['/login']);
            }
        }, (err) => {
            console.log(err);
        });
    }

    onMenu(menu: ElementRef) {
        this.menuState = !this.menuState;
        if (this.menuState) {
            this.renderer.addClass(menu, 'show');
        } else {
            this.renderer.removeClass(menu, 'show');
        }
    }
}
