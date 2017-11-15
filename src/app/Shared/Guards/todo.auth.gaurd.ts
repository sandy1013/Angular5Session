import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { StorageService } from "../Services/todo.storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
    valid = false;

    constructor(private storageService: StorageService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.storageService.retrive('token', false)) {
            this.valid = true;
        } else {
            this.router.navigate(['login']);
            this.valid = false;
        }
        return this.valid;
    }
}