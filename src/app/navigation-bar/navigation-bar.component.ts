import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavItem {
  label: string;
  /** Anchor fragment for in-page sections, e.g. "#clue-progression". */
  fragment?: string;
  /** Router path for a routed feature, e.g. "/monster-profiles". */
  route?: string;
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  // Sourced from the Table of Contents in shop_smart_v1.3.md
  readonly navItems: NavItem[] = [
    { label: 'Clues', fragment: 'clues' },
    { label: 'Crew', fragment: 'crew' },
    { label: 'Bestiary', route: 'bestiary' },
    { label: 'Omens', fragment: 'omens' },
    { label: 'Scenarios', fragment: 'scenarios' },
  ];
}
