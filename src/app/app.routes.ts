import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'knotless-braids-battersea',
    loadComponent: () =>
      import('./pages/knotless-braids-battersea/knotless-braids-battersea.page').then(
        (m) => m.KnotlessBraidsBatterseaPage,
      ),
  },
  {
    path: 'kids-braids-clapham',
    loadComponent: () =>
      import('./pages/kids-braids-clapham/kids-braids-clapham.page').then(
        (m) => m.KidsBraidsClaphamPage,
      ),
  },
  {
    path: 'cornrows-south-west-london',
    loadComponent: () =>
      import('./pages/cornrows-south-west-london/cornrows-south-west-london.page').then(
        (m) => m.CornrowsSouthWestLondonPage,
      ),
  },
];
