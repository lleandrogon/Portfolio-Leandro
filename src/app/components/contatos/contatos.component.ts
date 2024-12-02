import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

  contatoForm: FormGroup = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mensagem: new FormControl(null, [Validators.required])
  });

  enviarWhatsapp() {
      const nome = this.contatoForm.value.nome;
      const email = this.contatoForm.value.email;
      const assunto = this.contatoForm.value.mensagem;

      const numeroWhatsapp = "5582988094715";
      const mensagemWhatsapp = `Nome: ${nome}\nEmail: ${email}\n\nMensagem: ${assunto}`;
      const codificacao = encodeURIComponent(mensagemWhatsapp);
      const link = `https://wa.me/${numeroWhatsapp}?text=${codificacao}`;

      window.open(link, '_blank');
  }

  enviarEmail() {
    const nome = this.contatoForm.value.nome;
    const email = this.contatoForm.value.email;
    const assunto = this.contatoForm.value.mensagem;

    const emailLink = `mailto:lleandrogon2004@gmail.com?subject=Contato pelo Portfólio&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${assunto}`;
    window.open(emailLink, '_blank');
  }
}