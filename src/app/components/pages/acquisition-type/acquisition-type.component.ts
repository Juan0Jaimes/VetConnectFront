import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateAcquisitionTypeCommand, GetAcquisitionTypeDto, UpdateAcquisitionTypeCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/services/dialog.service.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acquisition-type',
  templateUrl: './acquisition-type.component.html',
  styleUrls: ['./acquisition-type.component.scss']
})

export class AcquisitionTypeComponent {

  displayedColumns: string[] = ['name','createdBy','created','updatedBy','updated', 'action'];
  dataSource = new MatTableDataSource<GetAcquisitionTypeDto>;
  AcquisitionTypeDtoList!: GetAcquisitionTypeDto[];
  record: GetAcquisitionTypeDto;
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
) {}

@ViewChild(MatPaginator) paginator: MatPaginator;

ngOnInit() {
  this.load(this.pageNumber, this.pageSize);
}

onAdd($event:any){
  this.record = new GetAcquisitionTypeDto();
  this.isEditing = true;
}


load(pageNumber: number, pageSize: number){
  this.vetConnectService.acquisitionTypeGET(pageNumber,pageSize).subscribe((data)=>{
    if (data.items!.length>0){
      this.dataSource = new MatTableDataSource<GetAcquisitionTypeDto>(data.items);
      this.length = data.totalCount!;
    }
  });
}

onSave($event: any){

  if (this.record.code===undefined){
    let createAcquisitionTypeCommand: CreateAcquisitionTypeCommand = new CreateAcquisitionTypeCommand();
    createAcquisitionTypeCommand.name = this.record.name;
    this.vetConnectService.acquisitionTypePOST(createAcquisitionTypeCommand).subscribe({
      next: response =>{
        this.isEditing = false;
        this.load(this.pageNumber, this.pageSize);
      },
      error: error =>{

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
  let updateAcquisitionTypeCommand: UpdateAcquisitionTypeCommand = new UpdateAcquisitionTypeCommand();
  updateAcquisitionTypeCommand.code = this.record.code;
  updateAcquisitionTypeCommand.name = this.record.name;
  this.vetConnectService.acquisitionTypePUT(updateAcquisitionTypeCommand).subscribe(
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
