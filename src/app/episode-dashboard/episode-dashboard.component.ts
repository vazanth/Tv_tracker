import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-dashboard',
  templateUrl: './episode-dashboard.component.html',
  styleUrls: ['./episode-dashboard.component.css']
})
export class EpisodeDashboardComponent implements OnInit {
  currentEpisodeDetails: any;
  constructor() { }

  ngOnInit() {
  }

  getSearchedResult(Event: number){
    this.currentEpisodeDetails = Event;
  }

}
