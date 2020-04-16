import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCaracteristicasComponent } from './red-caracteristicas.component';

describe('RedCaracteristicasComponent', () => {
  let component: RedCaracteristicasComponent;
  let fixture: ComponentFixture<RedCaracteristicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedCaracteristicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
