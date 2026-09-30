import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-user-activities',
    templateUrl: './user-activities.component.html',
    styleUrls: ['./user-activities.component.scss']
})
export class UserActivitiesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}