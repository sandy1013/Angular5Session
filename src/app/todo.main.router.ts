import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './todo.main.component';

import { TodoListComponent } from './TodoList/todo.list.component';

const mainRoutes: Routes = [
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: TodoListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class MainRouter {

}
  