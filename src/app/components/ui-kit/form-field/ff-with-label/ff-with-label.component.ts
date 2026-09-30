import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
    selector: 'app-ff-with-label',
    templateUrl: './ff-with-label.component.html',
    styleUrls: ['./ff-with-label.component.scss']
})
export class FfWithLabelComponent {

    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto' as FloatLabelType);
    options = this._formBuilder.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
    });

    constructor(private _formBuilder: FormBuilder) {}

    getFloatLabelValue(): FloatLabelType {
        return this.floatLabelControl.value || 'auto';
    }

}