import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000,
    id: uuid()
  }, {
    name: 'Goku',
    power: 9500,
    id: uuid()
  }, {
    name: "Vegeta",
    power: 7500,
    id: uuid()
  }];

  addCharacter(character: Character): void {
    console.log('Adding', character);
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    console.log('Deleting', id);
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
