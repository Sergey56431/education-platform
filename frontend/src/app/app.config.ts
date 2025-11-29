import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {withNgxsReduxDevtoolsPlugin} from '@ngxs/devtools-plugin';
import {withNgxsLoggerPlugin} from '@ngxs/logger-plugin';
import {withNgxsStoragePlugin} from '@ngxs/storage-plugin';
import {withNgxsWebSocketPlugin} from '@ngxs/websocket-plugin';
import {provideStore} from '@ngxs/store';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideStore(
      [],
      withNgxsReduxDevtoolsPlugin(),
      withNgxsLoggerPlugin(),
      withNgxsStoragePlugin({
        keys: '*'// временное решение
      }),
      withNgxsWebSocketPlugin())
  ]
};
