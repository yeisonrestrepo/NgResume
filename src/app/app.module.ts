import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Store
import { reducers, metaReducers } from './shared/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandscapeModule } from './landscape/landscape.module';
import { ConfigService } from './app-config.service';
import { StoreModule } from '@ngrx/store';
import { UtilityModule } from './shared/utility';

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UtilityModule.forRoot(),

    LandscapeModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers, { metaReducers }),

    // Third party modules
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
