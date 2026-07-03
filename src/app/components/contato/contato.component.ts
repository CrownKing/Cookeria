import { Component } from '@angular/core';
import { SectionWaveComponent } from '../section-wave/section-wave.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [SectionWaveComponent],
  templateUrl: './contato.component.html',
})
export class ContatoComponent {
  readonly waveFill = '#efe2b2';
  readonly waveAccent = '#efe2b2';

  openContact(): void {
    window.location.href = 'mailto:contato@doceriax.com.br?subject=Pedido%20Doceria%20X';
  }
}
