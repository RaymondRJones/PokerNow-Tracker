import { Component, Input, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);


export interface PeriodicElement {
  name: string;
  position: number;
  vpip: number;
  profit: number;
  handsPlayed: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ray', vpip: 1.0079, profit: -8, handsPlayed: 100},
  {position: 2, name: 'Scotty', vpip: 4.0026, profit: -15, handsPlayed: 100},
  {position: 3, name: 'Cedric', vpip: 6.941, profit: -48, handsPlayed: 100},
  {position: 4, name: 'Fish', vpip: 9.0122, profit: 40, handsPlayed: 100},
  {position: 5, name: 'Tristan', vpip: 10.811, profit: 39, handsPlayed: 100},
  {position: 6, name: 'Jonathan', vpip: 12.0107, profit: 52, handsPlayed: 100},
  {position: 7, name: 'Ben', vpip: 14.0067, profit: 29, handsPlayed: 100},
  {position: 8, name: 'Collin', vpip: 15.9994, profit: 81, handsPlayed: 100},
  {position: 9, name: 'John', vpip: 18.9984, profit: 11, handsPlayed: 100},
  {position: 10, name: 'Cheyenne', vpip: 20.1797, profit: 22, handsPlayed: 100},
];


@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  @Input() playerName: string = "";

  displayedColumns: string[] = ['position', 'name', 'vpip', 'profit'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  selectedPlayer =  ELEMENT_DATA[0];
  playerNames: string[] = [];
  playerProfits: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.displaySummary();
    var myChart = new Chart("myChartt", {
      type: 'bar',
      data: {
          labels: this.playerNames,
          datasets: [{
              label: 'Total Player Profit',
              data: this.playerProfits,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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
  setPlayer(row: PeriodicElement){
    this.clickedRows.add(row);
    this.selectedPlayer = row;
  }
  displaySummary(){
    for(let i = 0; i < this.dataSource.length; i++ ){
      this.playerNames.push(this.dataSource[i].name);
      this.playerProfits.push(this.dataSource[i].profit);
    }
  }

}
