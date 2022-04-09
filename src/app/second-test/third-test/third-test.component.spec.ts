import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTestComponent } from './third-test.component';

describe('ThirdTestComponent', () => {
  let component: ThirdTestComponent;
  let fixture: ComponentFixture<ThirdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
