import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MyShelvesComponent } from './components/my-shelves/my-shelves.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import {MatInputModule} from '@angular/material/input';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import {MatDividerModule} from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './services/user.service';
import { UserEffects } from './store/user/user.effects';
import { userReducer } from './store/user/user.reducer';
import { LoginComponent } from './components/login/login.component';
import { shelvesReducer } from './store/shelves/shelves.reducer';
import { ShelvesService } from './services/shelves.service';
import { ShelvesEffects } from './store/shelves/shelves.effects';
import { ShelfComponent } from './components/shelf/shelf.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GameThumbComponent } from './components/game-thumb/game-thumb.component';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyShelvesComponent,
    HomeComponent,
    GameProfileComponent,
    LoginComponent,
    ShelfComponent,
    GameThumbComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer, shelves: shelvesReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([UserEffects, ShelvesEffects]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  providers: [CookieService, UserService, ShelvesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
