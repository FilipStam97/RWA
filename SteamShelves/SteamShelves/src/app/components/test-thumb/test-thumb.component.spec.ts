import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThumbComponent } from './test-thumb.component';

describe('TestThumbComponent', () => {
  let component: TestThumbComponent;
  let fixture: ComponentFixture<TestThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
