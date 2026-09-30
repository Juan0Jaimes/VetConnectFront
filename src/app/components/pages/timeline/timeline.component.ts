import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetUserByNameDto, VetConnectService } from 'src/app/services/vetconnect.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  filter: string;
  users: GetUserByNameDto[];

  constructor(private route: ActivatedRoute,
    private vetConnectService: VetConnectService,
    private router: Router,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    public themeService: CustomizerSettingsService){
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.filter = params['filter'];
      this.vetConnectService.getUserByName(this.filter,"NA",1,20).subscribe({
        next: response => {
          this.users = response.items!;
        },
        error: error => {
          this.handleError(error);
        }
      });

    });
  }

  private handleError(error: any) {
    if (error instanceof Object && 'status' in error) {
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
          case 422:
            this.toastr.error(error.response, 'Consulta');
            break;
          default:
            this.openSnackBar(`${error.status} ${error.statusText}`, 'Cerrar');
            break;
        }
      }
    } else {
      this.openSnackBar(`Se ha presentado un error`, 'Cerrar');
    }
  }

    /**
   * 
   * @param message 
   * @param action 
   */
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action);
    }

    onView(code: string){
      this.router.navigate(['/profile'], { queryParams: { code } });
    }

}
