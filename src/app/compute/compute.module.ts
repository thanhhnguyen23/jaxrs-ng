import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputeRoutingModule } from './compute-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComputeRoutingModule],
  providers: [HttpClientModule],
})
export class ComputeModule {}
