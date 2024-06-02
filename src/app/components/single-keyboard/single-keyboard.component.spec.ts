import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKeyboardComponent } from './single-keyboard.component';

describe('SingleKeyboardComponent', () => {
  let component: SingleKeyboardComponent;
  let fixture: ComponentFixture<SingleKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleKeyboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
