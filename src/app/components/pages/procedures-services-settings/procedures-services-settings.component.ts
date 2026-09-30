import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';
import { SaveVeterinaryProcedureCommand, GetConfigurationProcedureDto, GetConfigurationServiceDto, GetUserDto, ProfileDto, VetConnectService, SaveVeterinaryProcedureDto, SaveVeterinaryServiceCommand, SaveVeterinaryServiceDto } from 'src/app/services/vetconnect.service';
import { PERIODICITY_DAY } from 'src/app/shared/constants';

@Component({
  selector: 'app-procedures-services-settings',
  templateUrl: './procedures-services-settings.component.html',
  styleUrls: ['./procedures-services-settings.component.scss']
})
export class ProceduresServicesSettingsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  activeTab: 'procedures' | 'services' = 'procedures';
  selectedCategory: string = 'Todas las categorías';
  currentPageProcedureData: GetConfigurationProcedureDto[] = [];
  currentPageServiceData: GetConfigurationServiceDto[] = [];

  dataSourceProcedure = new MatTableDataSource<GetConfigurationProcedureDto>;
  dataSourceService = new MatTableDataSource<GetConfigurationServiceDto>;
  displayedColumnsProcedure: string[] = ['name', 'price', 'updated'];
  displayedColumnsService: string[] = ['name', 'price', 'updated'];

  lengthProcedure: number = 0;
  pageEventProcedure: PageEvent;
  pageNumberProcedure: number = 0;
  pageSizeProcedure: number = 10;

  lengthService: number = 0;
  pageEventService: PageEvent;
  pageNumberService: number = 0;
  pageSizeService: number = 10;

  showPageSizeOptions = true;
  pageSizeOptions = [5, 10, 25, 50];
  modifiedToday: number = 0;

  user: GetUserDto;

  constructor(private vetConnectService: VetConnectService, public themeService: CustomizerSettingsService,
    private toastr: ToastrService, public router: Router, private snackBar: MatSnackBar) {
    const _user = localStorage.getItem('user');
    this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
      profile: new ProfileDto({
        name: ""
      })
    });

  }

  ngOnInit() {
    this.loadProcedures(this.pageNumberProcedure, this.pageSizeProcedure);
    this.loadServices(this.pageNumberService, this.pageSizeService);
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  ngAfterViewInit() {
    this.dataSourceProcedure.paginator = this.paginator;
    this.dataSourceService.paginator = this.paginator;
  }

  /**
   * 
   * @param pageNumber 
   * @param pageSize 
   */
  loadProcedures(pageNumber: number, pageSize: number) {
    this.vetConnectService.getConfigurationProcedure(pageNumber + 1, pageSize).subscribe(
      {
        next: response => {
          if (response.items!.length == 0){
            this.toastr.warning("No se encontraron procedimientos","Procedimientos");
          }else{
            this.dataSourceProcedure = new MatTableDataSource<GetConfigurationProcedureDto>(response.items);
            this.lengthProcedure = response.totalCount!;
            this.updateProcedureData(this.dataSourceProcedure.data);
            this.countModifiedToday(response.items!);
          }
        },
        error: error => {
          this.handleError(error);
        }
      }
    );
  }

  private countModifiedToday(items: any[]) {
    const today = new Date().toDateString();
    this.modifiedToday = items.filter(i => i.updated && new Date(i.updated).toDateString() === today).length;
  }

  getInitials(name?: string): string {
    if (!name) return '?';
    return name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase();
  }

    /**
   * 
   * @param pageNumber 
   * @param pageSize 
   */
    loadServices(pageNumber: number, pageSize: number) {
      this.vetConnectService.getConfigurationService(pageNumber + 1, pageSize).subscribe(
        {
          next: response => {
            if (response.items!.length == 0){
              this.toastr.warning("No se encontraron servicios","Servicios");
            }else{
              this.dataSourceService = new MatTableDataSource<GetConfigurationServiceDto>(response.items);
              this.lengthService = response.totalCount!;
              this.updateServiceData(this.dataSourceService.data);
              this.countModifiedToday(response.items!);
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
   * @param data 
   */
  updateProcedureData(data: GetConfigurationProcedureDto[]){
    this.currentPageProcedureData.forEach(item => {
      const currentItem = data.find(_item => _item.code === item.code);
      if (currentItem) {
        currentItem.price = item.price;
      }
    });
  }

  /**
   * 
   * @param data 
   */
  updateServiceData(data: GetConfigurationServiceDto[]){
    this.currentPageServiceData.forEach(item => {
      const currentItem = data.find(_item => _item.code === item.code);
      if (currentItem) {
        currentItem.price = item.price;
      }
    });
  }

  /**
   * 
   * @param data 
   */
  updateCurrentProcedureData(data: GetConfigurationProcedureDto[]){
    
    data.forEach(item => {
      const currentItem = this.currentPageProcedureData.find(_item => _item.name === item.name);
      if (currentItem) {
        currentItem.price = item.price;
      } else {
        this.currentPageProcedureData.push(new GetConfigurationProcedureDto({
          code: item.code,
          name: item.name,
          price: item.price,
          procedureCode: item.procedureCode
        }));
      }
    });
  }

  /**
   * 
   * @param data 
   */
  updateCurrentServiceData(data: GetConfigurationServiceDto[]){
    
    data.forEach(item => {
      const currentItem = this.currentPageServiceData.find(_item => _item.name === item.name);
      if (currentItem) {
        currentItem.price = item.price;
      } else {
        this.currentPageServiceData.push(new GetConfigurationServiceDto({
          code: item.code,
          name: item.name,
          price: item.price,
          serviceCode: item.serviceCode
        }));
      }
    });

  }

  /**
   * 
   * @param e 
   */
  handlePageEventProcedure(e: PageEvent) {
    this.pageEventProcedure = e;
    this.pageSizeProcedure = e.pageSize;
    this.pageNumberProcedure = e.pageIndex;
    this.loadProcedures(e.pageIndex, this.pageSizeProcedure);
    this.updateCurrentProcedureData(this.dataSourceProcedure.data);
  }

  /**
 * 
 * @param e 
 */
  handlePageEventService(e: PageEvent) {
    this.pageEventService = e;
    this.pageSizeService = e.pageSize;
    this.pageNumberService = e.pageIndex;
    this.loadServices(e.pageIndex, this.pageSizeService);
    this.updateCurrentServiceData(this.dataSourceService.data);
  }

  /**
   * 
   */
  saveProceduresConfiguration() {
  // Guarda cambios de la página actual
  this.updateCurrentProcedureData(this.dataSourceProcedure.data);

  let saveVeterinaryProcedureCommand = new SaveVeterinaryProcedureCommand({
    procedures: new Array()
  });

  this.currentPageProcedureData.forEach(element => {
    saveVeterinaryProcedureCommand.procedures?.push(new SaveVeterinaryProcedureDto({
      code: element.code,
      veterinaryCode: this.user.veterinary?.code,
      procedureCode: element.procedureCode,
      price: element.price
    }));
  });

  this.vetConnectService.veterinaryProcedurePOST(saveVeterinaryProcedureCommand).subscribe({
    next: () => {
      this.toastr.success('Se han guardado los procedimientos correctamente', 'Procedimientos');
      this.currentPageProcedureData = [];
      this.loadProcedures(this.pageNumberProcedure, this.pageSizeProcedure);
    },
    error: () => {
      this.toastr.error('Fallo en Guardado', 'Procedimientos');
    }
  });
  }

  /**
   * 
   */
  saveServicesConfiguration() {
  this.updateCurrentServiceData(this.dataSourceService.data);

  let saveVeterinaryServiceCommand = new SaveVeterinaryServiceCommand({
    services : new Array()
  });

  this.currentPageServiceData.forEach(element => {
    saveVeterinaryServiceCommand.services?.push(new SaveVeterinaryServiceDto({
      code : element.code,
      veterinaryCode : this.user.veterinary?.code,
      serviceCode : element.serviceCode,
      periodicityCode : PERIODICITY_DAY,
      unitOfTime : element.unitOfTime,
      price : element.price
    }));
  });

  this.vetConnectService.veterinaryServicePOST(saveVeterinaryServiceCommand).subscribe({
    next: () => {
      this.toastr.success('Se han guardado los servicios correctamente', 'Servicios');
      this.currentPageServiceData = [];
      this.loadServices(this.pageNumberService, this.pageSizeService);
    },
    error: () => {
      this.toastr.error('Fallo en Guardado', 'Servicios');
    }
  });
}

  onSaveProcedures($event: any) {
    this.saveProceduresConfiguration();
  }

  onSaveServices($event: any) {
    this.saveServicesConfiguration();
  }

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
