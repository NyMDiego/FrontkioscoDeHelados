import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronPrincipalComponent } from './jumbotron-principal.component';

describe('JumbotronPrincipalComponent', () => {
  let component: JumbotronPrincipalComponent;
  let fixture: ComponentFixture<JumbotronPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
