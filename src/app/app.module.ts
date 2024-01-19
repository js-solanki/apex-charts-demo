import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SettingDialogComponent } from './views/setting-dialog/setting-dialog.component';
import { ChartDialogComponent } from './views/chart-dialog/chart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingDialogComponent,
    ChartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
