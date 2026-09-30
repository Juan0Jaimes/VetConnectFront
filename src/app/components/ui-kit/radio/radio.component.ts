import { Component } from '@angular/core';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

    favoriteSeason: string;
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}