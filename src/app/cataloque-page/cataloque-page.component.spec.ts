import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloquePageComponent } from './cataloque-page.component';

describe('CataloquePageComponent', () => {
  let component: CataloquePageComponent;
  let fixture: ComponentFixture<CataloquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataloquePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
