import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-p-kanban-board',
    templateUrl: './p-kanban-board.component.html',
    styleUrls: ['./p-kanban-board.component.scss']
})
export class PKanbanBoardComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}