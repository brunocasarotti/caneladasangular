import {Component} from 'angular2/core';
 
@Component({
    selector: 'filiados-listar',
    templateUrl: 'html/lista_filiados.html',
    providers: [ClienteService]
})

export class ListaFiliados {
    constructor(private clienteService: ClienteService) {}
 
    clientes:Cliente[];
 
    listar() {
        this.clientes = this.clienteService.listar();
    }
}