import { Component, Input } from '@angular/core';
import { Keyboard } from '../../Models/keyboard';

@Component({
  selector: 'app-single-keyboard',
  templateUrl: './single-keyboard.component.html',
  styleUrl: './single-keyboard.component.scss'
})
export class SingleKeyboardComponent {

  //preparo una proprieta' nel componente che sia pronda ad ospitare un singolo post
  @Input() post!:Keyboard

  toggleStatus() {
   //toggleStatus dice "agganciati a questo post che e' arrivato dall'esterno e, prendi
   //il suo status e ne inverti il valore. Come? dicendo che available il contrario
   //dell'attuale avalable, dell'attuale post e lo traduco cosi:

      this.post.available = !this.post.available;
  }
}  //ora posso cambiare il suo status da attivo a non attivo
  //QUESTO ACCADE CON I BOTTONI E SI FA COSI
  //per attivarlo:
  // - PRIMA COSA: andiamo in app.module.ts e si attiva "formsModule" - fondamentale per il two-way {negli imports, dopo NGModule}.
  // - SECONDA COSA: visto che abbiamo gia' post dichiarato sopra, e' gia' fatta, dobbiamo solo
  //andare nel suo html di single-keyboard.html
