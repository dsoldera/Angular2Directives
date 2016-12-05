import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { HomeComponent }   from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import { TooltipModule } from '../directives/tooltip/tooltip.module';

import { HighlightDirective } from '../directives/highlight.directive';

import { ModalService } from '../shared/index';
import { ModalModule } from '../shared/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    HighlightDirective
  ],
  providers: [
    ModalService
  ],
})

export class HomeModule { }
