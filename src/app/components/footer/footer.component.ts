import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  github: string = "https://br.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F";
}
