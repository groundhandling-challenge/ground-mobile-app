import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { GroundApp } from './app.component';
import { PipesModule } from '../pipes/pipes.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ExercisePage } from '../pages/exercise/exercise';
import { AboutPage } from '../pages/about/about';

import { ExercisesService } from '../providers/exercises/exercises';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StorageSyncEffects, storageSync } from 'ngrx-store-ionic-storage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '../store/reducers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function onSyncError(err) {
  console.log(err);
}

export const storageSyncReducer = storageSync({
  keys: ['completedExercises'],
  ignoreActions: [],
  hydratedStateKey: 'hydrated',
  onSyncError: (onSyncError)
});

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [storageMetaReducer];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    GroundApp,
    AboutPage,
    ExercisePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    PipesModule,
    IonicModule.forRoot(GroundApp),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ StorageSyncEffects ]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GroundApp,
    AboutPage,
    ExercisePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExercisesService
  ]
})
export class AppModule {}
