import { Component } from '@angular/core';
import { Keyboard } from '../../Models/keyboard';
import { KeyboardService } from '../../keyboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  posts:Keyboard[] = [] //qui va richiamato lo stesso nome del service di array
  //qUI il prof lo aveva chiamato iPost

  constructor(private keyboardSvc:KeyboardService){}  //e qui richiami il nome della classe del service

  ngOnInit(){   //qui diro' all'ngOnInit "prendi da KeyboardService gli elementi, e li porti qua"

    this.posts = this.keyboardSvc.keyboardArr //io qui NON STO ASSEGNANDO UNA COPIA
    //ma cio' significa che se viene modificato qui "posts", viene modificato anche quello
    //del services
  }
//CHI E' CHE DETIENE REALMENTE IL POST?? CHI HA IL BOTTONE CHE PUO' ATTIVARTE E DISATTIVARE
//IL POST? IN QUESTO CASO IL COMPONENTE APP-SINGLE-KEYBOARD, ed e' li' che andro' a fare
//le mie operazioni, da li quindi modificabile e manipolabile
}
