import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from '../heroe.component';
import { ListadosComponent } from "../listados/listados.component";

//para usar el dedorador
@NgModule({
    //las declaraciones especifican los componentes del modulo
    declarations:[
        HeroeComponent,
        ListadosComponent
    ],
    //Exports las cosas que van hacer visibles
    exports:[
        ListadosComponent
    ],
    //imports son modulos
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}