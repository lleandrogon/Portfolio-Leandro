import { Component } from '@angular/core';
import { AvisoBackendComponent } from "../aviso-backend/aviso-backend.component";

@Component({
  selector: 'app-layout-aviso-backend',
  standalone: true,
  imports: [AvisoBackendComponent],
  templateUrl: './layout-aviso-backend.component.html',
  styleUrl: './layout-aviso-backend.component.css'
})
export class LayoutAvisoBackendComponent {

}
