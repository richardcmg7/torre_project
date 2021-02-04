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

@NgModule({
  declarations: [
    AppComponent,
    GenomaComponent,
    CarouselCardGenomaComponent,
    ProfileUserGenomaComponent,
    CarouselContactUserGenomaComponent
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
