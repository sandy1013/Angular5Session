import { Component } from "@angular/core";
import { TodoCommunicationService } from "../TodoList/Services/todo.communication.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { TodoSaveModel } from "../TodoList/Models/todo.model";

@Component({
    selector: 'todo-detail',
    templateUrl: 'todo.detail.component.html',
    styleUrls: ['todo.detail.component.scss']
})
export class TodoDetailComponent {
    _id: number;
    isCompleted: boolean = false;
    selectedTodo: TodoSaveModel = {
        title: "",
        description: "",
        createdAt: null,
        _id: null
    };
    params: Params;

    constructor(private todoCommunicationService: TodoCommunicationService, private router: Router, private route: ActivatedRoute){
        this.route.params.subscribe((params: Params) => {
            this._id = parseInt(params.id);
            this.isCompleted = (params.type === 'false') ? false : true;
            if (this.isCompleted) {
                const id = this._id;
                const index = this.todoCommunicationService.completedTodos.find((todo) => {
                   return todo._id === id;
                });
                if (index) this.selectedTodo = index; else this.router.navigate(['complete']);
            } else {
                const id = this._id;
                const index = this.todoCommunicationService.todos.find((todo) => {
                    return todo._id === id;
                });
                if (index) this.selectedTodo = index; else this.router.navigate(['todo']);
            }
        });
    }

    onFinish() {
        if (!this.isCompleted) {
            this.todoCommunicationService.selectedTodo.next({
                model: this.selectedTodo,
                add: false
            });
            this.router.navigate(['todo']);
        }
    }
    
    onDelete() {
        if (this.isCompleted) {
            this.todoCommunicationService.completedTodo.next(this.selectedTodo);
            this.router.navigate(['complete']);
        }
    }
}