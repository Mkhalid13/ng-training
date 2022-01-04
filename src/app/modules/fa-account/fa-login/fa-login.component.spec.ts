import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaLoginComponent } from './fa-login.component';

describe('FaLoginComponent', () => {
  let component: FaLoginComponent;
  let fixture: ComponentFixture<FaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
