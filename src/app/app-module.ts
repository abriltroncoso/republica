import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MerchList } from './merch-list/merch-list';
import { Home } from './home/home';
import { Carta } from './carta/carta';

@NgModule({
  declarations: [
    App,
    MerchList,
    Home,
    Carta
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
