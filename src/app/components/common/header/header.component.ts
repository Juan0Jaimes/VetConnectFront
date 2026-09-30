import { Component, HostListener } from '@angular/core';
import { ToggleService } from './toggle.service';
import { DatePipe } from '@angular/common';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { GetUserDto, ProfileDto, VetConnectService } from 'src/app/services/vetconnect.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    isToggled = false;
    user: GetUserDto;
    
    constructor(
        private toggleService: ToggleService,
        private datePipe: DatePipe,
        public themeService: CustomizerSettingsService,
        public router: Router,
        private vetConnectService: VetConnectService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });

        const _user = localStorage.getItem('user');
        this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
            profile: new ProfileDto({
                name: ""
            })
        });

    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggle() {
        this.toggleService.toggle();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    currentDate: Date = new Date();
    formattedDate: any = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');

    onSearch(){

        let filter = '';
        // Obtener el elemento input por su ID
        const cajaDeTexto = document.getElementById('filter');

        // Comprobación de tipo para asegurarse de que es un HTMLInputElement
        if (cajaDeTexto instanceof HTMLInputElement) {
            // Ahora TypeScript sabe que es un HTMLInputElement y puedes acceder a 'value'
            filter = cajaDeTexto.value;
        }

        this.router.navigate(['/timeline'], { queryParams: { filter } });
    }

    onView(){
        const code = this.user.code;
        this.router.navigate(['/profile'], { queryParams: { code } });
    }
}