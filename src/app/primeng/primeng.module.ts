import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Panel, PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    ToolbarModule,
  ],
  exports: [
    CardModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    ToolbarModule,
  ],
})
export class PrimengModule {}
