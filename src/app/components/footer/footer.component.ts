import { Component, inject } from '@angular/core';
import { RedesSociaisService } from '../../services/redes-sociais.service';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public globalService: RedesSociaisService) { }

  currentYear: number = new Date().getFullYear();
  github: string = "https://br.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F";

  contatos: Contato[] = [
    {
      nome: "Telefone",
      icon: "fa-solid fa-phone",
      identificacao: "+55 82 98809-4715"
    },
    {
      nome: "Endereço",
      icon: "fa-solid fa-house",
      identificacao: "Maceió - Alagoas - Brasil"
    },
    {
      nome: "Email",
      icon: "fa-solid fa-envelope",
      identificacao: "lleandrogon2004@gmail.com"
    },
  ]
}
