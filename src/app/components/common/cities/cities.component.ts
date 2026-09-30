import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetAllCitiesDto, VetConnectService } from 'src/app/services/vetconnect.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit, OnChanges {

  @Input() formGroup!: FormGroup;
  @Input() selectedCityCode?: string;
  @Output() outputRaiseEvent = new EventEmitter<string>();

  cities: GetAllCitiesDto[] = [];
  pageNumber: number = 0;
  pageSize: number = 500;

  constructor(
    private vetConnectService: VetConnectService,
    public router: Router,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getCities(this.pageNumber);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Si cambia el código y ya tenemos las ciudades, actualizamos el control
    if (changes['selectedCityCode'] && this.cities.length > 0) {
      this.setSelectedCity();
    }
  }

  private getCities(pageNumber: number) {
    this.vetConnectService.cityGET(pageNumber + 1, this.pageSize).subscribe({
      next: response => {
        this.cities = [...this.cities, ...response.items!];

        if (response.hasNextPage) {
          this.getCities(pageNumber + 1);
        } else {
          // Una vez cargadas todas las ciudades, establecemos la seleccionada
          this.setSelectedCity();
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  private setSelectedCity() {
    if (this.selectedCityCode) {
      this.formGroup.get('veterinaryCity')?.setValue(this.selectedCityCode);
    }
  }

  onSelectChange(event: MatSelectChange) {
    this.outputRaiseEvent.emit(event.value);
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  private handleError(error: any) {
    if (error instanceof Object && 'status' in error) {
      if (error.error instanceof ErrorEvent) {
        console.error("Error Event");
      } else {
        switch (error.status) {
          case 401:
            this.router.navigateByUrl("/login");
            break;
          case 403:
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
}
