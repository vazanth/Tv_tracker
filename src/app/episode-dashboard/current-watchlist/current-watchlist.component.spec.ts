import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWatchlistComponent } from './current-watchlist.component';

describe('CurrentWatchlistComponent', () => {
  let component: CurrentWatchlistComponent;
  let fixture: ComponentFixture<CurrentWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
