import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-welcome-dashboard',
    templateUrl: './welcome-dashboard.component.html',
    styleUrls: ['./welcome-dashboard.component.scss']
})
export class WelcomeDashboardComponent {

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

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [50],
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

}