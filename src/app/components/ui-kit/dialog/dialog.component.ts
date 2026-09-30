import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    constructor(public dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
    
}

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogElementsExampleDialog>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}