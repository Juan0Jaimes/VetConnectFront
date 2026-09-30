import { Component } from '@angular/core';

export interface Section {
    name: string;
    updated: Date;
}

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    folders: Section[] = [
        {
            name: 'Photos',
            updated: new Date('1/1/23'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/23'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/23'),
        },
    ];
    notes: Section[] = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/23'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/23'),
        },
    ];

    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}