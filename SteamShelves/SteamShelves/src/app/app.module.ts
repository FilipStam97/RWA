import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestServiceService } from './services/test-service.service';
import { TestThumbComponent } from './components/test-thumb/test-thumb.component';
import { StoreModule } from '@ngrx/store';
import { MovieReducer } from './store/test-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    TestListComponent,
    TestThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({movies: MovieReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
