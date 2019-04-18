import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWatchlistComponent } from './past-watchlist.component';

describe('PastWatchlistComponent', () => {
  let component: PastWatchlistComponent;
  let fixture: ComponentFixture<PastWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
