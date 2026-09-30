import { Component } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

    formatLabel(value: number): string {
        if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }

}