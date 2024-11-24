import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
