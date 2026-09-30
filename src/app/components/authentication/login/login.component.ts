import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { GetUserQuery, VetConnectService } from 'src/app/services/vetconnect.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    form!: FormGroup;
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService,
        public vetConnectService: VetConnectService,
        public router: Router,
        private dialogService: DialogService,
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) {
        this.buildForm();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    onLogin(){

        // this.http.get('https://api.publicapis.org/entries').subscribe(
        //     (data) => {
        //       console.log('Respuesta de la API:', data);
        //       // Haz algo con la respuesta
        //     },
        //     (error) => {
        //       console.error('Error al llamar a la API:', error);
        //       // Maneja el error
        //     }
        //   );

        this.form.markAllAsTouched();
        if(this.form.invalid){
          this.openSnackBar('Por favor valide que la información esté completa','Cerrar');
          return;
        }

        let getUserQuery = new GetUserQuery({ email:this.form.controls["username"].value, password:this.form.controls["password"].value, pageNumber: 1, pageSize: 1});

        this.vetConnectService.login(getUserQuery).subscribe({
            next: response => {
                if (response.totalCount==1){
                    localStorage.setItem('user',JSON.stringify(response.items![0]));
                    this.router.navigate(['/saas-app']);
                }else{
                    this.openSnackBar('Credenciales invalidas!','Cerrar');
                }
            },
            error: error =>{
                this.handleError(error);
            }
        });
    }

    /**
     * 
     * @param message 
     * @param action 
     */
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action);
    }

    /**
     * 
     */
    private buildForm() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    /**
     * 
     * @param error 
     */
    private handleError(error: any){
        if (error instanceof HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
        } else {
            switch (error.status) {
                case 401:      //login
                    this.router.navigateByUrl("/login");
                    break;
                case 403:     //forbidden
                    this.router.navigateByUrl("/unauthorized");
                    break;
                default:
                    this.openSnackBar(`${error.status} ${error.statusText}`,'Cerrar');
                    break;
            }
        } 
        } else {
            if (error.status === 404){
                this.openSnackBar(`Credenciales inválidas`,'Cerrar');
            }else{
                this.openSnackBar(`Se ha presentado un error`,'Cerrar');
            }
        
        }
    }
}