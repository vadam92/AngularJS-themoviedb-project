import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component'

const appRoute: Routes=[
  {path:'details/:id', component: DetailsComponent},
  {path: 'search/:id', component: SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
