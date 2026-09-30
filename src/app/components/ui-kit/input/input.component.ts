import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    value = 'Clear me';

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}