import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { APP_CONFIG } from './environments/environment';

if (APP_CONFIG.production) enableProdMode();


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
