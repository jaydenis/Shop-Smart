import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { Crew, CrewMember, CrewMemberId } from './crew.model';

const CREW: Crew = {
  mike: {
    num: '01',
    kicker: 'Tank / DPS - Employee of the Month (Retired)',
    name: 'MANAGER MIKE',
    blurb: 'Shotgun. Chainsaw hand. All the enthusiasm of a wet clipboard.',
    stats: { STR: '+2', AGI: '-1', PRE: '-2', TOU: '+3' },
    derived: [
      ['HP', '11'],
      ['Armor', '2'],
      ['MV', '4'],
      ['Slots', '7'],
    ],
    gear: [
      'BOOM-STICK (Ranged 6", d8, 2 shots, usable in melee)',
      'Chainsaw Hand (Melee 1", d6, ignores obstacles)',
      'Flashlight (Melee once, d4, breaks after)',
    ],
    feats: [
      ['Back in My Day', 'Once per scenario, auto-pass one STR or TOU test'],
      ['Triggered', 'When Critically Hit, roll PRE DR12. Success = +1 STR next turn. Failure = flee 6"'],
    ],
    flaws: [
      ['PTSD Flashback', 'Hostile within 6" screams/makes loud noise: test PRE DR12. Failure: forced to activate last'],
      ['Slow Reactor', '-1 to all Agility tests (age/stubbornness)'],
    ],
    quote: '"How\'d ya like the taste of that!"',
  },
  sam: {
    num: '02',
    kicker: 'Control / Utility - 75% Reliable, 100% Confident',
    name: 'TECH SAM',
    blurb: 'Sass-powered gadgeteer. On a 1-5, the gadget finds a new owner: gravity.',
    stats: { STR: '-1', AGI: '+2', PRE: '+3', TOU: '-2' },
    derived: [
      ['HP', '6'],
      ['Armor', '0'],
      ['MV', '7'],
      ['Slots', '4'],
    ],
    gear: [
      'Pistol (Ranged 8", d6, 6 shots)',
      'Gadget Belt (3 charges - 1d20: 12-20 works, 6-11 glitch, 1-5 backfire)',
      'Laptop Shield (blocks one attack per scenario)',
      'Loadout: Smoke Bomb, Trap Mine, EMP Blast, Flashbang, Mini-BOOM Box',
    ],
    feats: [
      ['Sarcasm Shield', 'Once per round, cancel one morale test for self or ally'],
      ['Gen-X Attitude', 'Auto-pass the first PRE test each activation'],
    ],
    flaws: [
      ['Cascade Failure', 'Two failed gadget checks in a row = gadgets offline for the rest of the scenario'],
      ['Paper Constitution', '+1 damage on first Critical Hit taken'],
    ],
    quote: '"Oh great, zombies. Just what my resume was missing."',
  },
  dana: {
    num: '03',
    kicker: 'Recon / Intel - The Brains, Allegedly',
    name: 'DETECTIVE DANA',
    blurb: 'Finds clues. Finds trouble. Technically those are the same job.',
    stats: { STR: '-1', AGI: '+3', PRE: '+2', TOU: '-1' },
    derived: [
      ['HP', '7'],
      ['Armor', '1'],
      ['MV', '8'],
      ['Slots', '4'],
    ],
    gear: [
      'Tactical Binoculars (reveal hidden enemies, 12" radius)',
      'Lockpick Set (auto-succeed on doors/chests)',
      'Pocket Recorder (+1 to all clue-finding rolls)',
      'Tactical Knife (Melee 1", d6)',
    ],
    feats: [
      ['Keen Eye', 'Once per scenario, reroll one search/clue-gathering test'],
      ['Connect the Dots', 'When an ally fails a test, discard one clue to auto-succeed instead'],
    ],
    special: [
      ['Search Bonus', 'Roll 2d20 on searches, keep the higher'],
      ['Natural 20', "Bonus clue or the scenario's critical-search reward"],
      ['Item Safety', 'Never loses items on failed searches'],
    ],
    flaws: [
      ['Paranoid', 'Alone (no ally within 6"): -1 to all tests'],
      ['Curiosity Kills', 'Must investigate suspicious noises/items within 6"'],
    ],
    quote: '"The culprit is obvious. It was the possessed mannequin. Again."',
  },
  chris: {
    num: '04',
    kicker: 'Secondary Tank - Spiritually Elevated',
    name: 'CHILL CHRIS',
    blurb: 'Takes the bullet so you do not have to. Then asks if anyone has snacks.',
    stats: { STR: '+2', AGI: '-2', PRE: '+1', TOU: '+3' },
    derived: [
      ['HP', '11'],
      ['Armor', '1'],
      ['MV', '3'],
      ['Slots', '7'],
    ],
    gear: [
      'Baseball Bat (Melee 1", d6)',
      'Cooler Bag (Gummie Snacks, Emergency Brownie, Mystery Drink)',
      'Bong-ZOOKA (Ranged 8", d6 - target treated as Downed until next activation)',
      'Emotional Support Blanket (+1 ally morale tests within 6")',
      'A Random Scroll/Manuscript',
    ],
    feats: [
      ['Human Shield', 'Adjacent ally takes damage: intercept it (PRE DR12)'],
      ['Cloud Nine', 'Critically Hit: 4+ on d6 = laughs it off, stays active'],
    ],
    special: [['Downed Quirk', 'At 0 HP gets one dramatic goodbye turn - can still attack or protect an ally']],
    flaws: [
      ['Zoned Out', 'First action each round rolled with -1'],
      ['Snack Cravings', 'Eat a Gummie Snack every 3 rounds or lose 1 HP (withdrawal)'],
    ],
    quote: '"Dude, that zombie just... vibes wrong, ya know?"',
  },
  betty: {
    num: '05',
    kicker: 'Medic / Support - Malpractice Included Free',
    name: 'NURSE BETTY',
    blurb: 'Shock whip medic. Hit once, bleed forever. Bedside manner not included.',
    stats: { STR: '+2', AGI: '+1', PRE: '+3', TOU: '+1' },
    derived: [
      ['HP', '9'],
      ['Armor', '2'],
      ['MV', '6'],
      ['Slots', '7'],
    ],
    gear: [
      'Shock Whip (Melee 3" reach, d8, ignores cover, ongoing damage does not stack)',
      'Medical Tote (3x Bandage Rolls, 2x Syringe Darts, 1x Adrenal Shot)',
      'Stethoscope (reveals hidden enemies within 8")',
      'Latex Gloves (immune to disease/poison)',
    ],
    feats: [
      ['Bedside Manner', 'Once per scenario, force one enemy to pass a morale test (flee 6")'],
      ['Triage Protocol', 'Heal 1d4 HP as a free action once per round, adjacent to a Downed ally'],
    ],
    special: [
      ['Shock Whip: Defensive Edge', 'Ignores enemy cover benefits'],
      ['Downed Quirk', 'One-time only: auto-passes her own death save'],
    ],
    flaws: [
      ['Arrogant', 'Ordered ally fails their test: -1 to her next test'],
      ['Limited Patience', 'Ally takes 3+ damage in one turn: must retaliate or test PRE DR12 or lose action'],
    ],
    quote: '"Trust me, this is going to hurt. A LOT!"',
  },
};

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
})
export class CrewComponent {
  @ViewChild('modalContent') modalContent?: ElementRef<HTMLElement>;
  readonly crew = Object.entries(CREW) as [CrewMemberId, CrewMember][];
  selectedMember: CrewMember | null = null;
  private previouslyFocused: HTMLElement | null = null;

