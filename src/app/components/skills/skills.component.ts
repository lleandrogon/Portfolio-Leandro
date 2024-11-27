import { Component } from '@angular/core';
import { Tecnologia } from '../../models/tecnologia';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  tecnologias: Tecnologia[] = [
    {
      icon: "devicon-angularjs-plain fs-5",
      nome: "Angular"
    },
    {
      icon: "devicon-typescript-plain",
      nome: "TypeScript"
    },
    {
      icon: "devicon-javascript-plain",
      nome: "JavaScript"
    },
    {
      icon: "devicon-php-plain fs-3",
      nome: "PHP"
    },
    {
      icon: "devicon-bootstrap-plain fs-4",
      nome: "Bootstrap"
    },
    {
      icon: "devicon-css3-plain fs-6",
      nome: "CSS"
    },
    {
      icon: "devicon-html5-plain fs-6",
      nome: "HTML5"
    },
    {
      icon: "devicon-git-plain fs-5",
      nome: "Git"
    },
  ]
}