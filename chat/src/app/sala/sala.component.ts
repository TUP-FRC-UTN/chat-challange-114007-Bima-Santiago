import { Component } from '@angular/core';
import { UsuarioComponent } from "../usuario/usuario.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})

export class SalaComponent {
  mensajes: Mensaje[] = [];

  addMsg(value: Mensaje) {
    this.mensajes.push(value)
  }
}

interface Mensaje {
  user: string;
  contenido: string
}
