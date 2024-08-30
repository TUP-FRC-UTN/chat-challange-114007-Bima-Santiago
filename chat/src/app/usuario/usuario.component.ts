import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() nombre: string = '';
  @Input() mensajes: Mensaje[] = [];

  @Output() mensaje = new EventEmitter<Mensaje>();
  contenido:string = '';


  sendMessage() {
    this.mensaje.emit({
      user: this.nombre,
      contenido: this.contenido
    });

    this.contenido = '';
  }
}


interface Mensaje {
  user: string;
  contenido: string
}
