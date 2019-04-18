import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDashboardComponent } from './episode-dashboard.component';

describe('EpisodeDashboardComponent', () => {
  let component: EpisodeDashboardComponent;
  let fixture: ComponentFixture<EpisodeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
