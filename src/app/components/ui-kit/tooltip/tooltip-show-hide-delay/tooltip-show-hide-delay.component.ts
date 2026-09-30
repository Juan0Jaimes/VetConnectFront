import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};

@Component({
    selector: 'app-tooltip-show-hide-delay',
    templateUrl: './tooltip-show-hide-delay.component.html',
    styleUrls: ['./tooltip-show-hide-delay.component.scss'],
    providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}]
})
export class TooltipShowHideDelayComponent {}