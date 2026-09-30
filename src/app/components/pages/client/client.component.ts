import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CreateUserCommand, GetDocumentTypeDto, GetUserAllDto, GetUserByProfileDto, GetUserDto, ProfileDto, UpdateUserCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PROFILE_CLIENT, USER_TYPE_CLIENT } from 'src/app/shared/constants';
import { DialogService } from 'src/app/services/dialog.service.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['identificationNumber', 'firstName', 'lastName', 'email', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<GetUserAllDto>;
  selection = new SelectionModel<GetUserAllDto>(true, []);
  pageNumber: number = 0;
  pageSize: number = 10;
  length: number = 10;
  user: GetUserDto;
  isEditing: boolean = false;
  showPageSizeOptions = true;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent;
  record: GetUserByProfileDto;
  form!: FormGroup;
  documentTypes: GetDocumentTypeDto[] = new Array();

  constructor(
    private toastr: ToastrService,
    public router: Router,
    private _liveAnnouncer: LiveAnnouncer,
    public themeService: CustomizerSettingsService,
    private vetConnectService: VetConnectService,
    private snackBar: MatSnackBar,
    private dialogService: DialogService
  ) {
    const _user = localStorage.getItem('user');
    this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
      profile: new ProfileDto({
        name: ""
      })
    });
  }

  ngOnInit() {
    this.getDocumentTypes(this.pageNumber);
    this.onFilter(this.pageNumber, this.pageSize);
    this.buildForm();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.onFilter(e.pageIndex + 1, this.pageSize);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
  }

  onEdit($event: any, record: any) {
    this.isEditing = true;
    this.vetConnectService.getUserByCode(record.code, 1, 1).subscribe({
      next: (data) => {
        if (data.items?.length! > 0) {
          this.record = data.items![0];
          this.form.controls["firstName"].setValue(this.record.firstName);
          this.form.controls["lastName"].setValue(this.record.lastName);
          this.form.controls["documentType"].setValue(this.record.documentType?.code);
          this.form.controls["identificationNumber"].setValue(this.record.identificationNumber);
          this.form.controls["email"].setValue(this.record.email);
          this.form.controls["phoneNumber"].setValue(this.record.phoneNumber);
          this.form.controls["address"].setValue(this.record.address);
          this.form.controls["neighborhood"].setValue(this.record.neighborhood);
        }
      },
      error: error => {
        this.handleError(error);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // load(pageNumber: number, pageSize: number) {

  //   this.vetConnectService.getUserAll(this.user.code, PROFILE_CLIENT, pageNumber + 1, pageSize).subscribe({
  //     next: response => {
  //       if (response.items!.length > 0) {
  //         this.dataSource = new MatTableDataSource<GetUserAllDto>(response.items);
  //         this.length = response.totalCount!;
  //       }
  //     },
  //     error: error => {
  //       this.handleError(error);
  //     }
  //   });
  // }

  /**
 * 
 * @param error 
 */
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

  /**
   * 
   */
  private buildForm() {
    this.form = new FormGroup({
      documentType: new FormControl('', []),
      identificationNumber: new FormControl('', []),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      neighborhood: new FormControl('', [])
    });
  }

  /**
  * 
  */
  getDocumentTypes(pageNumber: number) {
    this.vetConnectService.documentTypeGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.documentTypes = this.documentTypes.concat(data.items!);
        if (data.hasNextPage) {
          this.getDocumentTypes(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  onCancel() {
    this.form.reset();
    this.isEditing = false;
  }

  onAdd($event:any){
    this.form.reset();
    this.record = new GetUserByProfileDto();
    this.isEditing = true;
  }

  onSave($event: any){
  
    if (this.record.code===undefined){
      let createUserCommand: CreateUserCommand = new CreateUserCommand();
      createUserCommand.firstName = this.form.controls["firstName"].value;
      createUserCommand.lastName = this.form.controls["lastName"].value;
      createUserCommand.documentTypeCode = this.form.controls["documentType"].value;
      createUserCommand.identificationNumber = this.form.controls["identificationNumber"].value;
      createUserCommand.email = this.form.controls["email"].value;
      createUserCommand.phoneNumber = this.form.controls["phoneNumber"].value;
      createUserCommand.address = this.form.controls["address"].value;
      createUserCommand.neighborhood = this.form.controls["neighborhood"].value;
      createUserCommand.profileCode = PROFILE_CLIENT;
      createUserCommand.userTypeCode = USER_TYPE_CLIENT;

      this.vetConnectService.userPOST(createUserCommand).subscribe({
        next: response =>{
          this.isEditing = false;
          this.onFilter(this.pageNumber, this.pageSize);
        },
        error: error =>{
          this.handleError(error);
        }
      });
    }else{
       this.update();
    }
  }

  /**
   * 
   */
  update(){
    let updateUserCommand: UpdateUserCommand = new UpdateUserCommand();
    updateUserCommand.code = this.record.code;
    updateUserCommand.firstName = this.form.controls["firstName"].value;
    updateUserCommand.lastName = this.form.controls["lastName"].value;
    updateUserCommand.documentTypeCode = this.form.controls["documentType"].value;
    updateUserCommand.identificationNumber = this.form.controls["identificationNumber"].value;
    updateUserCommand.email = this.form.controls["email"].value;
    updateUserCommand.phoneNumber = this.form.controls["phoneNumber"].value;
    updateUserCommand.address = this.form.controls["address"].value;
    updateUserCommand.neighborhood = this.form.controls["neighborhood"].value;
    this.vetConnectService.userPUT(updateUserCommand).subscribe(
      {
        next: () => {
          this.isEditing = false;
          this.onFilter(this.pageNumber, this.pageSize);
        },
        error: error => {
          this.handleError(error);
        }
      }
    );
  }

  /**
   * 
   */
  onFilter(pageNumber: number, pageSize: number){

    const fullNameFilter = document.getElementById('fullNameFilter') as HTMLInputElement;
    const emailFilter = document.getElementById('emailFilter') as HTMLInputElement;
    const phoneNumberFilter = document.getElementById('phoneNumberFilter') as HTMLInputElement;


    this.vetConnectService.getUserByFilter(
        fullNameFilter == null? "" : fullNameFilter.value,
        emailFilter == null? "" : emailFilter.value,
        phoneNumberFilter == null? "" : phoneNumberFilter.value
        ,"NA",pageNumber + 1, pageSize).subscribe(
      {
        next: response => {
          if (response.items!.length == 0){
            //this.onFilter(pageNumber + 1, pageSize);
            this.toastr.warning("No se encontraron usuarios con el filtro de búsqueda","Buscar Usuarios");
          }else{
            this.dataSource = new MatTableDataSource<GetUserAllDto>(response.items);
            this.length = response.totalCount!;
          }
        },
        error: error => {
          this.handleError(error);
        }
      }
    );

  }

  /**
   * 
   * @param $event 
   * @param code 
   */
  onConfirm($event: any, code: string){
  
    this.dialogService.openConfirmDialog("¿Esta seguro que desea eliminar el usuario?").afterClosed().subscribe(
      response=>{
        if(response){
          this.vetConnectService.userDELETE(code).subscribe({
            next: ()=>{
              this.onFilter(this.pageNumber, this.pageSize);
              this.toastr.info('Se ha eliminado el usuario satisfactoriamente','Usuario eliminado');
            },
            error: error=>{
              this.handleError(error);
            }
          })
        }
      }
    );
  
  }

}