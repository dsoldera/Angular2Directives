import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule, routableComponents } from './app.routes';
// import { HighlightDirective } from './directives/highlight.directive';
// import { TooltipModule } from './directives/tooltip/tooltip.module';

import { HomeModule } from './home/home.module';


@NgModule ({
  declarations: [ // used to import my components
    AppComponent,
    // HighlightDirective,
    routableComponents
  ],
  imports: [ // used to import Angular 2 Modules
    BrowserModule,
    HomeModule,
    // TooltipModule,
    AppRoutingModule
   ],
   exports: [
    // HighlightDirective,
   ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
