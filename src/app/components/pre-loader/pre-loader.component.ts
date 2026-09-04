import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  standalone: true,
  imports: [],
  templateUrl: './pre-loader.component.html',
  styleUrl: './pre-loader.component.scss'
})
export class PreLoaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('preloader') private preloader?: ElementRef<HTMLElement>;
  private closeTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.closeTimer = setTimeout(() => {
      this.preloader?.nativeElement.classList.add('done');
      document.body.classList.add('loaded');
    }, 800);
  }

  ngOnDestroy(): void {
    if (this.closeTimer) clearTimeout(this.closeTimer);
  }

}
