import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordManagerCardComponent } from './password-manager-card.component';

describe('PasswordManagerCardComponent', () => {
  let component: PasswordManagerCardComponent;
  let fixture: ComponentFixture<PasswordManagerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PasswordManagerCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PasswordManagerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
