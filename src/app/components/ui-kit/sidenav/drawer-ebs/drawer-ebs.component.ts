import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-drawer-ebs',
    templateUrl: './drawer-ebs.component.html',
    styleUrls: ['./drawer-ebs.component.scss']
})
export class DrawerEbsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}