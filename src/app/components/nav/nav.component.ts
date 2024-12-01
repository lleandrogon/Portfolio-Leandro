import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RedesSociaisService } from '../../services/redes-sociais.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor (public globalService: RedesSociaisService) {}

  visivel: boolean = false;

  verMenu() {
    this.visivel = !this.visivel;
  }
}