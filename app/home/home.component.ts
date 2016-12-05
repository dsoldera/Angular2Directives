import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/modal/modal.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ModalService]
})

export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService) {  }

  ngOnInit() { }

   showModal(event:Event): void {
    event.preventDefault();

    this.modalService.activate('Olá, vc está visualizando um Modal Aberto', 'Title');
   }
}
