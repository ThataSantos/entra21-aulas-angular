import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
links !: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.links=new Array();
    this.links.push({
      rota:"vaiPagina",
      textContent:"Página",
      cor:"far fa-circle nav-icon text-success",
      hexa: "text-success"
    })
    this.links.push({
      rota:"outro",
      textContent:"Outro",
      cor:"far fa-circle nav-icon text-danger",
      hexa: "text-danger"
    })
    this.links.push({
      rota:"property",
      textContent:"Property",
      cor:"far fa-circle nav-icon text-primary",
      hexa: "text-primary"
    })
    this.links.push({
      rota:"event",
      textContent:"Event",
      cor:"far fa-circle nav-icon text-pink",
      hexa: "text-pink"
    })
    this.links.push({
      rota:"mao-dupla",
      textContent:"mao-dupla",
      cor:"far fa-circle nav-icon text-success",
      hexa: "text-success"
    })
    this.links.push({
      rota:["receber","Thabata",29,"Floripa" ],
      textContent:"Receber",
      cor:"far fa-circle nav-icon text-danger",
      hexa: "text-danger"
    })
    this.links.push({
      rota:"enviar",
      textContent:"Enviar",
      cor:"far fa-circle nav-icon text-primary",
      hexa: "text-primary"
    })
    this.links.push({
      rota:"diretivaIf",
      textContent:"Diretiva If",
      cor:"far fa-circle nav-icon text-pink",
      hexa: "text-pink"
    })
    this.links.push({
      rota:"consumindoApi",
      textContent:"Consumindo Api",
      cor:"far fa-circle nav-icon text-success",
      hexa: "text-success"
    })






  }
}
