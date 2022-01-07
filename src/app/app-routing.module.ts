import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  /* {
    path: 'clients',
    loadChildren: () => import('mfClient/MfClientContentModule')
    .then(m => m.MfClientContentModule)
  }, */
  {
    path: 'clients',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfClient',
        remoteEntry: 'http://localhost:5000/mfClientRemoteEntry.js',
        exposedModule: './MfClientContentModule'
      })
        .then(m => m.MfClientContentModule)
  },
  /* {
    path: 'employees',
    loadChildren: () => import('mfEmploye/MfEmployeContentModule')
      .then(m => m.MfEmployeContentModule)
  }, */
  {
    path: 'employees',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfEmploye',
        remoteEntry: 'http://localhost:5001/mfEmployeRemoteEntry.js',
        exposedModule: './MfEmployeContentModule'
      })
        .then(m => m.MfEmployeContentModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
