import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { StorageService } from './services/interfaces/storage';
import { LocalStorageService } from './services/local-storage.service';
import { SecurityService } from './services/security.service';
import { SheetsService } from './services/sheets.service';

function initServices(sec: SecurityService, sheet: SheetsService) {
  return () => sec.init().then(() => sec.isSignedIn && sheet.init());
}

@NgModule({
  declarations: [AppComponent, PageSettingsComponent, PageHomeComponent],
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initServices,
      multi: true,
      deps: [SecurityService, SheetsService],
    },
    { provide: StorageService, useClass: LocalStorageService },
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
