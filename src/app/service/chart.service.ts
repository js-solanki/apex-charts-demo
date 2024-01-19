import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  labelColor: string = '#6b5b95';
  toolBarOptions = {
    download: false,
    selection: false,
    zoom: false,
    zoomin: false,
    zoomout: false,
    pan: false,
    reset: false,
  }

  legendAlign = "bottom";

  preparePieChartData(pieChartData: any) {
    return {
      series: pieChartData.data,
      labels: pieChartData.label,
      chart: {
        height: '250',
        type: 'pie',
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "15",
          fontWeight: "250",
        },
      },
      plotOptions: {
        pie: {
          labels: {
            show: true
          },
          customScale: 0.8,
          expandOnClick: true,
        }
      },
      colors: pieChartData.color,
      legend: {
        position: this.legendAlign,
        fontWeight: 600,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
    }
  }

  prepareBarChartData(barChartSeriesData: any) {
    let options = {
      chart: {
        type: 'bar',
        height: '250',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
        background: 'white',
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          // columnWidth: "100%",
        }
      },
      series: barChartSeriesData,
      xaxis: {
        tickPlacement: 'on',
        categories: [""],
        title: {
          text: barChartSeriesData.labelX,
          style: {
            colors: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: {
        tickPlacement: 'on',
        categories: [""],
        title: {
          text: barChartSeriesData.labelY,
          style: {
            colors: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      legend: {
        position: this.legendAlign,
        fontWeight: 600,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
      grid: {
        show: false
      },
      responsive: [
        {
          breakpoint: 768, // Set your desired breakpoint width
          options: {
            chart: {
              height: '250px', // Adjust the height as needed
            },
          },
        },
      ]
    }
    return options;
  }

  prepareHBarChartData(barChartSeriesData: any) {
    let options = {
      series: [{
        data: barChartSeriesData.data
      }],
      chart: {
        type: 'bar',
        height: 250,
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors: barChartSeriesData.color,
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: barChartSeriesData.label,
        title: {
          text: barChartSeriesData.labelX,
          color: this.labelColor
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: this.labelColor
          }
        },
        title: {
          text: barChartSeriesData.labelY,
          color: this.labelColor
        },

      },
      title: {
        text: barChartSeriesData.title,
        align: 'center',
        floating: true
      },
      legend: {
        position: this.legendAlign,
        fontWeight: 600,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
    }
    return options;
  }

  prepareDounutChartData(data: any) {

    return {
      series: data.data,
      chart: {
        height: '250',
        type: 'donut',
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      colors: data.color,
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: 'gradient',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          labels: {
            show: true,
            style: {
              color: [this.labelColor]
            }
          },
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: data.label,
      title: {
        text: data.title
      },
      legend: {
        position: this.legendAlign,
        fontWeight: 600,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: '650px',
          },
          legend: {
            fontWeight: 600,
            position: this.legendAlign,
            color: this.labelColor
          }
        }
      }]
    }
  }

  prepareCustomAngleCircleData(data: any) {
    let option = {
      series: data.data,
      chart: {
        height: 320,
        type: 'radialBar',
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 10,
            size: '10%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: data.color,
      labels: data.label,
      legend: {
        fontWeight: 600,
        position: this.legendAlign,
        show: true,
        fontSize: '12px',

        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        itemMargin: {
          vertical: 5
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            fontWeight: 600,
            position: this.legendAlign,
            show: false
          }
        }
      }]
    };
    return option;
  }

  prepareGroupedBarChartData(data: any) {
    let options = {
      series: [{
        name: data.labelA,
        data: data.series1,
        color: data.series1color
      }, {
        name: data.labelB,
        data: data.series2,
        color: data.series2color
      }],
      chart: {
        type: 'bar',
        height: 250,
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      colors: [data.series1color, data.series2color],
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',

        }
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: data.caetegories,
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: {
        title: {
          text: data.labelY,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      legend: {
        fontWeight: 600,
        position: this.legendAlign,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
    };
    return options;
  }

  prepareLineChartData(data: any) {
    let options = {
      series: [
        {
          name: data.labelA,
          data: data.series1,

        },
        {
          name: data.labelB,
          data: data.series2,

        }
      ],
      chart: {
        height: 250,
        type: 'line',
        background: 'white',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
          fill: {
            colors: [data.series1color, data.series2color]
          }
        },
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      colors: [data.series1color, data.series2color],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: data.title,
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: data.caetegories,
        color: data.series1color,
        title: {
          text: data.labelX,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: {
        title: {
          text: data.labelY,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }

      },
      legend: {
        fontWeight: 600,
        position: this.legendAlign,
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }
    return options;
  }

  prepareStackedAreaChartData(data: any) {
    let options = {
      series: [
        {
          name: data.labelA,
          data: data.series1
        },
        {
          name: data.labelB,
          data: data.series2
        },

      ],
      chart: {
        type: 'area',
        height: 250,
        stacked: true,
        background: 'white',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      colors: [data.series1color, data.series2color],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        fontWeight: 600,
        position: this.legendAlign,
        horizontalAlign: 'left',
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
      xaxis: {
        categories: data.caetegories,
        title: {
          text: data.labelX,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: {
        title: {
          text: data.labelY,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
    };
    return options;
  }

  prepareMixedChartData(data: any) {
    var options = {
      series: [{
        name: data.labelA,
        type: 'column',
        data: data.series1,
      }, {
        name: data.labelB,
        type: 'line',
        data: data.series2,
      }],
      chart: {
        height: 250,
        background: 'white',
        type: 'line',
        toolbar: {
          tools: {
            download: this.toolBarOptions['download'],
            selection: this.toolBarOptions['selection'],
            zoom: this.toolBarOptions['zoom'],
            zoomin: this.toolBarOptions['zoomin'],
            zoomout: this.toolBarOptions['zoomout'],
            pan: this.toolBarOptions['pan'],
            reset: this.toolBarOptions['reset'],
          }
        },
      },
      title: {
        text: data.title
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        fontWeight: 600,
        position: this.legendAlign,
        labels: {
          colors: this.labelColor,
          useSeriesColors: false
        },
      },
      labels: data.labels,
      colors: [data.series1color, data.series2color],
      xaxis: {
        type: 'categories',
        categories: data.caetegories,
        title: {
          text: data.labelX,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      },
      yaxis: [{
        title: {
          text: data.labelY,
          style: {
            color: this.labelColor
          }
        },
        labels: {
          style: {
            colors: this.labelColor
          }
        }
      }]
    };

    return options;
  }



}
