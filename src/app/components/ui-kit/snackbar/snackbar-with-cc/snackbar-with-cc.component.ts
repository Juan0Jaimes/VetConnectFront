import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-with-cc',
    templateUrl: './snackbar-with-cc.component.html',
    styleUrls: ['./snackbar-with-cc.component.scss']
})
export class SnackbarWithCcComponent {

    durationInSeconds = 5;

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
        duration: this.durationInSeconds * 1000,
        });
    }

}

@Component({
    selector: 'snack-bar-annotated-component-example-snack',
    templateUrl: './snack-bar-annotated-component-example-snack.html',
    styles: [
        `
        :host {
            display: flex;
        }
        .example-pizza-party {
            color: hotpink;
        }
    `,
    ],
})
export class PizzaPartyAnnotatedComponent {
    snackBarRef = inject(MatSnackBarRef);
}