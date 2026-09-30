import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-fm-documents',
    templateUrl: './fm-documents.component.html',
    styleUrls: ['./fm-documents.component.scss']
})
export class FmDocumentsComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    openCreateDocumentDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateDocumentDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-document-dialog-box',
    templateUrl: '../create-document-dialog-box.html',
})
export class CreateDocumentDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateDocumentDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}