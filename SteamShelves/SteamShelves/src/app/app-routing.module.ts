import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MyShelvesComponent } from './components/my-shelves/my-shelves.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent

  },
  {
    path: "shelves",
    component: MyShelvesComponent

  },
  {
    path: "game/:steam_appid",
    component: GameProfileComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
