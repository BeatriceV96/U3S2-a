import { Component } from '@angular/core';
import { Keyboard } from '../../Models/keyboard';
import { KeyboardService } from '../../keyboard.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {


  posts:Keyboard[] = [] //qui va richiamato lo stesso nome del service di array
  //qUI il prof lo aveva chiamato iPost

  constructor(private keyboardSvc:KeyboardService){}  //e qui richiami il nome della classe del service

  ngOnInit(){   //qui diro' all'ngOnInit "prendi da KeyboardService gli elementi, e li porti qua"

    this.posts = this.keyboardSvc.keyboardArr
  }


}
//qui ho copiato quello che ho fatto nella home.ts  cossiche' le due pagine si mostrino allo stesso identico modo//
