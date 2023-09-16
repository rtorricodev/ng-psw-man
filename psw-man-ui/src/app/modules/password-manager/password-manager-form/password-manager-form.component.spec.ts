import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPasswordCardComponent } from './psw-man-form.component';

describe('CreateEditPasswordCardComponent', () => {
  let component: CreateEditPasswordCardComponent;
  let fixture: ComponentFixture<CreateEditPasswordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CreateEditPasswordCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditPasswordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
