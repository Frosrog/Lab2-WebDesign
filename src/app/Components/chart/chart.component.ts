import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AccidentsService } from '../../accidents.service'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
    @ViewChild('canvas') canvas: ElementRef;

    chart = [];
    labels: any = [];

    data: any = [];

    constructor(private _accidents: AccidentsService) { }

    ngOnInit() {
        this._accidents.showAccidents()
        .subscribe(res => {
          console.log(res['result'].fArray)
          this.labels = res['result']
        })
      } 
        

    
        ngAfterViewInit() {
        this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
            type: 'line',
            labels: this.labels,
            data: {
                
                
      
                  datasets: [
                    { 
                      label: 'Colisión con motocicleta',
                      borderColor: "#3cba9f",
                      fill: false,
                      data: [100,50,8,63,3,8,6]
                    },
                    { 
                      label: 'Atropello a persona',
                      borderColor: "#339f",
                      fill: false,
                      data: [57,5,9,3,9,45,9,63]
                    },
                    { 
                      label: 'Salió de la vía',
                      borderColor: "#FF0000",
                      fill: false,
                      data: [57,45,69,73,89,45,19,63]
                    }
                  ]
                },
            
            options: {
                responsive: true
            }
        });

    };

}