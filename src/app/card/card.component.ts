import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  colSpan = 2
  authors;
  constructor(service: CardService){
    this.authors = service.getAuthors()
  }
}
