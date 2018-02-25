import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  title = 'Movie Search';
  apiAddress: string;
  public results: Array<Object> = [];
  searchMovie: any;

	constructor(private _http: HttpClient, private route: Router, private routeAct: ActivatedRoute){
		this.apiAddress = 'https://api.themoviedb.org/3/search/movie?api_key=02e8a2556f41fbe7ab07e6899aceaab0&query=';
	}
  
  ngOnInit() {
    this.routeAct.params.subscribe(params =>{
      this.searchMovie =  params['id'];
    })
    this.getData(this.searchMovie);
  }

	getData(searchMovie){
    return this._http.get(this.apiAddress+searchMovie).subscribe(response => 
      this.results = response['results']
    );
  }

  onClick(rowID,title,overview,date,poster_path,vote_average,vote_count,popularity,original_language){
    this.route.navigate(['/details',rowID,{title: title, overview: overview, date: date,poster_path: poster_path,vote_average:vote_average,vote_count:vote_count,popularity:popularity,original_language:original_language}])
  }



}
