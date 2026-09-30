import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-slide-toggle',
    templateUrl: './slide-toggle.component.html',
    styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {

    isChecked = true;
    formGroup = this._formBuilder.group({
        enableWifi: '',
        acceptTerms: ['', Validators.requiredTrue],
    });

    constructor(private _formBuilder: FormBuilder) {}

    alertFormValues(formGroup: FormGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }

}