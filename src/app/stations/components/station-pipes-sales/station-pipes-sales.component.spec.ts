import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPipesSalesComponent } from './station-pipes-sales.component';

describe('StationPipesSalesComponent', () => {
  let component: StationPipesSalesComponent;
  let fixture: ComponentFixture<StationPipesSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationPipesSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationPipesSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
