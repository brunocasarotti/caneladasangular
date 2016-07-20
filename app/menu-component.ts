import {Component} from 'angular2/core';

@Component({
    selector: 'menu-app',
    templateUrl: 'html/menu.html'
})
export class MenuComponent{
    public listar():void{
        console.log('teste');
           
    }
}