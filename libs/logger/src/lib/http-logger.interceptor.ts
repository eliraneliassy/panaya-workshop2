import { LoggerConfig } from './logger.config';
import { LOGGER_CONFIG } from './logger.token';
import { Injectable, Inject, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpLoggerInterceptor implements HttpInterceptor {

  constructor(@Inject(LOGGER_CONFIG) private loggerConfig: LoggerConfig) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.group('New Request from app: ', this.loggerConfig?.appName || '');
    console.log(request);
    console.groupEnd();
    
    return next.handle(request);
  }
}
