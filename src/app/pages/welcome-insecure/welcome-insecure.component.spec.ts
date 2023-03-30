import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeInsecureComponent } from './welcome-insecure.component';

describe('WelcomeInsecureComponent', () => {
  let component: WelcomeInsecureComponent;
  let fixture: ComponentFixture<WelcomeInsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeInsecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeInsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
