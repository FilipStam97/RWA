import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { AppState } from './store/app.state';
import { auth } from './store/user/user.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // subscripcije se stavljaju u onInit , zato implementiramo on init
  title = 'SteamShelves';
  loogedIn: boolean | undefined;



 constructor(private cookieService: CookieService, private store: Store<AppState>){

 }

 
 ngOnInit() {
    this.store.dispatch(auth({ username: "NateHiggers", password: "NateHiggers" }));
}


}
