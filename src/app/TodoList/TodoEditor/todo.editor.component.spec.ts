import { TodoEditorComponent } from "./todo.editor.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { TestabilityRegistry } from "@angular/core/src/testability/testability";
import { ReactiveFormsModule } from "@angular/forms";
import { TodoCommunicationService } from "../Services/todo.communication.service";
import { TodoLoggingService } from "../../Shared/Services/todo.logging.service";


describe('EditorComponent', () => {
    let component: TodoEditorComponent;
    let fixture: ComponentFixture<TodoEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoEditorComponent],
            imports: [ReactiveFormsModule],
            providers: [TodoCommunicationService, TodoLoggingService!]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should create a formgroup', () => {
        fixture.detectChanges();
        let form = component.todoForm.value;
        expect(form.title).toBe("Test Title");
        expect(form.description).toBe("Test Description");
    });

    it('should be a valid form', () => {
        fixture.detectChanges();
        let truthy = component.validate();
        expect(truthy).toBeTruthy();
    });

    it('should be a invalid valid form', () => {
        component.todoForm.reset();
        fixture.detectChanges();
        let truthy = component.validate();
        expect(truthy).toBeFalsy();
        expect(component.todoForm.value).toEqual({title: null, description: null});
    });
});