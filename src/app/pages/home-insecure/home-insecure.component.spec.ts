import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsecureComponent } from './home-insecure.component';

describe('HomeInsecureComponent', () => {
  let component: HomeInsecureComponent;
  let fixture: ComponentFixture<HomeInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
