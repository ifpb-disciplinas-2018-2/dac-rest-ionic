import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';


@IonicPage()
@Component({
  selector: 'page-cliente-edit',
  templateUrl: 'cliente-edit.html',
})
export class ClienteEditPage {

  private cliente: Cliente;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ClientesProvider) {
    if (this.navParams.get("cliente"))
      this.cliente = this.navParams.get("cliente");
    else {
      this.cliente = new Cliente();
    }
  }

  cancelar() {
    this.navCtrl.pop();
  }

  salvar() {
    if (this.cliente.id) {
      this.service.atualizarClienteComId(this.cliente);
    } else {
      this.service.salvarCliente(this.cliente);
    }
    this.navCtrl.pop();
  }

}
