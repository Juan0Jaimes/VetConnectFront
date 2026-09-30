import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateDocumentTypeCommand, GetDocumentTypeDto, UpdateDocumentTypeCommand, VetConnectService } from 'src/app/services/vetconnect.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent {
  displayedColumns: string[] = ['name','keyword','regularExpression','tooltip','createdBy','created','updatedBy','updated', 'action'];
  dataSource = new MatTableDataSource<GetDocumentTypeDto>;
  record: GetDocumentTypeDto;
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
  ){
    this.buildForm();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.load(this.pageNumber, this.pageSize);
  }

  onAdd($event:any){
    this.record = new GetDocumentTypeDto();
    this.isEditing = true;
    this.form.reset();
  }

  load(pageNumber: number, pageSize: number){
    this.vetConnectService.documentTypeGET(pageNumber,pageSize).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<GetDocumentTypeDto>(data.items ?? []);
        this.length = data.totalCount ?? 0;
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  
  onSave($event: any){
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.openSnackBar('Por favor valide que la información esté completa', 'Cerrar');
      return;
    }

    if (this.record.code === undefined){
      this.add();
    } else {
       this.update();
    }
  }
  
  onEdit($event: any, record: any){    
    this.isEditing = true;   
    this.record = record;
    this.form.setValue({
      name: record.name ?? '',
      keyword: record.keyword ?? '',
      regularExpression: record.regularExpression ?? '',
      tooltip: record.tooltip ?? ''
    });
  } 
  
  onCancel($event: any){
    this.isEditing = false;
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  add(){
    let cmd: CreateDocumentTypeCommand = new CreateDocumentTypeCommand();
    cmd.name = this.form.controls['name'].value;
    cmd.keyword = this.form.controls['keyword'].value;
    cmd.regularExpression = this.form.controls['regularExpression'].value || undefined;
    cmd.tooltip = this.form.controls['tooltip'].value || undefined;
    this.vetConnectService.documentTypePOST(cmd).subscribe({
      next: () => {
        this.isEditing = false;
        this.load(this.pageNumber, this.pageSize);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  
  update(){
    let cmd: UpdateDocumentTypeCommand = new UpdateDocumentTypeCommand();
    cmd.code = this.record.code;
    cmd.name = this.form.controls['name'].value;
    cmd.keyword = this.form.controls['keyword'].value;
    cmd.regularExpression = this.form.controls['regularExpression'].value || undefined;
    cmd.tooltip = this.form.controls['tooltip'].value || undefined;
    this.vetConnectService.documentTypePUT(cmd).subscribe({
      next: () => {
        this.isEditing = false;
        this.load(this.pageNumber, this.pageSize);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
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
          this.vetConnectService.documentTypeDELETE(code).subscribe({
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
  
  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      keyword: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      regularExpression: new FormControl(''),
      tooltip: new FormControl('')
    });
  }

  private handleError(error: any){
    if (error instanceof HttpErrorResponse) {
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
