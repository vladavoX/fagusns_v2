import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { RecentComponent } from './components/recent/recent.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HomeComponent } from './components/home/home.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { NavbarrsComponent } from './components/navbarrs/navbarrs.component';
import { LandingrsComponent } from './components/landingrs/landingrs.component';
import { AboutrsComponent } from './components/aboutrs/aboutrs.component';
import { WorkrsComponent } from './components/workrs/workrs.component';
import { RecentrsComponent } from './components/recentrs/recentrs.component';
import { CompanyrsComponent } from './components/companyrs/companyrs.component';
import { ContactrsComponent } from './components/contactrs/contactrs.component';
import { PartnerrsComponent } from './components/partnerrs/partnerrs.component';
import { FooterrsComponent } from './components/footerrs/footerrs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutComponent,
    WorkComponent,
    RecentComponent,
    CompanyComponent,
    ContactComponent,
    PartnersComponent,
    FooterComponent,
    HomeComponent,
    PocetnaComponent,
    NavbarrsComponent,
    LandingrsComponent,
    AboutrsComponent,
    WorkrsComponent,
    RecentrsComponent,
    CompanyrsComponent,
    ContactrsComponent,
    PartnerrsComponent,
    FooterrsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
