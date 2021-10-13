import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule} from './shared/material-module';
import { ComponentesModule } from './componentes';
import { DiretivasModule } from './diretivas';
import { IntroducaoModule } from './introducao';
import { MaterialModule } from './material';
import { ModulosModule } from './modulos';
import { PipesModule } from './pipes';
import { ServicosModule } from './servicos';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    ComponentesModule,
    DiretivasModule,
    IntroducaoModule,
    MaterialModule,
    ModulosModule,
    PipesModule,
    ServicosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
