import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-road-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './road-map.html',
})
export class RoadMap implements AfterViewInit {
  @ViewChild('roadmapContainer') roadmapContainer!: ElementRef<HTMLElement>;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);

  isVisible = false;

  ngAfterViewInit(): void {
    const el = this.roadmapContainer?.nativeElement;
    const canObserve =
      isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined';

    if (!canObserve || !el) {
      this.isVisible = true;
      this.cdr.markForCheck();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.isVisible = true;
          this.cdr.detectChanges();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
  }
}
