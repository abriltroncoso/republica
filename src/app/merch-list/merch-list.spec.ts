import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchList } from './merch-list';

describe('MerchList', () => {
  let component: MerchList;
  let fixture: ComponentFixture<MerchList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
