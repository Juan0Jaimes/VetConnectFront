import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CreateUserCommand, CreateUserVeterinaryDto, GetUserAllDto, GetUserDto, ProfileDto, UpdateUserCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/services/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PROFILE_VETERINARIAN, USER_TYPE_DEPENDENT } from 'src/app/shared/constants';
import { ToastrService } from 'ngx-toastr';
import { DocumentTypeSelectComponent } from '../../common/document-type-select/document-type-select.component';


@Component({
  selector: 'app-veterinarian-settings',
  templateUrl: './veterinarian-settings.component.html',
  styleUrls: ['./veterinarian-settings.component.scss']
})
export class VeterinarianSettingsComponent implements OnInit{
  
  @ViewChild('selectDocumentType') documentTypeSelect: DocumentTypeSelectComponent;
  user: GetUserDto;
  veterinariansList: any[] = [];
  isEditing: boolean = false;
  record: GetUserAllDto;
  pageEvent: PageEvent;
  pageNumber: number = 1;
  pageSize: number = 2;
  length: number = 0;
  activeCount: number = 0;
  urgenciasCount: number = 0;
  form!: FormGroup;

  get pageRangeStart(): number {
    return this.length === 0 ? 0 : (this.pageNumber - 1) * this.pageSize + 1;
  }

  get pageRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.length);
  }

  constructor(private vetConnectService: VetConnectService, public themeService: CustomizerSettingsService, 
    private snackBar: MatSnackBar, private dialogService: DialogService,public router: Router,private toastr: ToastrService,)
  {
    const _user = localStorage.getItem('user');
    this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
      profile: new ProfileDto({
        name: ""
      })
    });
  }

  ngOnInit(): void {
    this.LoadVeterinarians(this.pageNumber, this.pageSize);
    this.buildForm();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  onAdd($event:any){
    this.form.reset();
    this.record = new GetUserAllDto();
    this.isEditing = true;
  }

  prevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.LoadVeterinarians(this.pageNumber, this.pageSize);
    }
  }

  nextPage() {
    if (this.pageRangeEnd < this.length) {
      this.pageNumber++;
      this.LoadVeterinarians(this.pageNumber, this.pageSize);
    }
  }

  LoadVeterinarians(pageNumber: number, pageSize: number){
    this.vetConnectService.getUserByProfile(PROFILE_VETERINARIAN,this.user.veterinary?.code,pageNumber,pageSize).subscribe({
      next: response => {
        this.veterinariansList = response.items!;
        this.length = response.totalCount!;
      },
      error: error => {
        this.handleError(error);
      }
    });
  }


  onEdit($event: any, record: any){    
    this.isEditing = true;   
    this.record = record;
    this.form.controls["veterinarianFirstName"].setValue(this.record.firstName);
    this.form.controls["veterinarianLastName"].setValue(this.record.lastName);
    this.form.controls["veterinarianEmail"].setValue(this.record.email);
    this.form.controls["veterinarianPhoneNumber"].setValue(this.record.phoneNumber);
    this.form.controls["veterinarianIdentificationNumber"].setValue(this.record.identificationNumber);
    this.form.controls["veterinaryDocumentType"].setValue(this.record.documentType?.code);
  } 

  onCancel() {
    this.form.reset();
    this.isEditing = false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onSave($event: any){

    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastr.error('Por favor valide que la información esté completa', 'Consulta');
      return;
    }

    this.Save();
  }

  Save(){
    if (this.record.code===undefined){

      let createVeterinarianCommand: CreateUserCommand = new CreateUserCommand({
        veterinary : new CreateUserVeterinaryDto ()
      });
      createVeterinarianCommand.firstName = this.form.controls["veterinarianFirstName"].value; 
      createVeterinarianCommand.lastName = this.form.controls["veterinarianLastName"].value;
      createVeterinarianCommand.documentTypeCode = this.form.controls["veterinaryDocumentType"].value
      createVeterinarianCommand.identificationNumber = this.form.controls["veterinarianIdentificationNumber"].value;
      createVeterinarianCommand.email = this.form.controls["veterinarianEmail"].value;
      createVeterinarianCommand.phoneNumber = this.form.controls["veterinarianPhoneNumber"].value;
      createVeterinarianCommand.userTypeCode = USER_TYPE_DEPENDENT;
      createVeterinarianCommand.profileCode = PROFILE_VETERINARIAN;
      createVeterinarianCommand.password = "";
      createVeterinarianCommand.veterinary!.code = this.user.veterinary?.code;

      this.vetConnectService.userPOST(createVeterinarianCommand).subscribe({
        next: response =>{
          this.isEditing = false;
          this.LoadVeterinarians(this.pageNumber, this.pageSize);
        },
        error: error =>{
          this.handleError(error);
        }
      });
    }else{
      this.update();
    }
  }

  update(){
    let updateUserCommand: UpdateUserCommand = new UpdateUserCommand();

    updateUserCommand.code = this.record.code;
    updateUserCommand.firstName = this.form.controls["veterinarianFirstName"].value;
    updateUserCommand.lastName = this.form.controls["veterinarianLastName"].value;
    updateUserCommand.email = this.form.controls["veterinarianEmail"].value;
    updateUserCommand.documentTypeCode = this.form.controls["veterinaryDocumentType"].value;
    updateUserCommand.identificationNumber = this.form.controls["veterinarianIdentificationNumber"].value;
    updateUserCommand.phoneNumber = this.form.controls["veterinarianPhoneNumber"].value;


    this.vetConnectService.userPUT(updateUserCommand).subscribe(
      {
        next: () => {
          this.isEditing = false;
          this.LoadVeterinarians(this.pageNumber, this.pageSize);
        },
        error: error => {
          this.handleError(error);
        }
      }
    );
  }

  onConfirm($event: any, code: string){

    this.dialogService.openConfirmDialog("¿Esta seguro que desea eliminar el registro?").afterClosed().subscribe(
      response=>{
        if(response){
          this.vetConnectService.userDELETE(code).subscribe({
            next: ()=>{
              this.LoadVeterinarians(this.pageNumber, this.pageSize);
              this.openSnackBar("Se ha eliminado el registro correctamente!","Cerrar");
            },
            error: error=>{
              this.handleError(error);
            }
          })
        }
      }
    );
  
  }

  private buildForm() {
    this.form = new FormGroup({
      veterinarianFirstName: new FormControl('', [Validators.required]),
      veterinarianLastName: new FormControl('', [Validators.required]),
      veterinarianIdentificationNumber: new FormControl('', [Validators.required]),
      veterinarianEmail: new FormControl('', [Validators.required]),
      veterinarianPhoneNumber: new FormControl('', [Validators.required]),
      veterinaryDocumentType: new FormControl('', [Validators.required])
    });
  }

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
      this.openSnackBar(`Se ha presentado un error`,'Cerrar');
    }
  }

    /**
   * 
   * @param selectedCode 
   */
    onHandleDocumentType(selectedCode: string) {
      if (this.record.documentType != null) {
          this.record.documentType.code = selectedCode!;
      }
    }
}
