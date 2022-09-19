import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefridgeratorComponent } from './refridgerator.component';

describe('RefridgeratorComponent', () => {
  let component: RefridgeratorComponent;
  let fixture: ComponentFixture<RefridgeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefridgeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefridgeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
