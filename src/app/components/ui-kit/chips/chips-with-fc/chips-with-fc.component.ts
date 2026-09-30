import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-chips-with-fc',
    templateUrl: './chips-with-fc.component.html',
    styleUrls: ['./chips-with-fc.component.scss']
})
export class ChipsWithFcComponent {

    keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
    formControl = new FormControl(['angular']);

    removeKeyword(keyword: string) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }

        // Clear the input value
        event.chipInput!.clear();
    }

}