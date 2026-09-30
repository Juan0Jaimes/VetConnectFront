import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-listbox',
    templateUrl: './listbox.component.html',
    styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent {

    sizes = ['XS', 'S', 'M', 'L', 'XL'];

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