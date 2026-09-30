import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-products-customers',
    templateUrl: './products-customers.component.html',
    styleUrls: ['./products-customers.component.scss']
})
export class ProductsCustomersComponent {

    active = true;
    blocked = true;

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