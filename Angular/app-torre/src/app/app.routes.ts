import { GenomaComponent } from './pages/genoma/genoma.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
  { path: 'genoma', component: GenomaComponent },


];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
