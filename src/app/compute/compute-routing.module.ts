import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputeComponent } from './compute.component';

const routes: Routes = [{ path: '', component: ComputeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputeRoutingModule {}
