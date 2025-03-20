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
      icon: "fa-brands fa-laravel fs-2",
      nome: "Laravel"
    },
    {
      icon: "devicon-php-plain fs-1",
      nome: "PHP"
    },
    {
      icon: "devicon-mysql-plain fs-3",
      nome: "MySQL"
    },
    {
      icon: "devicon-angularjs-plain fs-3",
      nome: "Angular"
    },
    {
      icon: "devicon-typescript-plain",
      nome: "TypeScript"
    },
    {
      icon: "devicon-vuejs-plain fs-3",
      nome: "Vue"
    },
    {
      icon: "devicon-jquery-plain",
      nome: "JQuery"
    },
    {
      icon: "devicon-javascript-plain",
      nome: "JavaScript"
    },
    {
      icon: "devicon-bootstrap-plain fs-2",
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
    {
      icon: "devicon-git-plain fs-3",
      nome: "Git"
    },
  ]
}