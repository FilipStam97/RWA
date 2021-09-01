import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShelvesComponent } from './my-shelves.component';

describe('MyShelvesComponent', () => {
  let component: MyShelvesComponent;
  let fixture: ComponentFixture<MyShelvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyShelvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
