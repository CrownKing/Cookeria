import { Component, OnInit } from '@angular/core';

type BackgroundMark = {
  x: number;
  y: number;
  w: number;
  h: number;
};

@Component({
  selector: 'app-rodape',
  standalone: true,
  templateUrl: './rodape.component.html',
})
export class RodapeComponent implements OnInit {
  readonly year = new Date().getFullYear();
  ovals: BackgroundMark[] = [];

  ngOnInit(): void {
    // Tamanho dos ovais do rodapé (em px): todos iguais.
    this.ovals = this.generateMarks(4, 8, 20, 44);
  }

  private generateMarks(
    marksPerQuadrant: number,
    minGapPercent: number,
    ovalWidth: number,
    ovalHeight: number,
  ): BackgroundMark[] {
    const quadrants = [
      { minX: 0, maxX: 50, minY: 0, maxY: 50 },
      { minX: 50, maxX: 100, minY: 0, maxY: 50 },
      { minX: 0, maxX: 50, minY: 50, maxY: 100 },
      { minX: 50, maxX: 100, minY: 50, maxY: 100 },
    ];

    const all: BackgroundMark[] = [];
    for (const quadrant of quadrants) {
      const quadrantMarks: BackgroundMark[] = [];
      let attempts = 0;
      while (quadrantMarks.length < marksPerQuadrant && attempts < 1200) {
        attempts += 1;
        const candidate: BackgroundMark = {
          x: this.randomBetween(quadrant.minX + 4, quadrant.maxX - 4),
          y: this.randomBetween(quadrant.minY + 8, quadrant.maxY - 8),
          // Formato oval idêntico: mesma largura/altura para todos os elementos.
          w: ovalWidth,
          h: ovalHeight,
        };

        if (this.isInsideTextArea(candidate.x, candidate.y)) {
          continue;
        }

        const hasRoom = quadrantMarks.every((mark) => {
          const dx = candidate.x - mark.x;
          const dy = candidate.y - mark.y;
          return Math.hypot(dx, dy) >= minGapPercent;
        });

        if (hasRoom) {
          quadrantMarks.push(candidate);
        }
      }
      all.push(...quadrantMarks);
    }
    return all;
  }

  private randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private isInsideTextArea(x: number, y: number): boolean {
    // Evita gerar ovais na região central onde ficam os textos do rodapé.
    return x >= 12 && x <= 88 && y >= 12 && y <= 90;
  }
}
