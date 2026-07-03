import { Component } from '@angular/core';
import { SectionWaveComponent } from '../section-wave/section-wave.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [SectionWaveComponent],
  templateUrl: './sobre.component.html',
})
export class SobreComponent {
  readonly waveFill = '#BD8C61';
  readonly waveAccent = '#BD8C61';
}
