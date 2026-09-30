import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexGrid,
    ApexPlotOptions,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    grid: ApexGrid;
    chart: ApexChart;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
    colors: any;
};

@Component({
    selector: 'app-completed-tasks',
    templateUrl: './completed-tasks.component.html',
    styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Completed Tasks",
                    data: [30, 20, 40, 25, 18, 43, 15, 35]
                }
            ],
            chart: {
                type: "bar",
                height: 290,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    borderRadiusApplication: 'end',
                    horizontal: false,
                    columnWidth: "20%"
                }
            },
            xaxis: {
                type: "category",
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            colors: [
                "#757FEF"
            ],
            legend: {
                offsetY: 0,
                show: false,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            yaxis: {
                show: false,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            grid: {
                show: false,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}