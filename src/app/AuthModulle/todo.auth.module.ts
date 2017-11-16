import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './Register/todo.register.component';
import { LoginComponent } from './Login/todo.login.component';
import { PasswordStrengthDirective } from './Register/Directives/todo.password.directive';

const mainRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];

@NgModule({
    declarations: [LoginComponent, RegisterComponent, PasswordStrengthDirective],
    imports: [CommonModule, ReactiveFormsModule, HttpModule, RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class AuthModule {

}
