import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-agregar-restaurante',
  templateUrl: 'agregar-restaurante.html',
})
export class AgregarRestaurantePage {
  
  ubicacion = {
    lat: 0,
    lng: 0
  }

  ubicacionLista = false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public geo: Geolocation, 
              public toasCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarRestaurantePage');
  }

  localizar(){
      this.geo.getCurrentPosition({timeout: 6000})
      .then(info => {
      this.ubicacion.lat = info.coords.latitude;
      this.ubicacion.lng = info.coords.longitude;
      this.ubicacionLista = true;
      })
      .catch(error =>{
        let toast = this.toasCtrl.create({
          message: 'No se encuentra la ubicación',
          duration: 2000
        })
        toast.present();
      })
    }
}
