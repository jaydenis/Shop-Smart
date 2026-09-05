import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import hostilesData from '../../../../docs/shop_smart_hostiles_1.4.json';

interface Hostile {
  monster: string;
  hp: number;
  morale: number | string | null;
  attack: string;
  armor: number;
  special: string;
  keywords: string[];
}

interface HostileGroup {
  tier: string;
  hostiles: Hostile[];
}

@Component({
  selector: 'app-beastiary',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './beastiary.component.html',
  styleUrl: './beastiary.component.scss'
})
export class BeastiaryComponent {
  readonly hostileGroups: HostileGroup[] = hostilesData;
}
