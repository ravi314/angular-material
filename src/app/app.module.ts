import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { AppMaterialModule } from './app.material.module';
import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialButtonComponent } from './material-button/material-button.component'

@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    MaterialSliderComponent,
    MaterialFormComponent,
    MaterialButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
