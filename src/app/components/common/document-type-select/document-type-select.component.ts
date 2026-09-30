import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetDocumentTypeDto, VetConnectService } from 'src/app/services/vetconnect.service';

@Component({
  selector: 'app-document-type-select',
  templateUrl: './document-type-select.component.html',
  styleUrls: ['./document-type-select.component.scss']
})
export class DocumentTypeSelectComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  @Input() selectedDocumentType: string;
  @Output() outputRaiseEvent = new EventEmitter<string>();
  pageNumber: number = 0;
  pageSize: number = 10;
  documentTypes: GetDocumentTypeDto[] = new Array();

  /**
   *
   */
  constructor(private vetConnectService: VetConnectService,
    public router: Router,
    private toastr: ToastrService,
    private snackBar: MatSnackBar){

    }

    ngOnInit(): void {
      this.getDocumentTypes(this.pageNumber);
    }

    /**
     * 
     * @param pageNumber 
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

    /**
     * 
     * @param event 
     */
    onSelectChange(event: MatSelectChange) {
      //this.outputRaiseEvent.emit(this.formGroup.controls["veterinaryCity"].value);
    }

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
}
