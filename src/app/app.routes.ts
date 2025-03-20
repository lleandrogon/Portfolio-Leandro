import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutAvisoBackendComponent } from './components/layout-aviso-backend/layout-aviso-backend.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent
    },
    {
        path: "aviso",
        component: LayoutAvisoBackendComponent
    }
];
