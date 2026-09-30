import { Component } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-with-cp',
    templateUrl: './snackbar-with-cp.component.html',
    styleUrls: ['./snackbar-with-cp.component.scss']
})
export class SnackbarWithCpComponent {

    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }

}