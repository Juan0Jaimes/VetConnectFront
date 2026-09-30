import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-date-range-pfi',
    templateUrl: './date-range-pfi.component.html',
    styleUrls: ['./date-range-pfi.component.scss']
})
export class DateRangePfiComponent {

    range = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });

}