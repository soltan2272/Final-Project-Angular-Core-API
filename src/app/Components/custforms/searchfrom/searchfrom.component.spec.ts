import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfromComponent } from './searchfrom.component';

describe('SearchfromComponent', () => {
  let component: SearchfromComponent;
  let fixture: ComponentFixture<SearchfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
