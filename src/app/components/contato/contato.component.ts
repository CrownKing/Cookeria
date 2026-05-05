import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
})
export class ContatoComponent {
  openContact(): void {
    window.location.href = 'mailto:contato@doceriax.com.br?subject=Pedido%20Doceria%20X';
  }
}
