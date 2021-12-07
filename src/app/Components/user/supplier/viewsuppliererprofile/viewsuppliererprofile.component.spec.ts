import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsuppliererprofileComponent } from './viewsuppliererprofile.component';

describe('ViewsuppliererprofileComponent', () => {
  let component: ViewsuppliererprofileComponent;
  let fixture: ComponentFixture<ViewsuppliererprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsuppliererprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsuppliererprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
