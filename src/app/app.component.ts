import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EstudosComponent } from './components/estudos/estudos.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { ContatoComponent } from './components/contato/contato.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SobreComponent,
    EstudosComponent,
    CookieComponent,
    ContatoComponent,
    RodapeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
