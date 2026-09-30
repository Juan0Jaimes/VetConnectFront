import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-browser-used-traffic-reports',
    templateUrl: './browser-used-traffic-reports.component.html',
    styleUrls: ['./browser-used-traffic-reports.component.scss']
})
export class BrowserUsedTrafficReportsComponent {

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