// Index just to export the Component and Service in one line

// export { ModalComponent }   from './modal.component';
// export { ModalService } from './modal.service';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent }   from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {
  constructor( @Optional() @SkipSelf() parentModule: ModalModule) {
  }
}
