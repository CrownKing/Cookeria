import { Component } from '@angular/core';
import { SectionWaveComponent } from '../section-wave/section-wave.component';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [SectionWaveComponent],
  templateUrl: './estudos.component.html',
})
export class EstudosComponent {
  readonly waveFill = 'rgba(255, 213, 201, 0.85)';
  readonly waveAccent = '#ffe8dc';
}
