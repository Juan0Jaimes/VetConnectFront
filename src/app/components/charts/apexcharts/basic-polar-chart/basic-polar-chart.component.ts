import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexStroke,
    ApexGrid,
    ApexLegend,
    ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    legend: ApexLegend;
    grid: ApexGrid;
    stroke: ApexStroke;
    fill: ApexFill;
};

@Component({
    selector: 'app-basic-polar-chart',
    templateUrl: './basic-polar-chart.component.html',
    styleUrls: ['./basic-polar-chart.component.scss']
})
export class BasicPolarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            chart: {
                type: "polarArea"
            },
            stroke: {
                colors: ["#ffffff"]
            },
            fill: {
                opacity: 0.8
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ],
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            legend: {
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}