import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-credit-net',
  templateUrl: './credit-net.component.html',
  styleUrls: ['./credit-net.component.css'],
})
export class CreditNetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  chart: any;

  data = [41.89, 40.16, 42.15, 40.75, 41.33, 40.86, 36.21];
  labels = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22'];
  createChart() {
    this.chart = new Chart('creditNet', {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: [
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
            },
            tension: 0.1,
            label: 'Crédit net',
            data: this.data,
            backgroundColor: 'orange',
            borderColor: 'orange',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Crédit Direct Net d'Interets Réservés en milliards de DZD",
            padding: {
              bottom: 30,
              top: 10,
            },
          },
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              boxHeight: 2,
              font: {
                size: 11,
              },
            },
          },
        },
        scales: {
          xAxes: {
            offset: true,
          },

          y: {
            beginAtZero: false,
            grace: 1,
            ticks: {
              stepSize: 1,
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return value;
              },
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }
}
