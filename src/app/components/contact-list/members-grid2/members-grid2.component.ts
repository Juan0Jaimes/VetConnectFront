import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-members-grid2',
    templateUrl: './members-grid2.component.html',
    styleUrls: ['./members-grid2.component.scss']
})
export class MembersGrid2Component {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}