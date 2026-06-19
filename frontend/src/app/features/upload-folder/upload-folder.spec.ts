import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFolder } from './upload-folder';

describe('UploadFolder', () => {
  let component: UploadFolder;
  let fixture: ComponentFixture<UploadFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFolder],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
