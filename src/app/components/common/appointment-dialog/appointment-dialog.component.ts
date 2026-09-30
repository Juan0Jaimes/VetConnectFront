import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SaveAppointmentCommand, GetAcquisitionTypeDto, GetDocumentTypeDto, GetPeriodicityDto, GetSpeciesDto, GetVeterinaryProcedureDto, GetVeterinaryServiceDto, VetConnectService, SaveAppointmentServiceDto } from 'src/app/services/vetconnect.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {

  form!: FormGroup;
  saveAppointmentCommand: SaveAppointmentCommand;
  veterinaryProcedures: GetVeterinaryProcedureDto[] = new Array();
  veterinaryServices: GetVeterinaryServiceDto[] = new Array();
  documentTypes : GetDocumentTypeDto[] = new Array();
  periodicities: GetPeriodicityDto[] = new Array();
  acquisitionTypes: GetAcquisitionTypeDto[] = new Array();
  species: GetSpeciesDto[] = new Array();
  sex: { code: string, name: string }[] = [
    {code:"H", name: "Hembra"},
    {code:"M", name: "Macho"}
  ];
  booleanList: { code: string, name: string }[] = [
    {code:"1", name: "Si"},
    {code:"0", name: "No"}
  ];
  selectedProcedure: string;
  selectedQuantity: number = 1;
  pageNumber: number = 0;
  pageSize: number = 10;
  dataSource: MatTableDataSource<SaveAppointmentServiceDto>;  
  displayedColumns: string[] = ['name','quantity', 'action'];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    public vetConnectService: VetConnectService,
    public router: Router){}

  ngOnInit(){
    this.getDocumentTypes(this.pageNumber);
    this.getVeterinaryProcedures(this.pageNumber);
    this.getPeriodicities(this.pageNumber);
    this.getVeterinaryServices(this.pageNumber);
    this.getAcquisitionTypes(this.pageNumber);
    this.getSpecies(this.pageNumber);
    this.saveAppointmentCommand =  new SaveAppointmentCommand();
    this.saveAppointmentCommand.procedures = new Array();
    this.buildForm();
  }

  onCloseDialog(){
    this.dialogRef.close(false);
  }

  onAddProcedure(){
    let procedureData = new Array();
    procedureData.push(new SaveAppointmentServiceDto({ serviceName: "Hotel", serviceCode: this.selectedProcedure  ,quantity: 2  }));
    // this.dataSource.data.push(new CreateAppointmentServiceDto({ serviceCode: this.selectedProcedure  ,quantity: 2  }));
    // let createAppointmentProcedureDto = new CreateAppointmentProcedureDto();
    // createAppointmentProcedureDto.procedureCode = this.selectedProcedure;
    // createAppointmentProcedureDto.quantity = 1;
    // this.createAppoinmentCommand.procedures?.push(createAppointmentProcedureDto);

    this.dataSource = new MatTableDataSource<SaveAppointmentServiceDto>(procedureData);
  }
  
  onSave($event: any){}

  /**
  * 
  */
  private buildForm() {
    this.form = new FormGroup({
      appointmentDate: new FormControl('', [Validators.required]),
      appointmentTime: new FormControl('', [Validators.required]),
      documentType: new FormControl('', [Validators.required]),
      identificationNumber: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      petName: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      breed: new FormControl('', [Validators.required]),
      acquisitionType: new FormControl('', [Validators.required]),
      reproductiveStatus: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      microchip: new FormControl('', [Validators.required])
    });
  }

  
  /**
   * 
   */
  getDocumentTypes(pageNumber: number){
    this.vetConnectService.documentTypeGET(pageNumber + 1,this.pageSize).subscribe({
      next: (data) => {
        this.documentTypes = this.documentTypes.concat(data.items!);
        if (data.hasNextPage){
          this.getDocumentTypes(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getVeterinaryProcedures(pageNumber: number){
    this.vetConnectService.veterinaryProcedureGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.veterinaryProcedures = this.veterinaryProcedures.concat(data.items!);
        if (data.hasNextPage){
          this.getVeterinaryProcedures(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getVeterinaryServices(pageNumber: number){
    this.vetConnectService.veterinaryServiceGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) =>{
        this.veterinaryServices = this.veterinaryServices.concat(data.items!);
        if (data.hasNextPage){
          this.getVeterinaryServices(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getPeriodicities(pageNumber: number){
    this.vetConnectService.periodicityGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.periodicities = this.periodicities.concat(data.items!);
        if (data.hasNextPage){
          this.getPeriodicities(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getAcquisitionTypes(pageNumber: number){
    this.vetConnectService.acquisitionTypeGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.acquisitionTypes = this.acquisitionTypes.concat(data.items!);
        if (data.hasNextPage){
          this.getAcquisitionTypes(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
 * 
 */
  getSpecies(pageNumber: number){
    this.vetConnectService.speciesGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.species = this.species.concat(data.items!);
        if (data.hasNextPage){
          this.getSpecies(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
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
                //this.openSnackBar(`${error.status} ${error.statusText}`,'Cerrar');
                break;
          }
      } 
    } else {
      //this.openSnackBar(`Se ha presentado un error`,'Cerrar');
    }
  }
}
