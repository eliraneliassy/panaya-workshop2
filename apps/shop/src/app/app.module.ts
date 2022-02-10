import { environment } from './../environments/environment';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoggerModule, LOGGER_CONFIG, LoggerConfig } from '@panaya/logger';
import { HttpClientModule } from '@angular/common/http';

const shopLoggerConfig: LoggerConfig = {
  appName: 'shop',
  isProd: environment.production
};


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LoggerModule.init(shopLoggerConfig), HttpClientModule],
  // providers: [
  //   {
  //     provide: LOGGER_CONFIG,
  //     useValue: shopLoggerConfig,
  //     multi: false
  //   }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule { }
