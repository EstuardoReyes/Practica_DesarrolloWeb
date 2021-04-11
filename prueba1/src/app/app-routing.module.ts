import { PublicacionesInicialComponent } from './components/publicaciones-inicial/publicaciones-inicial.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { OlvidarPassComponent } from './components/olvidar-pass/olvidar-pass.component';
import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegistroComponent } from './components/registro/registro.component'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'
import { PerfilOpcionesComponent } from './components/perfil-opciones/perfil-opciones.component'
import { InformacionComponent } from './components/perfil-opciones/informacion/informacion.component'
import { CursosAprComponent } from './components/perfil-opciones/cursos-apr/cursos-apr.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home/perfil',
    redirectTo: 'home/perfil/info',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: NavigationBarComponent,

    children: [
      { path: 'public/add', component: LoginComponent},
      { path: 'inicio', component: PublicacionesInicialComponent},
      { path: 'publicacion', component: PublicationListComponent},
      { path: 'perfil', component: PerfilOpcionesComponent,
      children: [
        { path: 'info', component: InformacionComponent },
        { path: 'cursos-a', component: CursosAprComponent }
      ]}

    ]},
  {
    path: 'contraseña',
    component: OlvidarPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
