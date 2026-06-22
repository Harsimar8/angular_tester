import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlList } from './control-list';

describe('ControlList', () => {
  let component: ControlList;
  let fixture: ComponentFixture<ControlList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlList],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
