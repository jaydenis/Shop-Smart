export interface ScenarioSection {
  title: string;
  items: string[];
}

export interface Scenario {
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  sections: ScenarioSection[];
  finale?: boolean;
}
