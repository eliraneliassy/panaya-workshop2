import { LoggerConfig } from './logger.config';
import { InjectionToken } from "@angular/core";

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('logger config');