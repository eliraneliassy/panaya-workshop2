import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, LoggerConfig } from '@panaya/logger';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const backofficeLoggerConfig: LoggerConfig = {
  appName: 'BO',
  isProd: environment.production
}

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LoggerModule.init(backofficeLoggerConfig), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
