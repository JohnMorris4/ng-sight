import { FooterComponent } from './common-site/footer/footer.component';
import { NavbarComponent } from './common-site/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './common-site/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
