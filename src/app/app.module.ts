import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { CommentDisplayComponent } from './comment-display/comment-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent,
    CommentDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
