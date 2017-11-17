import { TodoListComponent } from "../todo.list.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { TodoCommunicationService } from "../Services/todo.communication.service";
import { RouterModule } from "@angular/router";
import { TodoEditorComponent } from "../TodoEditor/todo.editor.component";
import { ListHoverDirective } from "./Directives/todo.listhover.directive";
import { IfNotDirective } from "./Directives/todo.ifnot.directive";

describe('TodoListItemComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [TodoListComponent, TodoEditorComponent, ListHoverDirective, IfNotDirective],
            providers: [TodoCommunicationService],
            imports: [RouterModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        component.todos = [{
            title: "Test Title",
            description: "Test Description",
            createdAt: new Date(),
            _id: 12355123774123
        }];
        fixture.detectChanges();
    });

    it('Html should have a title', () => {
        expect(component).toBeTruthy();
    });
});