import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { OlvidarPassComponent } from './components/olvidar-pass/olvidar-pass.component';
import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegistroComponent } from './components/registro/registro.component'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
    path: 'contraseña',
    component: OlvidarPassComponent
  },
  {
    path: 'home',
    component: NavigationBarComponent
  },
  {
    path: 'publicacion',
    component: PublicationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
