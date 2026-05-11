import { Component, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-road-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './road-map.html'
})
export class RoadMap implements AfterViewInit {
  @ViewChild('roadmapContainer') roadmapContainer!: ElementRef;
  isVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          this.cdr.detectChanges(); 
          observer.unobserve(this.roadmapContainer.nativeElement);
        }
      },
      { threshold: 0.1 } 
    );

    if (this.roadmapContainer) observer.observe(this.roadmapContainer.nativeElement);
  }
}