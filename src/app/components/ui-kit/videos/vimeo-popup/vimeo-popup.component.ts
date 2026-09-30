import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-vimeo-popup',
    templateUrl: './vimeo-popup.component.html',
    styleUrls: ['./vimeo-popup.component.scss']
})
export class VimeoPopupComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    openCreateVideoDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateVideoDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'video-dialog',
    templateUrl: './video-dialog.html',
})
export class CreateVideoDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateVideoDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}