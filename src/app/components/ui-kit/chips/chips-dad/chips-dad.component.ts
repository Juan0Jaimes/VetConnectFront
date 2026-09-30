import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Vegetable {
    name: string;
}

@Component({
    selector: 'app-chips-dad',
    templateUrl: './chips-dad.component.html',
    styleUrls: ['./chips-dad.component.scss']
})
export class ChipsDadComponent {

    vegetables: Vegetable[] = [
        {name: 'apple'},
        {name: 'banana'},
        {name: 'strawberry'},
        {name: 'orange'},
        {name: 'kiwi'},
    ];

    drop(event: CdkDragDrop<Vegetable[]>) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }

}