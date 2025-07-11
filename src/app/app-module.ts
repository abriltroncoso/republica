import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MerchList } from './merch-list/merch-list';
import { Home } from './home/home';
import { Carta } from './carta/carta';
import { InputNumero } from './input-numero/input-numero';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { Carrito } from './carrito/carrito';

@NgModule({
  declarations: [
    App,
    MerchList,
    Home,
    Carta,
    InputNumero,
    DetalleProducto,
    Carrito
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
