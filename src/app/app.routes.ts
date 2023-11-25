import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
  {
    path: 'compute',
    loadChildren: () =>
      import('./compute/compute-routing.module').then(
        (m) => m.ComputeRoutingModule
      ),
  },
  { path: 'say-hello', component: HelloComponent },
  { path: '', redirectTo: '/say-hello', pathMatch: 'full' },
];
