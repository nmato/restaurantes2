import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarRestaurantePage } from './../agregar-restaurante/agregar-restaurante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agregarRestaurante = AgregarRestaurantePage; //creem un element = a la pagina agregarRestaurante

  constructor(public navCtrl: NavController) {

  }

}
