import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsecureComponent } from './dashboard-insecure.component';

describe('DashboardInsecureComponent', () => {
  let component: DashboardInsecureComponent;
  let fixture: ComponentFixture<DashboardInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
