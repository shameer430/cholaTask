import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DataSharingService } from './data-sharing.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    BsModalService ,
    DataSharingService
  ]
};