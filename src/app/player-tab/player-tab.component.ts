import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip,registerables} from 'chart.js';
@Component({
  selector: 'app-player-tab',
  templateUrl: './player-tab.component.html',
  styleUrls: ['./player-tab.component.css']
})
export class PlayerTabComponent implements OnInit {
  //@Input name:string name;
  @Input() name: string = "test";
  @Input() vpip: number = 0;
  @Input() pfr: number = 0;
  @Input() profit: number = 0;

  isProfitActive:boolean = false;
  constructor() { 
  }

  ngOnInit(): void {

    Chart.register(...registerables);



  var profitGraph = new Chart("profitGraph", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [-12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

  }

  graphProfit(){
    this.isProfitActive = true;
    console.log(this.isProfitActive);
  }

}
