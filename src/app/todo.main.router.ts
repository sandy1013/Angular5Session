import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './todo.main.component';

import { TodoListComponent } from './TodoList/todo.list.component';
import { CompletedListComponent } from './CompletedList/todo.completed.component';
import { TodoDetailComponent } from './TodoDetail/todo.detail.component';

const mainRoutes: Routes = [
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: TodoListComponent},
    { path: 'detail/:type/:id' , component: TodoDetailComponent},
    { path: 'complete', component: CompletedListComponent},
    {path:'**', redirectTo:'/todo'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class MainRouter {

}
  