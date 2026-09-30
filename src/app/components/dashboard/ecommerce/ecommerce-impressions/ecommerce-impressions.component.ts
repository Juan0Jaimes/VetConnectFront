import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ecommerce-impressions',
    templateUrl: './ecommerce-impressions.component.html',
    styleUrls: ['./ecommerce-impressions.component.scss']
})
export class EcommerceImpressionsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}