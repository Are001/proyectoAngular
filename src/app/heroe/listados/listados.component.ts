import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'

})
export class ListadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  idiomas: string[ ]= ['italiano','japones','ingles','frances'];
  idiomaBorrado: string ="";

  borrarIdioma(){
   this.idiomaBorrado= this.idiomas.shift()||'';
   
  }

}
