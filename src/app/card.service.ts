import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 getAuthors(){
  return ["Author1", "Author2", "Author3"];
 }
 
}
