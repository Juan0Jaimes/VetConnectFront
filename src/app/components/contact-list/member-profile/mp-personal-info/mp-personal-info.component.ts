import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-personal-info',
    templateUrl: './mp-personal-info.component.html',
    styleUrls: ['./mp-personal-info.component.scss']
})
export class MpPersonalInfoComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }


}