import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
 ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
