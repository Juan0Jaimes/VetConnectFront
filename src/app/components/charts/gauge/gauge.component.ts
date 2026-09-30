import { Component } from '@angular/core';

@Component({
    selector: 'app-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {

    markerConfig = {
        "0": { color: '#555', size: 8, label: '0', type: 'line'},
        "15": { color: '#555', size: 4, type: 'line'},
        "30": { color: '#555', size: 8, label: '30', type: 'line'},
        "40": { color: '#555', size: 4, type: 'line'},
        "50": { color: '#555', size: 8, label: '50', type: 'line'},
        "60": { color: '#555', size: 4, type: 'line'},
        "70": { color: '#555', size: 8, label: '70', type: 'line'},
        "85": { color: '#555', size: 4, type: 'line'},
        "100": { color: '#555', size: 8, label: '100', type: 'line'},
    }

    percentageValue: (value: number) => string;

    gaugeValues: any = {
        1: 100,
        2: 50,
        3: 50,
        4: 50,
        5: 50,
        6: 50,
        7: 50,
    };

}