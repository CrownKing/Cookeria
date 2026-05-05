import { Component, OnInit } from '@angular/core';

type BackgroundMark = {
  x: number;
  y: number;
  w: number;
  h: number;
};

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  marks: BackgroundMark[] = [];

  ngOnInit(): void {
    // Tamanho das bolinhas do hero (em px): min e max.
    this.marks = this.generateMarks(6, 7, [12, 24]);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private generateMarks(
    marksPerQuadrant: number,
    minGapPercent: number,
    widthRange: [number, number],
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
        const size = this.randomBetween(widthRange[0], widthRange[1]);
        const candidate: BackgroundMark = {
          x: this.randomBetween(quadrant.minX + 4, quadrant.maxX - 4),
          y: this.randomBetween(quadrant.minY + 6, quadrant.maxY - 6),
          // Formato da bolinha: largura = altura para garantir círculo perfeito.
          w: size,
          h: size,
        };

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
}

