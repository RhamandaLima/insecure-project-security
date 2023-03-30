import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConfirmationInsecureComponent } from './registration-confirmation-insecure.component';

describe('RegistrationConfirmationInsecureComponent', () => {
  let component: RegistrationConfirmationInsecureComponent;
  let fixture: ComponentFixture<RegistrationConfirmationInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationConfirmationInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationConfirmationInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
