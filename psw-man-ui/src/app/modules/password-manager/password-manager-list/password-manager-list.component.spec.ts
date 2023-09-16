import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordManagerListComponent } from './password-manager-list.component';

describe('PasswordManagerListComponent', () => {
  let component: PasswordManagerListComponent;
  let fixture: ComponentFixture<PasswordManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PasswordManagerListComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PasswordManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
