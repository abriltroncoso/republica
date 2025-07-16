import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { MerchList } from './merch-list/merch-list';
import { Carta } from './carta/carta';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { Eventos } from './eventos/eventos';
import { Tortas } from './tortas/tortas';

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
  },
  {
    path: "Merch/:id",component : DetalleProducto
  },
  {
    path: "Eventos", component : Eventos
  },
  {
    path: "Tortas", component : Tortas
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
