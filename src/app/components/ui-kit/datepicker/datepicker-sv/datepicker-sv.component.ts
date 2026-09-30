import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-datepicker-sv',
    templateUrl: './datepicker-sv.component.html',
    styleUrls: ['./datepicker-sv.component.scss']
})
export class DatepickerSvComponent {

    date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());

}