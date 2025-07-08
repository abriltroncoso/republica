import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumero } from './input-numero';

describe('InputNumero', () => {
  let component: InputNumero;
  let fixture: ComponentFixture<InputNumero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
