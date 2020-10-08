import { DataserviceService } from './dataservice.service';
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { Professor } from './professor';
import { Curso } from './curso';
@Component({
  selector: 'minha-lista-professor',
  templateUrl : './app.component.html',
  providers : [DataserviceService]
})
export class AppComponent {
   professor : Professor[];
   curso : Curso[];
   constructor(private _dataService: DataserviceService) {
     this.professor = this._dataService.getProfessor();
   }
}