import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'clients',
    loadChildren: () => import('mfClient/MfClientContentModule')
    .then(m => m.MfClientContentModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('mfEmploye/MfEmployeContentModule')
    .then(m => m.MfEmployeContentModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
