import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeConnectionComponent } from './node-connection.component';

describe('NodeConnectionComponent', () => {
  let component: NodeConnectionComponent;
  let fixture: ComponentFixture<NodeConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
