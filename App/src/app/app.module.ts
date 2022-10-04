import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModModule } from './auth-mod/auth-mod.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
