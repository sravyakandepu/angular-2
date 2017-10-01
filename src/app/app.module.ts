import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewHomeComponent } from  '../../src/app/new-home/new-home.component';
import { NewAboutComponent} from '../../src/app/new-about/new-about.component';
@NgModule({
  declarations: [
    AppComponent,
    NewHomeComponent,
    NewAboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
