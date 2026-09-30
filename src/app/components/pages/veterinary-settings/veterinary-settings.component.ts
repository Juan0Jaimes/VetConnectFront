import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';
import { City, DocumentType, GetUserDto, ProfileDto, VetConnectService, Veterinary, UpdateVeterinaryCommand, SaveVeterinaryCommand } from 'src/app/services/vetconnect.service';
import { DocumentTypeSelectComponent } from '../../common/document-type-select/document-type-select.component';

@Component({
  selector: 'app-veterinary-settings',
  templateUrl: './veterinary-settings.component.html',
  styleUrls: ['./veterinary-settings.component.scss']
})
export class VeterinarySettingsComponent implements OnInit{

  @ViewChild('selectDocumentType') documentTypeSelect: DocumentTypeSelectComponent;
  getVeterinaryList!: Veterinary[];
  veterinary: Veterinary = new Veterinary({
    city : new City(),
    documentType : new DocumentType()
  });
  typeTable: Boolean;
  exits: boolean;
  form!: FormGroup;
  veterinaryCityCode?: string;
  pageEvent: PageEvent;
  pageNumber: number = 1;
  pageSize: number = 1;
  citySelectedOption: string;
  user: GetUserDto;

  constructor(private vetConnectService: VetConnectService, public themeService: CustomizerSettingsService,
    private toastr: ToastrService,public router: Router,private snackBar: MatSnackBar) {
    this.getVeterinaryList = new Array();
    this.veterinary = new Veterinary();
    this.exits = false;
    const _user = localStorage.getItem('user');
    this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
      profile: new ProfileDto({
        name: ""
      })
    });
  }

  ngOnInit(){
    this.loadVeterinary(this.pageNumber, this.pageSize);
    this.buildForm();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  loadVeterinary(pageNumber: number, pageSize: number) {
    this.vetConnectService.veterinaryGET(this.user.veterinary?.code, pageNumber, pageSize).subscribe({
      next: response => {
        this.getVeterinaryList = response.items!;
        this.veterinary = this.getVeterinaryList[0];
        this.form.controls["veterinaryName"].setValue(this.veterinary.name);
        this.form.controls["veterinaryDocumentType"].setValue(this.veterinary.documentType?.code);
        this.form.controls["veterinaryIdentificationNumber"].setValue(this.veterinary.identificationNumber);
        this.form.controls["veterinaryPhone"].setValue(this.veterinary.phoneNumber);
        this.form.controls["veterinaryEmail"].setValue(this.veterinary.email);
        this.form.controls["veterinaryAdress"].setValue(this.veterinary.address);
        this.form.controls["veterinaryCity"].setValue(this.veterinary.city?.code);
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  onUpdate(){

    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastr.error('Por favor valide que la información esté completa', 'Consulta');
      return;
    }

    this.vetConnectService.veterinaryPOST(new SaveVeterinaryCommand({
      code: this.user.veterinary?.code,
      name: this.form.controls["veterinaryName"].value,
      documentTypeCode: this.form.controls["veterinaryDocumentType"].value,
      identificationNumber: this.form.controls["veterinaryIdentificationNumber"].value,
      phoneNumber: this.form.controls["veterinaryPhone"].value,
      email: this.form.controls["veterinaryEmail"].value,
      address: this.form.controls["veterinaryAdress"].value,
      cityCode: this.form.controls["veterinaryCity"].value,
    })).subscribe({
      next: response =>{
        this.toastr.success('Se han actualizado los datos de la veterinaria','Información');
      },
      error: error =>{
        this.toastr.error('Se ha presentado un error','Error');
      }
    });

  }

  /***
   * 
   */
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.loadVeterinary(e.pageIndex + 1, this.pageSize);
  }

  /**
   * 
   * @param selectedCode 
   */
  onHandleDocumentType(selectedCode: string) {
    if (this.veterinary.documentType != null) {
        this.veterinary.documentType.code = selectedCode!;
    }
  }

  onHandleCity(selectedCode: string) {
    //this.form.controls["veterinaryCity"].setValue(selectedCode);
    // if (this.veterinary.city != null) {
    //     this.veterinary.city.code = selectedCode!;
    // }
  }

  onCancel() {
    this.form.reset();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  private buildForm() {
    this.form = new FormGroup({
      veterinaryName: new FormControl('', [Validators.required]),
      veterinaryDocumentType: new FormControl('', [Validators.required]),
      veterinaryIdentificationNumber: new FormControl('', [Validators.required]),
      veterinaryPhone: new FormControl('', [Validators.required]),
      veterinaryEmail: new FormControl('', [Validators.required]),
      veterinaryAdress: new FormControl('', [Validators.required]),
      veterinaryCity: new FormControl('', [Validators.required])
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

}
