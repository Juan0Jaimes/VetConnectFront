import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

    files: File[] = [];

    onSelect(event:any) {
        this.files.push(...event.addedFiles);
    }

    onRemove(event:any) {
        this.files.splice(this.files.indexOf(event), 1);
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}