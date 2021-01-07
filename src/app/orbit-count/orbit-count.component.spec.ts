import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitCountComponent } from './orbit-count.component';

describe('OrbitCountComponent', () => {
  let component: OrbitCountComponent;
  let fixture: ComponentFixture<OrbitCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
