import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { StorageService } from "../Services/todo.storage.service";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private store: StorageService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedReq = req.clone({headers: req.headers.set('x-auth', this.store.retrive('token', false))});
        return next.handle(copiedReq);
      }
}
