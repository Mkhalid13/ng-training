import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaAccountComponent } from './fa-account.component';

describe('FaAccountComponent', () => {
  let component: FaAccountComponent;
  let fixture: ComponentFixture<FaAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
