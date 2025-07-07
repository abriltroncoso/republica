import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { MerchList } from './merch-list/merch-list';
import { Carta } from './carta/carta';

const routes: Routes = [
  {
    path: "", redirectTo: "Home", pathMatch : 'full'
  },
  {
    path: "Home",component : Home
  },
  {
    path: "Merch", component : MerchList
  },
  {
    path: "Carta", component: Carta
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
