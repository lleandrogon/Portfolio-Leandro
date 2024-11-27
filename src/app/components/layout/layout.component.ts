import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { SobreMimComponent } from "../sobre-mim/sobre-mim.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent, SobreMimComponent, SkillsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
