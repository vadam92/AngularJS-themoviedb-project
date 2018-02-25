import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {

  movieId: any;
  language: any;
  picture: any;
  date: any;
  overview: any;
  popularity: any; 
  vote_average: any;
  vote_count: any;
  title: any;

  constructor(private route: ActivatedRoute, private location: Location) {
   }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.movieId =  params['id'];
      this.language =  params['original_language'];
      this.picture =  params['poster_path'];
      this.date =  params['date'];
      this.overview =  params['overview'];
      this.popularity =  params['popularity'];
      this.vote_average =  params['vote_average'];
      this.vote_count =  params['vote_count'];
      this.title =  params['title'];
    })
  }

  goBack(): void {
    this.location.back();
  }

}
