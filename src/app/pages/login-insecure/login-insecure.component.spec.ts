import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInsecureComponent } from './login-insecure.component';

describe('LoginInsecureComponent', () => {
  let component: LoginInsecureComponent;
  let fixture: ComponentFixture<LoginInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
