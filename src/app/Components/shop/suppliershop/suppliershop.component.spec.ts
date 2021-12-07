import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliershopComponent } from './suppliershop.component';

describe('SuppliershopComponent', () => {
  let component: SuppliershopComponent;
  let fixture: ComponentFixture<SuppliershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
