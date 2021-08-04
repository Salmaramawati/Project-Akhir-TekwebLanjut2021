import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KepalaComponent } from './kepala.component';

describe('KepalaComponent', () => {
  let component: KepalaComponent;
  let fixture: ComponentFixture<KepalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KepalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KepalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
