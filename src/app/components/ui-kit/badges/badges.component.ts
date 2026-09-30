import { Component } from '@angular/core';

@Component({
    selector: 'app-badges',
    templateUrl: './badges.component.html',
    styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

    hidden = false;

    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }

}