import { Component } from '@angular/core';
import { Projeto } from '../../models/projeto';
import { Tecnologia } from '../../models/tecnologia';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projetos: Projeto[] = [
    {
      logo: 'https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png',
      nome: 'PowerFit',
      descricao: 'Sistema para uma academia com planos, formulários, servindo tanto pra equipe administrativa quanto pro cliente.',
      tecnologias: [
        {
          icon: "devicon-angularjs-plain fs-4",
          nome: "Angular"
        },
        {
          icon: "devicon-typescript-plain fs-4",
          nome: "TypeScript"
        },
        {
          icon: "devicon-bootstrap-plain fs-3",
          nome: "Bootstrap"
        },
        {
          icon: "devicon-css3-plain fs-4",
          nome: "CSS"
        },
        {
          icon: "devicon-html5-plain fs-4",
          nome: "HTML"
        },
      ],
      link: 'https://power-fit-kohl.vercel.app/',
      github: 'https://github.com/lleandrogon/PowerFit'
    },
    {
      logo: 'https://cdn-icons-png.flaticon.com/512/8298/8298837.png',
      nome: 'Dentista',
      descricao: 'Site para uma clínica odontológica para o oferecimento de serviços com navegação interativa e agendamento de consultas.',
      tecnologias: [
        {
          icon: "devicon-jquery-plain fs-4",
          nome: "JQuery"
        },
        {
          icon: "devicon-javascript-plain fs-4",
          nome: "JavaScript"
        },
        {
          icon: "devicon-bootstrap-plain fs-3",
          nome: "Bootstrap"
        },
        {
          icon: "devicon-css3-plain fs-4",
          nome: "CSS"
        },
        {
          icon: "devicon-html5-plain fs-4",
          nome: "HTML"
        },
      ],
      link: 'https://lleandrogon.github.io/dentista/',
      github: 'https://github.com/lleandrogon/dentista'
    },
    {
      logo: 'https://logodix.com/logo/374972.png',
      nome: 'JavaScript Quiz',
      descricao: 'Quiz para testar conhecimentos em JavaScript, implementando um sistema que exibe ao fim uma pontuação de 0 a 10.',
      tecnologias: [
        {
          icon: "devicon-javascript-plain fs-4",
          nome: "JavaScript"
        },
        {
          icon: "devicon-css3-plain fs-4",
          nome: "CSS"
        },
        {
          icon: "devicon-html5-plain fs-4",
          nome: "HTML"
        },
      ],
      link: 'https://lleandrogon.github.io/quiz/',
      github: 'https://github.com/lleandrogon/quiz'
    },
    {
      logo: 'https://cdn-icons-png.flaticon.com/512/5988/5988705.png',
      nome: 'Currículo Dev',
      descricao: 'Site com validação para entrega de currículos de profissionais de tecnologia, sendo separado em áreas com vários campos.',
      tecnologias: [
        {
          icon: "devicon-bootstrap-plain fs-3",
          nome: "Bootstrap"
        },
        {
          icon: "devicon-javascript-plain fs-4",
          nome: "JavaScript"
        },
        {
          icon: "devicon-css3-plain fs-4",
          nome: "CSS"
        },
        {
          icon: "devicon-html5-plain fs-4",
          nome: "HTML"
        },
      ],
      link: 'https://lleandrogon.github.io/curriculo-dev/',
      github: 'https://github.com/lleandrogon/curriculo-dev'
    }
  ]
}