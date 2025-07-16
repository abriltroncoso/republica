import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desayunos } from './desayunos';

describe('Desayunos', () => {
  let component: Desayunos;
  let fixture: ComponentFixture<Desayunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Desayunos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desayunos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
