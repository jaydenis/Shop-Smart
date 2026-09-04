import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PreLoaderComponent } from "./components/pre-loader/pre-loader.component";
import { CtaBlockComponent } from "./sections/cta-block/cta-block.component";
import { ScenariosComponent } from "./sections/scenarios/scenarios.component";
import { CluesComponent } from "./sections/clues/clues.component";
import { OmensComponent } from "./sections/omens/omens.component";
import { BeastiaryComponent } from "./sections/beastiary/beastiary.component";
import { CrewComponent } from "./sections/crew/crew.component";

  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent, FooterComponent, PreLoaderComponent, CtaBlockComponent, ScenariosComponent, CluesComponent, OmensComponent, BeastiaryComponent, CrewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('cursorDot') private cursorDot?: ElementRef<HTMLElement>;
  private readonly customCursorEnabled = typeof window !== 'undefined'
    && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  title = 'shop-smart';

  ngAfterViewInit(): void {
    this.cursorDot?.nativeElement.classList.toggle('enabled', this.customCursorEnabled);
  }

  @HostListener('document:mousemove', ['$event'])
  moveCursor(event: MouseEvent): void {
    if (!this.customCursorEnabled || !this.cursorDot) return;
    const target = event.target instanceof Element ? event.target : null;
    const isInteractive = !!target?.closest('a, button, .char-card');
    const cursor = this.cursorDot.nativeElement;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.toggle('hot', isInteractive);
  }
}
