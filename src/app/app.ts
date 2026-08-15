import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Menucomponent } from './component/menucomponent/menucomponent';
import { AtletaComponent } from './component/atleta-component/atleta-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menucomponent, AtletaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto_crud');
}
