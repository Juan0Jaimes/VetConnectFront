import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-material-icons',
    templateUrl: './material-icons.component.html',
    styleUrls: ['./material-icons.component.scss']
})
export class MaterialIconsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}