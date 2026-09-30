import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-advanced-form',
    templateUrl: './advanced-form.component.html',
    styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent {

    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
    ];

    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}