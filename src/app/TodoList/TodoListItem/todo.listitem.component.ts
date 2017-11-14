import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.listitem.component.html',
    styleUrls: ['todo.listitem.component.scss']
})
export class TodoListItemComponent {
    @Input() todo: {title: string, description: string, createdAt: Date};
    @Output() onDelete = new EventEmitter<{title: string, description: string, createdAt: Date}>();

    onListItemClick() {
        this.onDelete.emit(this.todo);
    };
}
