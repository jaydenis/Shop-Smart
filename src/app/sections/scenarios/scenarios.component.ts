import { Component } from '@angular/core';

import { Scenario } from './scenario.model';

const SCENARIOS: Scenario[] = [
  {
    number: 1,
    title: 'CLEANUP IN AISLE 4',
    subtitle: 'Spill hazards - intercom static - grab the blueprints',
    summary:
      'The mall has gone dark, and the night shift has officially turned into a meat grinder. Secure the blueprints before the floor manager schedules your permanent termination.',
    sections: [
      {
        title: 'Setup & Terrain',
        items: [
          "Grid Size: 2' x 2' board.",
          'Layout: A grid of retail aisles using rows of shelves. The center of the board features a Customer Service Desk.',
          'Clue Placement: Place 5 searchable loot tokens on the board: one at the center desk, and rest inside random aisles at least 6 inches apart.',
        ],
      },
      {
        title: 'Special Rules',
        items: [
          'Spill Hazards: Treat any area within 2" of a shelf aisle as Difficult Terrain due to knocked-over inventory and slick fluids.',
          'Intercom Static: At the start of every turn, roll 1d6. On a 1, a loud intercom blast occurs. All models must pass a Presence DR12 test or be Dazed (core rulebook) until their activation.',
        ],
      },
      {
        title: 'Monsters & Reinforcements',
        items: [
          'Initial Spawns: 3 Shambling Zombies and 1 Cursed Shopping Cart guarding the center desk.',
          'Reinforcements: At the start of the Monster Phase on round 3 and onward, spawn 1 Shambling Zombie from a random board edge and 1 Cursed Shopping Cart on the opposite board edge.',
        ],
      },
      {
        title: 'Rewards & Outcomes',
        items: [
          'Victory: Collect at least 3 Clues and have at least one crew member escape via the southern board edge.',
          'Loot Drop: If successful, the crew recovers a Mega Wrench left behind by the maintenance staff.',
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'THE TECH BACKUP',
    subtitle: "Hack the consoles - don't nat-1 the server",
    summary:
      'Tech Sam swears the security mainframe contains footage identifying the entity pulling the strings. Too bad the server room is locked behind a defense grid.',
    sections: [
      {
        title: 'Setup & Terrain',
        items: [
          "Grid Size: 2' x 2' board.",
          'Layout: A high-tech server room filled with large computer banks. Four power consoles are positioned in each corner of the map.',
          'Clue Placement: 5 Clue Tokens are locked inside the consoles (1 per console).',
        ],
      },
      {
        title: 'Special Rules',
        items: [
          'Hacking the System: To collect a Clue from a console, a model must spend an action and pass an Agility DR12 test. Tech Sam rolls this test with a +2 bonus.',
          'Power Surge: If a hacking test fails with a natural 1, the console explodes. The interacting model takes d4 electric damage, and the console is destroyed (the clue is lost).',
        ],
      },
      {
        title: 'Monsters & Reinforcements',
        items: [
          'Initial Spawns: 2 Possessed Mannequins and 1 Patchwork Enforcer guard the center mainframe.',
          'Reinforcements: Every time a power console is successfully hacked, spawn 1 Crypt Skitter from the server vents.',
        ],
      },
      {
        title: 'Rewards & Outcomes',
        items: [
          'Victory: Reach the Clue Threshold of 4 to download the mainframe backup and unlock the security exit.',
          'Loot Drop: Secure the data to unlock an EMP Grenade for the next scenario.',
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'MIDNIGHT MADNESS',
    subtitle: 'An unholy clearance sale - stop the ritual',
    summary:
      'A local cult has blocked the emergency exits to conduct an unholy clearance sale. Stop the ritual before the store closes forever.',
    sections: [
      {
        title: 'Setup & Terrain',
        items: [
          "Grid Size: 2' x 2' board.",
          'Layout: A large open department store courtyard with a fountain at the center.',
          'Clue Placement: 5 Clue Tokens are scattered in a circle 6 inches apart surrounding the ritual site.',
        ],
      },
      {
        title: 'Special Rules',
        items: [
          'Unstable Altar: The central fountain functions as a dark altar. Any crew model that ends its movement within 3" of the fountain must pass a TOU DR12 test or lose 1 HP as their lifeforce drains.',
          'Blackout: All ranged attacks suffer a -2 penalty due to shifting, supernatural shadows filling the courtyard.',
        ],
      },
      {
        title: 'Monsters & Reinforcements',
        items: [
          'Initial Spawns: 1 Cult Leader stands at the altar, flanked by 3 Cultists.',
          'Reinforcements: At the end of every round, if the Cult Leader is still alive, he summons 1 Shambling Zombie directly from the fountain.',
        ],
      },
      {
        title: 'Rewards & Outcomes',
        items: [
          'Victory: Eliminate the Cult Leader or gather 5 Clues to reverse the ritual script and banish the horrors.',
          'Loot Drop: Looting the altar yields 1 Holy Water flask and a Random Scroll/Manuscript.',
        ],
      },
    ],
  },
{
    number: 4,
    title: "THE EVIL TWIN'S EXIT INTERVIEW",
    subtitle: 'Defeat Linda before she prints your final write-up',
    summary:
      "The elevator to the Executive Suite needs a key, and HR issued exactly one — to the other Manager Mike. Time for a family reunion.",
    finale: false,
    sections: [
      {
        title: 'Setup & Terrain',
        items: [
          "Grid Size: 2' x 2' board.",
          'Layout: Ground-floor Stockroom & Personnel Office — freight pallets, filing cabinets, a conveyor belt from loading dock to board center.',
          'Clue Placement: 5 Clue Tokens inside Personnel Office filing cabinets (1 per cabinet).',
        ],
      },
      {
        title: 'Special Rules',
        items: [
          'Conveyor Chaos: Models standing on the belt slide 3\" along it at the start of each activation.',
          'Identity Crisis: Crew within 6\" of the Evil Twin at activation start: PRE DR12 or skip their attack action (mistaken identity)',
        ],
      },
      {
        title: 'Monsters & Reinforcements',
        items: [
          'Initial Spawns: Manager Mike, Evil Twin (Chainsaw Hand — d8) from the loading dock, with d4+1 Cursed Shopping Carts (Escort Detail)',
          'Reinforcements: Round 3 onward, each Monster Phase: spawn 1 Cursed Shopping Cart from the loading dock (max 3 total).',
        ],
      },
      {
        title: 'Rewards & Outcomes',
        items: [
          'Victory: Destroy the Evil Twin and take the Executive Elevator Key; at least one crew member escapes via the loading dock',
          'Loot Drop: Executive Elevator Key (required for the Finale) + one BOOM-STICK.',
        ],
      },
    ],
  },
  {
    number: 5,
    title: "THE MANAGER'S SPECIAL (FINALE)",
    subtitle: 'Defeat Linda before she prints your final write-up',
    summary:
      "You've tracked the source of the outbreak to the final boss running the corporate ladder. Defeat Linda before she prints your final write-up.",
    finale: true,
    sections: [
      {
        title: 'Setup & Terrain',
        items: [
          "Grid Size: 2' x 2' board.",
          'Layout: The glamorous, blood-splattered Penthouse Executive Suite. Desks and luxury couches act as heavy cover.',
          'Clue Placement: No Clue tokens on the floor; Linda holds all the evidence.',
        ],
      },
      {
        title: 'Special Rules',
        items: [
          'Clue Extraction: Every time Linda takes 4 or more damage from a single attack, she drops 1 Clue Token onto the space directly behind her.',
          'Corporate Drone Control: Linda\'s Possessed Glare ability can target any crew member within 10". The target must immediately make a Presence DR14 test or take an immediate attack action against their nearest ally.',
        ],
      },
      {
        title: 'Monsters & Reinforcements',
        items: [
          'Initial Spawns: Linda sits behind the executive desk. 1 Undead Manager and 2 Cursed Shopping Carts act as her bodyguards.',
          'Reinforcements: When Linda reaches half health (9 HP), she unleashes a scream that summons 2 Clown Corpses from the executive elevator.',
        ],
      },
      {
        title: 'Rewards & Outcomes',
        items: [
          'Victory: Kill Linda and secure at least 3 dropped Clues to expose the truth to corporate headquarters.',
          'Campaign Reward: Survival grants the crew the "Employee of the Month" title - all members permanently increase one attribute of their choice by +1 (max +3).',
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-scenarios',
  standalone: true,
  imports: [],
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.scss',
})
export class ScenariosComponent {
  readonly scenarios = SCENARIOS;
}
