import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

    fontStyleControl = new FormControl('');
    fontStyle?: string;

}