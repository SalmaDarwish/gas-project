import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsMainComponent } from './stations-main.component';

describe('StationsMainComponent', () => {
  let component: StationsMainComponent;
  let fixture: ComponentFixture<StationsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
