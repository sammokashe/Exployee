import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule,MatListModule,MatToolbarModule,MatSidenavContent,MatSidenavContainer,MatIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertDetailsComponent,
    FetchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSidenavModule,MatListModule,MatToolbarModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
