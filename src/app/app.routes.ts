import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./sections/hook/hook.component').then((module) => module.HookComponent) },
  {
    path: 'crew',
    loadComponent: () => import('./sections/crew/crew.component').then((module) => module.CrewComponent),
  },
  {
    path: 'bestiary',
    loadComponent: () => import('./sections/beastiary/beastiary.component').then((module) => module.BeastiaryComponent),
  },
  {
    path: 'omens',
    loadComponent: () => import('./sections/omens/omens.component').then((module) => module.OmensComponent),
  },
  {
    path: 'clues',
    loadComponent: () => import('./sections/clues/clues.component').then((module) => module.CluesComponent),
  },
  {
    path: 'scenarios',
    loadComponent: () => import('./sections/scenarios/scenarios.component').then((module) => module.ScenariosComponent),
  },
];
