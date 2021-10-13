import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CientificaModule } from './cientifica';
import { ConversorModule } from './conversor';
import { DashboardModule } from './dashboard';
import { PatientsModule } from './patients';
import { JogoDaVelhaModule } from './velha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CientificaModule,
    ConversorModule,
    JogoDaVelhaModule,
    PatientsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
