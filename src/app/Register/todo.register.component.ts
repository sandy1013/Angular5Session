import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Http, Headers, RequestOptions } from '@angular/http';

import { RegisterSaveModel } from "./Models/todo.register.model";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";

@Component({
    selector: 'todo-register',
    templateUrl: 'todo.register.component.html',
    styleUrls: ['todo.register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    registerData: RegisterSaveModel = {
        username: null,
        email: null,
        password: null,
        cloudsync: false    
    };

    errors = {
        valid: false,
        msg: null,
        controls: {
            username : {
                required: false,
                minlength: false,
            },
            email : {
                required: false,
                email: false
            },
            password: {
                required: false
            },
            confirm: {
                required: false
            },
            cloudsync: {
                required: false
            }
        }
    }

    constructor(private fb: FormBuilder, private http: Http, private router: Router) {}

    ngOnInit() {
        this.registerForm = this.fb.group({
            'username': [null, [Validators.required, Validators.minLength(5)]],
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required]],
            'confirm': [null, [Validators.required]],
            'cloudsync': [false]
        });
    }

    validate(form: FormGroup) {
        this.errors.valid = true;
        this.errors.msg = null;
        for (const control in this.errors.controls) {
            for (const err_type in this.errors.controls[control]) { 
                if(form.controls[control].errors) {this.errors.valid = false; }
                try { 
                    this.errors.controls[control][err_type] = (form.controls[control].errors[err_type]) ? true : false; 
                } 
                catch(e) { this.errors.controls[control][err_type] = false; }
            }
        }

        if(!this.errors.valid) { return; }
    }

    onRegister() {
        this.validate(this.registerForm);

        if(this.registerForm.valid && this.errors.valid) {
            this.registerData.username = this.registerForm.value.username;
            this.registerData.email = this.registerForm.value.email;
            this.registerData.password = this.registerForm.value.password;
            this.registerData.cloudsync = this.registerForm.value.cloudsync;

            let headers = new Headers();
            headers.set('Content-Type', 'application/json');
            let options = new RequestOptions({
                headers: headers
            });

            this.http.post('/api/register', this.registerData, options)
            .map(response => response.json())
            .subscribe((response) => {
                if(response.success) {
                    this.registerForm.reset();
                    this.router.navigate(['login']);
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
}