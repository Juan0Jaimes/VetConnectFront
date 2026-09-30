import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ar-browser-used-traffic-reports',
    templateUrl: './ar-browser-used-traffic-reports.component.html',
    styleUrls: ['./ar-browser-used-traffic-reports.component.scss']
})
export class ArBrowserUsedTrafficReportsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}