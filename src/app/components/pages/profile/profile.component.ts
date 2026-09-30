import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent
} from "ng-apexcharts";
import { ActivatedRoute, Router } from "@angular/router";
import { GetUserByCodeDto, VetConnectService } from "src/app/services/vetconnect.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    user: GetUserByCodeDto = new GetUserByCodeDto({
        firstName: "",
        lastName: "",
        documentType: undefined,
        identificationNumber: undefined,
        email: undefined,
        neighborhood: undefined
    });
    constructor(
        private route: ActivatedRoute,
        public themeService: CustomizerSettingsService,
        private router: Router,
        private vetConnectService: VetConnectService
    ) {
        const serie = Math.round((this.getPercentage(this.user)/this.getTotalProperties(this.user)*100));
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
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            this.vetConnectService.getUserByCode(params['code'],1,1).subscribe({
              next: response => {
                this.user = response.items![0];
              },
              error: error => {
                //this.handleError(error);
              }
            });
      
          });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    onView(code: string){
        this.router.navigate(['/profile'], { queryParams: { code } });
    }

    getPercentage(object: any): number {
        let counter = 0;
      
        for (const property in object) {
          if (object.hasOwnProperty(property) && object[property] !== undefined) {
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

}