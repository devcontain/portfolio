import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoGithubComponent } from './two-github.component';

describe('TwoGithubComponent', () => {
  let component: TwoGithubComponent;
  let fixture: ComponentFixture<TwoGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoGithubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
