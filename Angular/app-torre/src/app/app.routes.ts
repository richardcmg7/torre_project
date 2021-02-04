import { SearchComponent } from './pages/search/search.component';


import { GenomaComponent } from './pages/genoma/genoma.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
  { path: 'genoma', component: GenomaComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
