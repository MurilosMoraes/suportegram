import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  modalRef?: BsModalRef;

  listOperator = [
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    },
    {
      photo: 'https://cdn.discordapp.com/attachments/930491194633519164/984235492843352094/unknown.png',
      name: 'Ronald Lopes'
    }
  ]
 
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
