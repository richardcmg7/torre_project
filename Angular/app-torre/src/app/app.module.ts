import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// routes
import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenomaComponent } from './pages/genoma/genoma.component';
import { CarouselCardGenomaComponent } from './components/genoma/carousel-card-genoma/carousel-card-genoma.component';
import { ProfileUserGenomaComponent } from './components/genoma/profile-user-genoma/profile-user-genoma.component';
import { CarouselContactUserGenomaComponent } from './components/genoma/carousel-contact-user-genoma/carousel-contact-user-genoma.component';
import { SearchPersonOrJobComponent } from './components/search/search-person-or-job/search-person-or-job.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFooterFilterComponent } from './components/search/search-footer-filter/search-footer-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    GenomaComponent,
    CarouselCardGenomaComponent,
    ProfileUserGenomaComponent,
    CarouselContactUserGenomaComponent,
    SearchPersonOrJobComponent,
    SearchComponent,
    NavbarComponent,
    SearchFooterFilterComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
