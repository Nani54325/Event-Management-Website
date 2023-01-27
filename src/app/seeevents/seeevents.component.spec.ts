import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeeventsComponent } from './seeevents.component';

describe('SeeeventsComponent', () => {
  let component: SeeeventsComponent;
  let fixture: ComponentFixture<SeeeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
