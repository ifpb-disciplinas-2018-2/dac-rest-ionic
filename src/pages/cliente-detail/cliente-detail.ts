import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';

@IonicPage()
@Component({
  selector: 'page-cliente-detail',
  templateUrl: 'cliente-detail.html',
})
export class ClienteDetailPage {
  cliente: Cliente;
  private id:number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ClientesProvider) {

    this.id = this.navParams.get("id");
    this.cliente = new Cliente()
    if (this.id) {
      this.service.clientePorId(this.id)
        .then(
          (dados) => {
            this.cliente.id = dados["id"]
            this.cliente.foto = dados["foto"]
            this.cliente.nome = dados["nome"]
            this.cliente.sexo = dados["sexo"]
          }
        );
    }

  }

  ionViewDidLoad() {

  }

}
