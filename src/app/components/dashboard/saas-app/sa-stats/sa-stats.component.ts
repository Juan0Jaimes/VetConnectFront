import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent
} from "ng-apexcharts";
import { GetUserDto, ProfileDto, VetConnectService } from "src/app/services/vetconnect.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-sa-stats',
    templateUrl: './sa-stats.component.html',
    styleUrls: ['./sa-stats.component.scss']
})
export class SaStatsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    totalUsers: string;
    totalPets: string;
    totalEmailPending: string;
    user: GetUserDto;

    constructor(
        public themeService: CustomizerSettingsService,
        private vetConnectService: VetConnectService, 
    ) {
        this.chartOptions = {
            series: [45],
            chart: {
                width: 120,
                height: 130,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                }
            },
            colors: [
                "#2DB6F5"
            ],
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
                            fontSize: "15px",
                            fontWeight: "600"
                        }
                    }
                }
            }
        };

        const _user = localStorage.getItem('user');
        this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
            profile: new ProfileDto({
                name: ""
            })
        });
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    ngOnInit(): void {
        this.vetConnectService.statistic('842da843-5dcd-4fa2-80a6-c1913cd51c2f').subscribe({
            next: response => {
                if (response.totalCount!>0){
                    response.items!.forEach(element => {
                        if(element.key == "TotalUsers"){
                            this.totalUsers = element.value!;
                        }else if(element.key == "TotalPets"){
                            this.totalPets = element.value!;
                        }else if(element.key == "EmailPending"){
                            this.totalEmailPending = element.value!;
                        }
                    });
                    
                }
              },
              error: error => {
                //this.handleError(error);
              }
        })
    }
}