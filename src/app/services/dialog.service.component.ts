import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/common/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message: any){
    return this.dialog.open(ConfirmDialogComponent,{
      width: '600px',
      disableClose: false,
      data: {
        message: message
      }
    });
  }
}
