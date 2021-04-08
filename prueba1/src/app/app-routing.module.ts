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
    redirectTo: '/home',
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
      { path: 'perfil', component: PerfilOpcionesComponent,
      children: [
        { path: 'info', component: InformacionComponent },
        { path: 'cursos-a', component: CursosAprComponent }
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
