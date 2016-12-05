import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

// const KEY_ESC = 27;

@Component({
  moduleId: module.id,
  selector: 'stelo-modal',
  styleUrls: ['modal.styles.scss'],
  templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {

  title: string;
  message: string;
  okText: string;
  cancelText: string;
  cancelActive: boolean;
  negativeOnClick: (e: any) => void;
  positiveOnClick: (e: any) => void;

  private defaults = {
    title: 'ola',
    message: 'ola',
    cancelText: 'Cancelar',
    okText: 'Sair',
    cancelActive: true
  };

  private modalElement: any;
  private cancelButton: any;
  private okButton: any;
  constructor(modalService: ModalService) {
    modalService.activate = this.activate.bind(this);
  }

  activate(message = this.defaults.message, title = this.defaults.title, cancelActive = this.defaults.cancelActive):Promise<boolean> {
    this.title = title;
    this.message = message;
    this.cancelActive = cancelActive;
    this.okText = this.defaults.okText;
    this.cancelText = this.defaults.cancelText;

    let promise = new Promise<boolean>((resolve, reject) => {
      this.negativeOnClick = (e: any) => resolve(false);
      this.positiveOnClick = (e: any) => resolve(true);
      this.show();
    });

    return promise;
  }

  ngOnInit() {
    this.modalElement = document.getElementById('confirmationModal');
    this.cancelButton = document.getElementById('cancelButton');
    this.okButton = document.getElementById('okButton');
  }

  private show():void {
    // document.onkeyup = null;

    if (!this.modalElement || !this.cancelButton || !this.okButton) {
      return;
    }

    this.modalElement.style.display = 'block';
    this.modalElement.style.zIndex = 9999;
    this.cancelButton.onclick = ((e: any) => {
      e.preventDefault();
      if (!this.negativeOnClick(e)) {
        this.hideDialog();
      }
    });

    this.okButton.onclick = ((e: any) => {
      e.preventDefault();
      if (!this.positiveOnClick(e)) {
        this.hideDialog();
      }
    });

    this.modalElement.onclick = () => {
      this.hideDialog();
      return this.negativeOnClick(null);
    };


    if(this.cancelActive){
      this.cancelButton.style.display = 'block'
    } else {
      this.cancelButton.style.display = 'none'
    }


    // close modal on ESC button
    // deixar codigo pra futura implementação
    // document.onkeyup = (e: any) => {
    //   if (e.which === KEY_ESC) {
    //     this.hideDialog();
    //     return this.negativeOnClick(null);
    //   }
    // };
  }

  private hideDialog():void {
    document.onkeyup = null;
    this.modalElement.style.display = 'none';
    window.setTimeout(() => this.modalElement.style.zIndex = 0, 400);
  }
}
