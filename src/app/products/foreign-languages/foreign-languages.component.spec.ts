import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignLanguagesComponent } from './foreign-languages.component';

describe('ForeignLanguagesComponent', () => {
  let component: ForeignLanguagesComponent;
  let fixture: ComponentFixture<ForeignLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
