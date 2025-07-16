import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tortas } from './tortas';

describe('Tortas', () => {
  let component: Tortas;
  let fixture: ComponentFixture<Tortas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tortas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tortas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
