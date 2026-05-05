import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie',
  standalone: true,
  templateUrl: './cookie.component.html',
})
export class CookieComponent {
  readonly flavorChips = [
    'Hummm!',
    'Croc!',
    'Yammm!',
    'Nham!',
    'Slurp!',
    'Crunch!',
    'Aaaah!',
    'Nhom!',
    'Doce!',
    'Quentinho!',
    'Hmm-hmm!',
    'Ummm!',
    'Croc croc!',
  ];

  openContact(): void {
    window.location.href = 'mailto:contato@doceriax.com.br?subject=Pedido%20Doceria%20X';
  }
}
