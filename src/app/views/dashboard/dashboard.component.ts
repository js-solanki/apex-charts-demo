import { Component, OnInit } from '@angular/core';
import { SalesData } from 'src/constants';
import { ChartService } from '../../service/chart.service';
import { ComperativeData } from 'src/constants/marksdata';
import { SettingDialogComponent } from '../setting-dialog/setting-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';

enum ChartType {
  GroupedBar = 'Grouped-bar',
  LineChart = 'line-chart',
  StackedArea = 'stacked-area',
  Mixed = 'mixed',
}

enum ChartType_1 {
  Bar = 'bar',
  Pie = 'pie',
  Donut = 'donut',
  HorizontalBar = 'horizontal-bar',
  CustomAngleCircle = 'custom-angle-circle',
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  card1ChartOptions: any = null;
  card2ChartOptions: any = null;
  defaultChartType: string = 'bar';
  defaultChartType2: string = 'mixed';
  chartTypeArray: string[] = [
    'bar',
    'pie',
    'donut',
    'horizontal-bar',
    'custom-angle-circle'
  ]

  comparativeChartTypeArray: string[] = [
    'Grouped-bar',
    'line-chart',
    'stacked-area',
    'mixed'
  ]

  data = SalesData;
  data2 = ComperativeData;
  chartType: string | null = null;
  chartType2: string | null = null;

  constructor(private chartService: ChartService, private matDialog: MatDialog) {
    this.chartType = this.defaultChartType;
    this.chartType2 = this.defaultChartType2;
    this.prepareChartData();
    this.createComparativeChart();
  }

  procesData() {
    let barChartSeriesData: any[] = [];
    this.data.data.forEach((element: any) => {
      let data = {
        name: element.statusText,
        data: [element.count],
        color: element.color,
      }
      barChartSeriesData.push(data);
    });
    return barChartSeriesData;
  }

  processPieChartData() {
    return {
      data: this.data.data.map((w: any) => +w.count),
      label: this.data.data.map((w: any) => w.statusText),
      color: this.data.data.map((w: any) => w.color),
      title: this.data.title,
      labelX: this.data2.labelX,
      labelY: this.data2.labelY,
    };
  }

  ngOnInit(): void {
  }

  prepareComparativeChartData() {
    return {
      series1: this.data2.data.map((w: any) => w.CompanyA),
      series2: this.data2.data.map((w: any) => w.CompanyB),
      caetegories: this.data2.data.map((w: any) => w.year),
      title: this.data2.title,
      labelA: this.data2.labelA,
      labelB: this.data2.labelB,
      labelX: this.data2.labelX,
      labelY: this.data2.labelY,
      series1color: this.data2.series1color,
      series2color: this.data2.series2color,
    };
  }

  prepareChartData(): void {
    let chartData;
    switch (this.chartType) {
      case ChartType_1.Bar:
        chartData = this.procesData();
        this.card1ChartOptions = this.chartService.prepareBarChartData(chartData);
        break;
      case ChartType_1.Pie:
        chartData = this.processPieChartData();
        this.card1ChartOptions = this.chartService.preparePieChartData(chartData);
        break;
      case ChartType_1.Donut:
        chartData = this.processPieChartData();
        this.card1ChartOptions = this.chartService.prepareDounutChartData(chartData);
        break;
      case ChartType_1.HorizontalBar:
        chartData = this.processPieChartData();
        this.card1ChartOptions = this.chartService.prepareHBarChartData(chartData);
        break;
      case ChartType_1.CustomAngleCircle:
        chartData = this.processPieChartData();
        this.card1ChartOptions = this.chartService.prepareCustomAngleCircleData(chartData);
        break;
      default:
        throw new Error(`Unsupported chart type: ${this.chartType}`);
    }
  }

  createComparativeChart(): void {
    const barChartSeriesData = this.prepareComparativeChartData();
    this.card2ChartOptions = this.prepareChartOptionsByType(barChartSeriesData, this.chartType2);
  }

  private prepareChartOptionsByType(seriesData: any, chartType: string | null): any {
    switch (chartType) {
      case ChartType.GroupedBar:
        return this.chartService.prepareGroupedBarChartData(seriesData);
      case ChartType.LineChart:
        return this.chartService.prepareLineChartData(seriesData);
      case ChartType.StackedArea:
        return this.chartService.prepareStackedAreaChartData(seriesData);
      case ChartType.Mixed:
        return this.chartService.prepareMixedChartData(seriesData);
      default:
        throw new Error(`Unsupported chart type: ${chartType}`);
    }
  }

  openSettingDialog(): void {
    let dialogRef = this.matDialog.open(SettingDialogComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.prepareChartData();
        this.createComparativeChart();
      }
    })
  }

  openChartDailog(isComperative: boolean = false): void {
    let dialogRef = this.matDialog.open(ChartDialogComponent, {
      width: '70%',
      data: isComperative ? this.card2ChartOptions : this.card1ChartOptions
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
      }
    })
  }
}
