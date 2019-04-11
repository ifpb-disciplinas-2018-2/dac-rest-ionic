import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  api = "http://localhost:8080/dac-webservice/api/clientes";
  constructor(public navCtrl: NavController) {

  }

}
