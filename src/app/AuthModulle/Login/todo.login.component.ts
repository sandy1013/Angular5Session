import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserSaveModel } from "./Models/todo.user.model";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { StorageService } from "../../Shared/Services/todo.storage.service";

@Component({
    selector: 'todo-login',
    templateUrl: 'todo.login.component.html',
    styleUrls: ['todo.login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    userDetails: UserSaveModel = {
        email: null,
        password: null
    };
    errors = {
        valid: false,
        msg: null,
        controls: {
            email: {
                required: false,
                email: false
            },
            password: {
                required: false
            }
        }
    }

    constructor(private fb: FormBuilder, private http: Http, private router: Router, private storage: StorageService) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required]]
        });

        // this.loginForm.valueChanges.subscribe(() => {
        //     this.validate(this.loginForm);
        // });
    }

    validate(form: FormGroup) {
        this.errors.valid = true;
        this.errors.msg = null;
        // tslint:disable-next-line:forin
        for (const control in this.errors.controls) {
            // tslint:disable-next-line:forin
            for (const err_type in this.errors.controls[control]) {
                if (form.controls[control].errors) {this.errors.valid = false; }
                try {
                    this.errors.controls[control][err_type] = (form.controls[control].errors[err_type]) ? true : false; 
                }
                // tslint:disable-next-line:one-line
                catch (e) { this.errors.controls[control][err_type] = false; }
            }
        }

        if(!this.errors.valid) { return; }
    }

    onLogin() {
        this.validate(this.loginForm);

        if (this.loginForm.valid && this.errors.valid) {
            this.userDetails.email = this.loginForm.value.email;
            this.userDetails.password = this.loginForm.value.password;

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');

            this.http.post('/api/login', this.userDetails, {
                headers: headers
            })
            //.map(response => response.json())
            .subscribe((response) => {
                const payload = response.json();
                const headers = response.headers;
                if (payload.success) {
                    this.storage.store('token', headers.get('x-auth'), false);
                    this.router.navigate(['todo']);
                }
            }, (err) => {
                const payload = err.json();
                this.errors.valid = false;
                this.errors.msg = payload.err_msg;
                console.log(payload.err_msg);
            });
        }
    }
}