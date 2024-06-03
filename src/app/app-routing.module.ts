import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // {
  //   path:'**',
  //   redirectTo:'404',
  //   pathMatch:'full'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-error',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./components/page-error/page-error.module').then(m => m.PageErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
