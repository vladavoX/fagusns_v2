import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pocetna', component: PocetnaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
