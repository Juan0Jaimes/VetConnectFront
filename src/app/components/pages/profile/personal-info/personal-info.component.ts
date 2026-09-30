import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { GetUserByCodeDto, GetUserByCodePetDto, VetConnectService } from 'src/app/services/vetconnect.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

    @Input() user: GetUserByCodeDto;
    pets: GetUserByCodePetDto[];

    constructor(
        public themeService: CustomizerSettingsService,
        private vetConnectService: VetConnectService,
        private router: Router
    ) { }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnInit() {
        this.pets = this.user.petPrimaryUsers?.length == 0 ? this.user.petSecondaryUsers!: this.user.petPrimaryUsers!;
    }

    onViewPet(pet: GetUserByCodePetDto){
        const code = pet.code;
        this.router.navigate(['/pet-info'], { queryParams: { code } });
    }

    getAge(birthdate: string | null) {

        if (!birthdate) {
          return 0; // o maneja el caso de fecha de nacimiento nula según tus necesidades
        }
    
        const fechaNacimiento = new Date(birthdate);
        const hoy = new Date();
    
        const diff = hoy.getTime() - fechaNacimiento.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

}