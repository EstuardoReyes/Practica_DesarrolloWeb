import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component'
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilOpcionesComponent } from './components/perfil-opciones/perfil-opciones.component';
import { InformacionComponent } from './components/perfil-opciones/informacion/informacion.component';
import { CursosAprComponent } from './components/perfil-opciones/cursos-apr/cursos-apr.component';
import { OlvidarPassComponent } from './components/olvidar-pass/olvidar-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PublicationListComponent,
    NavigationBarComponent,
    LoginComponent,
    PerfilOpcionesComponent,
    InformacionComponent,
    CursosAprComponent,
    OlvidarPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
