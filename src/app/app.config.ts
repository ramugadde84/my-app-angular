import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { InitService } from './init.service';
import { sampleInterceptor } from './sample.interceptor';
import { sample1Interceptor } from './sample1.interceptor';
import { UserEffects } from './user.effect';
import { reducers } from './user.reducer';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';


export function intializeAppFactory(initService: InitService) {
  return () => initService.process();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      // registering interceptors
      withInterceptors([sampleInterceptor,sample1Interceptor]),
    ),

    {
      provide: APP_INITIALIZER,
      useFactory: intializeAppFactory,
      deps: [InitService],
      multi: true

    },
   
    importProvidersFrom(
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([UserEffects]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      AuthModule.forRoot( { ...env.auth }), 
      ), 
    
      provideAnimationsAsync(),
      MatNativeDateModule,
     
  ]

};
