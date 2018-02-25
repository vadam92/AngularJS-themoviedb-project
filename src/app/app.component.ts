import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Search';
  apiAddress: string;
  public results: Array<Object> = [];

	constructor(private _http: HttpClient, private route: Router){
		this.apiAddress = 'https://api.themoviedb.org/3/search/movie?api_key=02e8a2556f41fbe7ab07e6899aceaab0&query=';
	}
	
	getData(searchMovie){
    return this._http.get(this.apiAddress+searchMovie).subscribe(response => 
      this.results = response['results']
    );
  }

  onClick(rowID){
    console.log(rowID);
    this.route.navigate(['/details',rowID])
  }

  onSearch(searching){
    console.log(searching);
    this.route.navigate(['/search',searching])
  }
}
