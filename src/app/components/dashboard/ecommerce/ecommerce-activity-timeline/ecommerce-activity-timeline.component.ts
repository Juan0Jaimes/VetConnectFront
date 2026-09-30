import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ecommerce-activity-timeline',
    templateUrl: './ecommerce-activity-timeline.component.html',
    styleUrls: ['./ecommerce-activity-timeline.component.scss']
})
export class EcommerceActivityTimelineComponent {

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