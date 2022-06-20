import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  operatorStatistics = [
    {
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/987405900300054528/unknown.png',
      name: 'Marco Alves'
    }
  ]

  listOperator = [
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/987405900300054528/unknown.png',
      name: 'Marco Alves'
    },
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/987406363187609721/unknown.png',
      name: 'Vitor Junqueira'
    },
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/987440047261372617/unknown.png',
      name: 'Erick Sasa'
    },
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

}
