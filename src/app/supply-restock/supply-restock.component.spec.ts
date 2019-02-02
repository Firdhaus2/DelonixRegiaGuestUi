import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyRestockComponent } from './supply-restock.component';

describe('SupplyRestockComponent', () => {
  let component: SupplyRestockComponent;
  let fixture: ComponentFixture<SupplyRestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyRestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyRestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
