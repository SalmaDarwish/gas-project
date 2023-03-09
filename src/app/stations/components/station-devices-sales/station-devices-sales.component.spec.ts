import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDevicesSalesComponent } from './station-devices-sales.component';

describe('StationDevicesSalesComponent', () => {
  let component: StationDevicesSalesComponent;
  let fixture: ComponentFixture<StationDevicesSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDevicesSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDevicesSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
