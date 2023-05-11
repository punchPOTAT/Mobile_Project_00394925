import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptimusPage } from './optimus.page';

describe('OptimusPage', () => {
  let component: OptimusPage;
  let fixture: ComponentFixture<OptimusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OptimusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
