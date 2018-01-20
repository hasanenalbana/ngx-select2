import {Directive,  ElementRef,  OnChanges, Input} from '@angular/core';
import {NgControl} from "@angular/forms";

declare var require: any
const $ = require('jquery');

@Directive({
    selector: '[select2]'
})


export class Select2Directive implements OnChanges{
    @Input() ngModel: any;
    private value: any;
    public multiple: boolean = false;
    private elementId: string;
    private select2: any = null;

    constructor(private el: ElementRef, private ngControl: NgControl) {

    }

    ngAfterViewInit(){
        this.elementId = this.el.nativeElement.id;
        this.multiple = this.el.nativeElement.multiple;
        if (! $('#'+this.elementId).hasClass("select2-hidden-accessible")) {
            this.select2 = $('#'+this.elementId).select2();
            this.select2.val(null).trigger('change');
            this.subscribeToChanges();
        }
    }

    removeEmptyValues(): void{
        if (!this.value) return;
        let i = this.value.indexOf("");
        if (i>=0)
            this.value.splice(i,1);
    }

    subscribeToChanges(): void{
        $('#'+this.elementId).on("select2:select",(ev: any) => {
            let id: any = ev['params']['data'].id;
                this.value = id;
                this.ngControl.control.patchValue(id);
                this.ngModel = id;
            });
    }

    ngOnChanges(changes){
        if (changes.ngModel){
            this.value = changes.ngModel.currentValue;
            $('#'+this.elementId).select2('val',[this.value]);
        }
    }


}
