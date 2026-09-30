import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateUserTypeCommand, GetUserTypeDto, UpdateUserTypeCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent {
  displayedColumns: string[] = ['name','createdBy','created','updatedBy','updated', 'action'];
  dataSource = new MatTableDataSource<GetUserTypeDto>;
  UserTypeDtoList!: GetUserTypeDto[];
  record: GetUserTypeDto;
  isEditing: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 10;
  length: number = 10;
  showPageSizeOptions = true;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent;
  form!: FormGroup;


  constructor(
    private vetConnectService: VetConnectService,
    public themeService: CustomizerSettingsService,
    public router: Router,
    private dialogService: DialogService,
    private snackBar: MatSnackBar
  ){}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.load(this.pageNumber, this.pageSize);
  }

  onAdd($event:any){
    this.record = new GetUserTypeDto();
    this.isEditing = true;
    this.form.setValue({
      name: ""
    });
  }
  
  
  load(pageNumber: number, pageSize: number){
    this.vetConnectService.userTypeGET(1,10).subscribe((data)=>{
  
      this.UserTypeDtoList = data.items!;    
      this.dataSource = new MatTableDataSource<GetUserTypeDto>(this.UserTypeDtoList);
    });
  }
  
  onSave($event: any){
  
    if (this.record.code===undefined){
      let createUserTypeCommand: CreateUserTypeCommand = new CreateUserTypeCommand();
      createUserTypeCommand.name = this.record.name;
      this.vetConnectService.userTypePOST(createUserTypeCommand).subscribe({
        next: response =>{
          this.isEditing = false;
        },
        error: error =>{
          this.handleError(error);
        }
      });
    }else{
      this.update();
    }
  }
  
  
  onEdit($event: any, record: any){    
    this.isEditing = true;   
    this.record = record;
  } 
  
  onCancel($event: any){
    this.isEditing = false;
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  
  update(){
    let updateUserTypeCommand: UpdateUserTypeCommand = new UpdateUserTypeCommand();
    updateUserTypeCommand.code = this.record.code;
    updateUserTypeCommand.name = this.record.name;
    this.vetConnectService.userTypePUT(updateUserTypeCommand).subscribe(
      {
        next: () => {
          this.isEditing = false;
          this.load(this.pageNumber, this.pageSize);
        },
        error: error => {
          this.handleError(error);
        }
      }
    );
  }
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.load(e.pageIndex + 1, this.pageSize);
  }
  
  onConfirm($event: any, code: string){
  
    this.dialogService.openConfirmDialog("¿Esta seguro que desea eliminar el registro?").afterClosed().subscribe(
      response=>{
        if(response){
          this.vetConnectService.acquisitionTypeDELETE(code).subscribe({
            next: ()=>{
              this.load(this.pageNumber, this.pageSize);
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
