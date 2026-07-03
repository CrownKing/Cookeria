import { Component } from '@angular/core';
import { SectionWaveComponent } from '../section-wave/section-wave.component';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [SectionWaveComponent],
  templateUrl: './cookie.component.html',
})
export class CookieComponent {
  readonly waveFill = '#efe2b2';
  readonly waveAccent = '#efe2b2';

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
