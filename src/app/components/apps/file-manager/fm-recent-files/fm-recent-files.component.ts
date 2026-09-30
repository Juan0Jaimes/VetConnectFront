import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fm-recent-files',
    templateUrl: './fm-recent-files.component.html',
    styleUrls: ['./fm-recent-files.component.scss']
})
export class FmRecentFilesComponent {

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

    openCreateFileDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateFileDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-file-dialog-box',
    templateUrl: './create-file-dialog-box.html',
})
export class CreateFileDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateFileDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}