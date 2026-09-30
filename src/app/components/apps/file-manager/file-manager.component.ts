import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-file-manager',
    templateUrl: './file-manager.component.html',
    styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {

    constructor(
        public dialog: MatDialog,
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    openCreateFolderDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateFolderDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

    openCreateDocumentDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateDocumentDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-folder-dialog-box',
    templateUrl: './create-folder-dialog-box.html',
})
export class CreateFolderDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateFolderDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}

@Component({
    selector: 'create-document-dialog-box',
    templateUrl: './create-document-dialog-box.html',
})
export class CreateDocumentDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateDocumentDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}