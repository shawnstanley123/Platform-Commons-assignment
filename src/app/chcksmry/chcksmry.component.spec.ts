import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcksmryComponent } from './chcksmry.component';

describe('ChcksmryComponent', () => {
  let component: ChcksmryComponent;
  let fixture: ComponentFixture<ChcksmryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChcksmryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChcksmryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
