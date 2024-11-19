
import { PrimerapageComponent } from './paginas/primerapage/primerapage.component';
import { SegundapageComponent } from './paginas/segundapage/segundapage.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: '1', component: PrimerapageComponent },
    {path: '2', component: SegundapageComponent }
];
