import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-date-range-pcr',
    templateUrl: './date-range-pcr.component.html',
    styleUrls: ['./date-range-pcr.component.scss']
})
export class DateRangePcrComponent {

    campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
    });

}