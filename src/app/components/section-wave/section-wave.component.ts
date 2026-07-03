import { Component, input } from '@angular/core';
import { WAVE_DIVIDER_PATH, WAVE_VIEWBOX } from './wave-paths';

@Component({
  selector: 'app-section-wave',
  standalone: true,
  templateUrl: './section-wave.component.html',
  styleUrl: './section-wave.component.scss',
})
export class SectionWaveComponent {
  /** Cor da seção de cima — preenche a onda que invade a seção abaixo */
  fill = input<string>('#806441');
  /** Camada de sombra logo abaixo da onda principal */
  accent = input<string | null>(null);
  /** Variante visual (espelhamento/escala) para alternar entre seções */
  variant = input<number>(1);

  readonly wavePath = WAVE_DIVIDER_PATH;
  readonly waveViewBox = WAVE_VIEWBOX;
}
