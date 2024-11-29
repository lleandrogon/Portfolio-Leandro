import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { SobreMimComponent } from "../sobre-mim/sobre-mim.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { ContatosComponent } from "../contatos/contatos.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent, SobreMimComponent, SkillsComponent, ProjetosComponent, ContatosComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
