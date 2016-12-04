import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { HomeComponent }   from './home.component';

import { HomeRoutingModule } from './home-routing.module';

// import { TooltipModule } from '../directives/tooltip/tooltip.module';

import { HighlightDirective } from '../directives/highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    // TooltipModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    HighlightDirective
  ],
  providers: [],
})

export class HomeModule { }
