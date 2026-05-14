import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[fade-in-view]',
  standalone: true,
})
export class FadeInViewDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const native = this.el.nativeElement;

    const canObserve =
      isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined';

    if (!canObserve) {
      this.renderer.setStyle(native, 'opacity', '1');
      this.renderer.setStyle(native, 'transform', 'translateY(0)');
      return;
    }

    this.renderer.setStyle(native, 'opacity', '0');
    this.renderer.setStyle(native, 'transform', 'translateY(30px)');
    this.renderer.setStyle(
      native,
      'transition',
      'opacity 0.6s ease-out, transform 0.6s ease-out',
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(native, 'opacity', '1');
            this.renderer.setStyle(native, 'transform', 'translateY(0)');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
