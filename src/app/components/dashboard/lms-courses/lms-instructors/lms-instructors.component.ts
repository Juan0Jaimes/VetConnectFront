import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-lms-instructors',
    templateUrl: './lms-instructors.component.html',
    styleUrls: ['./lms-instructors.component.scss']
})
export class LmsInstructorsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}