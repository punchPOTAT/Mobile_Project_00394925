import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenderPage } from './bender.page';

describe('BenderPage', () => {
  let component: BenderPage;
  let fixture: ComponentFixture<BenderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
