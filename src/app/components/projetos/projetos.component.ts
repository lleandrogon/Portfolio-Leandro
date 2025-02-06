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
      logo: 'https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-sound-icon-png-image_14028321.png',
      nome: 'FlowMusic',
      descricao: 'Página para uma loja de música com o objetivo da venda de instrumentos musicais, caixas de som e acessórios.',
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
      link: 'https://flow-music-blush.vercel.app/',
      github: 'https://github.com/lleandrogon/FlowMusic',
    },
    {
      logo: 'https://www.shareicon.net/data/2016/10/20/846390_letter_512x512.png',
      nome: 'Altitude-Grafica',
      descricao: 'Página para a empresa Altitude Gráfica de Maceió, com foco na venda de serviços, produtos gráficos e comunicação visual.',
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
      link: 'https://altitude-grafica.netlify.app/',
      github: 'https://github.com/lleandrogon/Altitude-Grafica'
    },
    {
      logo: 'https://images.vexels.com/media/users/3/142662/isolated/preview/147faa70f705783a00dc8d23d64afcb0-isotipo-de-origami-de-letra-f.png',
      nome: 'Fala-Facil',
      descricao: 'Pagina para uma escola de idiomas com o objetivo de convencer o visitante do site a se matricular para aprender um idioma novo.',
      tecnologias: [
        {
          icon: "devicon-vuejs-plain fs-3",
          nome: "Vue"
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
      link: "https://fala-facil-three.vercel.app/",
      github: "https://github.com/lleandrogon/Fala-Facil"
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