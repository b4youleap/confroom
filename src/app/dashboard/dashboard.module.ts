import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';

import { 
  MdButtonModule, MdCheckboxModule, MdSidenavModule,
  MdToolbarModule, MdIconModule 
} from '@angular/material';
import 'hammerjs';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
