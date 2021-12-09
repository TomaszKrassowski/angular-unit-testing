import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CdsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
