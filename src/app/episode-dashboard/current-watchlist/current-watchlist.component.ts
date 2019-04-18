import { Component, OnInit, Output, EventEmitter, Input, Renderer, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { EpisodeListService } from '../service/episode-list.service';


@Component({
  selector: 'app-current-watchlist',
  templateUrl: './current-watchlist.component.html',
  styleUrls: ['./current-watchlist.component.css']
})
export class CurrentWatchlistComponent implements OnInit {
  alreadyWatched : boolean = false;
  seasonResult: any;
  episodeResult: any;
  @Output() newWatch = new EventEmitter<boolean>();
  @Input() episodeDetails : any;
  constructor(private _elService : EpisodeListService, private render:Renderer) { }
  @ViewChild ('Tick') Tick: any;
  ngOnInit() {
      console.log(this.episodeDetails);
      this._elService.getSLService(this.episodeDetails.id).subscribe(
        data => this.seasonResult = data,
        err => console.error(err)
      )
  }


  watched(event){
    event.preventDefault();
    if(this.Tick._elementRef.nativeElement.classList.contains('watchTick')) {
      this.render.setElementClass(event.target,"watchTick",false)
    }else{
      this.render.setElementClass(event.target,"watchTick",true)
    }
  }

  back(){
    this.newWatch.emit();
  }

  getEpiosdes(id: number){
    //console.log(id);
    this._elService.getELService(id).subscribe(
      data => this.episodeResult = data,
      err => console.log(err)
    )
  }

}
