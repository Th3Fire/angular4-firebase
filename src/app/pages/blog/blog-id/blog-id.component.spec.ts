import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIdComponent } from './blog-id.component';

describe('BlogIdComponent', () => {
  let component: BlogIdComponent;
  let fixture: ComponentFixture<BlogIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
