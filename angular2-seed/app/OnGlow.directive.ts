import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGlow]',
    host: {
        '(click)': 'onclick()',
        '(blur)':'onBlur()'
    }
})
export class onGlowDirtective{

    constructor(private ele: ElementRef, private render: Renderer) {

    }
    onclick() {
        //this.render.setElementStyle(this.ele, "width", "200px")
        this.render.setElementStyle(this.ele.nativeElement, 'width', "500px");
    }
    onBlur() {
        this.render.setElementStyle(this.ele.nativeElement, "width", "200px")
    }
}