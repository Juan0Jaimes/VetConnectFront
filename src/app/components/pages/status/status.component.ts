import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CreateStatusCommand, GetStatusDto, UpdateStatusCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  displayedColumns: string[] = ['name','createdBy','created','updatedBy','updated', 'action'];
  dataSource: MatTableDataSource<GetStatusDto>;  
  isEditing: boolean = false;
  record: GetStatusDto;
  pageNumber: number = 0;
  pageSize: number = 10;
  length: number = 10;
  showFirstLastButtons = true;
  showPageSizeOptions = true;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent;
  form!: FormGroup;

  constructor(
    public vetConnectService: VetConnectService,
    public router: Router,
    private dialogService: DialogService,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }
  
  ngOnInit() {
    this.load(this.pageNumber, this.pageSize);
   }

   /**
    * 
    * @param $event 
    */
  onAdd($event:any){
    this.record = new GetStatusDto();
    this.isEditing = true;
    this.form.setValue({
      name: ""
    });
  }

  /**
   * 
   * @param $event 
   * @param record 
   */
  onEdit($event: any, record: any){    
    this.isEditing = true;   
    this.record = record;
    this.form.setValue({
      name: this.record.name
    });
  }   

  /**
   * 
   * @param $event 
   * @returns 
   */
  onSave($event: any){

    this.form.markAllAsTouched();
    if(this.form.invalid){
      this.openSnackBar('Por favor valide que la información esté completa','Cerrar');
      return;
    }

    if (this.record.code===undefined){
      this.add();
    }else{
      this.update();
    }
  }

  /**
   * 
   * @param $event 
   */
  onCancel($event: any){
    this.isEditing = false;
  }

  /**
   * 
   * @param $event 
   * @param code 
   */
  onConfirm($event: any, code: string){

    this.dialogService.openConfirmDialog("¿Esta seguro que desea eliminar el registro?").afterClosed().subscribe(
      response=>{
        if(response){
          this.vetConnectService.statusDELETE(code).subscribe({
            next: ()=>{
              this.pageNumber = 1;
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

  /**
   * 
   * @param pageNumber 
   * @param pageSize 
   */
  load(pageNumber: number, pageSize: number){
    this.vetConnectService.statusGET(pageNumber + 1,pageSize).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<GetStatusDto>(data.items ?? []);
        this.length = data.totalCount ?? 0;
      },
      error: (error) => {
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
  add(){
    let createStatusCommand: CreateStatusCommand = new CreateStatusCommand();
    createStatusCommand.name = this.form.controls["name"].value; //this.record.name;
    this.vetConnectService.statusPOST(createStatusCommand).subscribe({
      next: response =>{
        this.isEditing = false;
        this.load(this.pageNumber, this.pageSize);
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  update(){
    let updateStatusCommand: UpdateStatusCommand = new UpdateStatusCommand();
    updateStatusCommand.code = this.record.code;
    updateStatusCommand.name = this.form.controls["name"].value;;
    this.vetConnectService.statusPUT(updateStatusCommand).subscribe(
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

  /**
   * 
   * @param e 
   */
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.load(e.pageIndex + 1, this.pageSize);
  }

  /**
   * 
   * @param setPageSizeOptionsInput 
   */
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
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
      this.openSnackBar(`Se ha presentado un error`,'Cerrar');
    }
  }

  /**
   * 
   */
  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

}