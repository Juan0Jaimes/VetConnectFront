import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sa-all-projects',
    templateUrl: './sa-all-projects.component.html',
    styleUrls: ['./sa-all-projects.component.scss']
})
export class SaAllProjectsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}