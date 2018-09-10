import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/navbar/navbar.component';
import { RoutingModule } from './routes/routing/routing.module';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AppContentComponent } from './app-content/app-content.component';
import { ZPageNotFoundComponent } from './views/z-page-not-found/z-page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AppContentComponent,
    ZPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
