import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import { AuthService, ConsultasapiService, ScreenService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, ScreenService, ConsultasapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
