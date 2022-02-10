import { LOGGER_CONFIG } from './logger.token';
import { LoggerConfig } from './logger.config';
import { HttpLoggerInterceptor } from './http-logger.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggerInterceptor,
      multi: true
    }
  ]
})
export class LoggerModule {
  static init(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_CONFIG,
          useValue: config,
          multi: false
        }
      ]
    }
  }
}