  openModal(member: CrewMember, event: Event): void {
    this.previouslyFocused = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    this.selectedMember = member;
    queueMicrotask(() => this.modalContent?.nativeElement.querySelector<HTMLElement>('.modal-close')?.focus());
  }

  closeModal(): void {
    this.selectedMember = null;
    this.previouslyFocused?.focus();
    this.previouslyFocused = null;
  }

  selectAdjacent(offset: number): void {
    if (!this.selectedMember) return;
    const index = this.crew.findIndex(([, member]) => member === this.selectedMember);
    this.selectedMember = this.crew[(index + offset + this.crew.length) % this.crew.length][1];
    queueMicrotask(() => this.modalContent?.nativeElement.querySelector<HTMLElement>('.modal-close')?.focus());
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (!this.selectedMember) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeModal();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.selectAdjacent(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.selectAdjacent(1);
    }
    if (event.key === 'Tab') this.keepFocusInside(event);
  }

  private keepFocusInside(event: KeyboardEvent): void {
    const container = this.modalContent?.nativeElement;
    if (!container) return;
    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'),
    );
    if (!focusable.length) return;
    if (document.activeElement === focusable[0] && event.shiftKey) {
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    }
    if (document.activeElement === focusable[focusable.length - 1] && !event.shiftKey) {
      event.preventDefault();
      focusable[0].focus();
    }
  }
}
