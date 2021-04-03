import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegistroComponent } from './components/registro/registro.component'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
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
      { path: 'public/add', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
