import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// export the Module Routes
export class AppRoutingModule {}

// to export all the components used on the Routes
export const routableComponents:any = []
