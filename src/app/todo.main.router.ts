import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { MainComponent } from './todo.main.component';
import { TodoListComponent } from './TodoList/todo.list.component';
import { CompletedListComponent } from './CompletedList/todo.completed.component';
import { TodoDetailComponent } from './TodoDetail/todo.detail.component';
import { LoginComponent } from './Login/todo.login.component';
import { RegisterComponent } from './Register/todo.register.component';

import { AuthGuard } from './Shared/Guards/todo.auth.gaurd';

const mainRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'todo', component: TodoListComponent, canActivate: [AuthGuard]},
    { path: 'detail/:type/:id' , component: TodoDetailComponent, canActivate: [AuthGuard]},
    { path: 'complete', component: CompletedListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '/todo'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class MainRouter {

}
