import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public themeService: CustomizerSettingsService) { }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
}


