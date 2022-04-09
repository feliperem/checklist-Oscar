import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component.test';
import { SecondTestComponent } from './second-test/second-test.component';
import { ThirdTestComponent } from './second-test/third-test/third-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondTestComponent,
    ThirdTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
