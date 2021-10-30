import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CataloquePageComponent } from './cataloque-page/cataloque-page.component';
import { FooterComponent } from './footer/footer.component';
import { MapPageComponent } from './map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    CataloquePageComponent,
    FooterComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
