import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    colorControl = new FormControl('primary' as ThemePalette);

    hide = true;

}