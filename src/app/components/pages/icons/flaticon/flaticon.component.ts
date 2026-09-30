import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-flaticon',
    templateUrl: './flaticon.component.html',
    styleUrls: ['./flaticon.component.scss']
})
export class FlaticonComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}