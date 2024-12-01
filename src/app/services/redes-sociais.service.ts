import { Injectable } from '@angular/core';
import { RedeSocial } from '../models/redesSociais';

@Injectable({
  providedIn: 'root'
})
export class RedesSociaisService {
  public redesSociais: RedeSocial[] = [
    {
      nome: "Linkedin",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0/"
    },
    {
      nome: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/lleandrogon"
    },
    {
      nome: "Whatsapp",
      icon: "fa-brands fa-whatsapp",
      link: "https://wa.me/5582988094715"
    }
  ]
}