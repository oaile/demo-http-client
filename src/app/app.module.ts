import { ArticlesService } from './articles.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
