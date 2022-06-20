import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // contatosSide: boolean = true
  // chatSide: boolean = false

  contatosData = [
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/984235258864091136/unknown.png',
      name: 'Fauzi Halabe'
    },
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/984235154522394634/unknown.png',
      name: 'Murilo Moraes'
    },
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/984235325859708989/unknown.png',
      name: 'Gabriel Pacheco'
    },
    { 
      url: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    }
  ]

  constructor() {  }

  ngOnInit(): void {

  }

  // toggleChat(){
  //   this.contatosSide = !this.contatosSide
  //   this.chatSide = !this.chatSide
  // }
}
