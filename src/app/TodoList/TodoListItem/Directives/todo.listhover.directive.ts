import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input, EventEmitter, Output, OnDestroy } from "@angular/core";
import { Observable, Observer, Subscription } from "rxjs/RX";
import "rxjs/RX";

@Directive({
    selector: '[listHover]'
})
export class ListHoverDirective implements OnDestroy{
    customObsSubscription: Subscription;
    timerSubscription: Subscription;

    constructor(private element: ElementRef ,private renderer2: Renderer2) {}

    @Input() highlightColor: string;
    @Output() listDelete = new EventEmitter<any>();

    @HostBinding('style.color') color: string; 

    @HostListener('click') onMosueClick() {

        this.color = "red";

        // #region observable_region
        // Observable Logic
        const myObservable = Observable.create((observer: Observer<string>) => {
            observer.next('1');

            setTimeout(() => {
                observer.next('2');
            },1000);

            setTimeout(() => {
                observer.error('3');
            },2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });

        this.customObsSubscription = myObservable.subscribe((success) => {
            console.log("success : " + success);
        }, error => {
            console.log("error : " + error);
        }, () => {
            console.log("completed");
        })

        const timerObservable = Observable.interval(1000);

        this.timerSubscription = timerObservable.subscribe((number: number) => {
            console.log("Timer Tick : " + number);
        }, (error: any) => {
            console.log(error);
        });
        // #endregion

        setTimeout(() => {
            this.listDelete.emit();
        }, 4000);
    }
 
    @HostListener('mouseenter') onMouseEnter () {
        this.renderer2.setStyle(this.element.nativeElement, 'background', this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave () {
        this.renderer2.setStyle(this.element.nativeElement, 'background', 'white');
    }

    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
}