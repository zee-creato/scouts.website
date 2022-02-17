import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BeaversComponent } from './components/beavers/beavers.component';
import { ScoutsComponent } from './components/scouts/scouts.component';
import { SquirrelsComponent } from './components/squirrels/squirrels.component';
import { JoinComponent } from './components/join/join.component';
import { AboutComponent } from './components/about/about.component';
import { CubsComponent } from './components/cubs/cubs.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
const appRoutes: Routes =[
  {path:'' , component:HomeComponent},
  {path:'beavers' , component:BeaversComponent},
  {path:'cubs' , component:CubsComponent},
  {path:'scouts' , component:ScoutsComponent},
  {path:'squirrels' , component:SquirrelsComponent},
  {path:'join' , component:JoinComponent},
  {path:'about' , component:AboutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BeaversComponent,
    ScoutsComponent,
    SquirrelsComponent,
    JoinComponent,
    AboutComponent,
    CubsComponent,
    FooterComponent,
    ScrollToTopComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
