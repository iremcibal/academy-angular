import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootcampComponent } from './components/bootcamp/bootcamp.component';
import { ApplicationComponent } from './components/application/application.component';
import { NaviComponent } from './components/navi/navi.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';

@NgModule({
  declarations: [
    AppComponent,
    BootcampComponent,
    ApplicationComponent,
    NaviComponent,
    BlacklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
