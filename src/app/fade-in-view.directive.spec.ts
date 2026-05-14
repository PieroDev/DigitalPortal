import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FadeInViewDirective } from './fade-in-view.directive';

@Component({
  standalone: true,
  imports: [FadeInViewDirective],
  template: '<div fade-in-view class="fade-target">content</div>',
})
class FadeHost {}

describe('FadeInViewDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeHost],
    }).compileComponents();
  });

  it('should create host with directive', () => {
    const fixture = TestBed.createComponent(FadeHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.fade-target');
    expect(el).toBeTruthy();
    expect(el.textContent).toContain('content');
  });
});
