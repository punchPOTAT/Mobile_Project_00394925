import { ComponentFixture, TestBed } from '@angular/core/testing';
import { V1Page } from './v1.page';

describe('V1Page', () => {
  let component: V1Page;
  let fixture: ComponentFixture<V1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(V1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
