import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { Curso } from './curso'
@Injectable()
export class DataserviceService {
  getProfessor() {
    return [
     new Professor(1, 1, 'Augusto' ),
     new Professor(2, 1, 'Roberto' ),
     new Professor(3, 1, 'Neusa' )
    ];
  }
   getCurso() {
   return [
     new Curso(1, 1, 'Inglês' ),
     new Curso(2, 1, 'Japonês' ),
     new Curso(3, 1, 'Espanhol')
    ];
  }
  constructor() { }
}
