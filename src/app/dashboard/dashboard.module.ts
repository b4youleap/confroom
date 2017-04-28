import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';

import { 
  MdButtonModule, MdCheckboxModule, MdSidenavModule,
  MdToolbarModule, MdIconModule 
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
