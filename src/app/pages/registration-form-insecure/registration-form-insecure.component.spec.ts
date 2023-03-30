import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormInsecureComponent } from './registration-form-insecure.component';

describe('RegistrationFormInsecureComponent', () => {
  let component: RegistrationFormInsecureComponent;
  let fixture: ComponentFixture<RegistrationFormInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationFormInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
