import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';
import { GetAppointmentHistoryDto, GetPetByCodeDto, VetConnectService } from 'src/app/services/vetconnect.service';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";
import { FileService } from 'src/app/services/file.service';
import { API_URL } from 'src/app/shared/constants';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent {

  history: GetAppointmentHistoryDto[];
  pet: GetPetByCodeDto = new GetPetByCodeDto({
    name: ""
  });
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vetConnectService: VetConnectService,
    public themeService: CustomizerSettingsService,
    private fileService: FileService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.vetConnectService.getPetByCode(params['code']).subscribe({
        next: response => {
          this.pet = response.items![0];

          const serie = Math.round((this.getPercentage(this.pet)/this.getTotalProperties(this.pet)*100));
          this.chartOptions = {
            series: [serie],
            chart: {
                height: 110,
                width: 110,
                offsetX: 2.5,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#00B69B"],
            plotOptions: {
                radialBar: {
                    startAngle: -120,
                    endAngle: 120,
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: 3,
                            fontSize: "14px",
                            fontWeight: "700",
                        }
                    }
                }
            }
          };

        },
        error: error => {
          //this.handleError(error);
        }
      });

      this.vetConnectService.getAppointmentHistory(params['code']).subscribe({
        next: response => {
            this.history = response.items!;
          },
          error: error => {
            //this.handleError(error);
          }
        });
  
      });
  }

  onView(code: string){
    this.router.navigate(['/profile'], { queryParams: { code } });
  }

  getAge(birthdate: string | null) {

    if (!birthdate) {
      return 0; // o maneja el caso de fecha de nacimiento nula según tus necesidades
    }

    const fechaNacimiento = new Date(birthdate);
    const hoy = new Date();

    const diff = hoy.getTime() - fechaNacimiento.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  async onDownloadFile(code: string){
    await this.fileService.downloadFile(code!);
  }

  getPercentage(object: any): number {
    let counter = 0;
  
    for (const property in object) {
      if (object.hasOwnProperty(property) && object[property] !== null) {
        counter++;
      }
    }
  
    return counter;
  }

  getTotalProperties(object: any): number {
    let counter = 0;
  
    for (const property in object) {
      if (object.hasOwnProperty(property)) {
        counter++;
      }
    }
  
    return counter;
  }

  onPrint(code: string){
    window.open(API_URL + 'api/Pdf?code=' + code,'_blank');
  }
}
