export type CrewMemberId = 'mike' | 'sam' | 'dana' | 'chris' | 'betty';

export type CrewModifier = `+${number}` | `-${number}`;

export interface CrewStats {
  STR: CrewModifier;
  AGI: CrewModifier;
  PRE: CrewModifier;
  TOU: CrewModifier;
}

export type CrewStat = [name: string, description: string];

export interface CrewMember {
  num: string;
  kicker: string;
  name: string;
  blurb: string;
  stats: CrewStats;
  derived: CrewStat[];
  gear: string[];
  feats: CrewStat[];
  flaws: CrewStat[];
  special?: CrewStat[];
  quote: string;
}

export type Crew = Record<CrewMemberId, CrewMember>;

export type CrewBlurbs = Record<CrewMemberId, string>;
