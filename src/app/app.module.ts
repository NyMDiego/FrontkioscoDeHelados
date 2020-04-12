import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ComponentsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
