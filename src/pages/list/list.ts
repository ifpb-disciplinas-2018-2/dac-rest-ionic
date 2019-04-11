import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private clientes: Cliente[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ClientesProvider) {

    // this.service.todosOsClientes()
    //   .then((dados:Cliente[])=>{
    //     this.clientes = dados;
    //     // console.log(dados)
    //   });
  }

  ionViewDidEnter() {
    this.service.todosOsClientes()
      .then((dados: Cliente[]) => {
        this.clientes = dados;
        // console.log(dados)
      });
  }
  irParaCliente(id: number) {
    this.navCtrl.push('ClienteDetailPage', { id: id })
  }

  novoCliente() {
    this.navCtrl.push('ClienteEditPage')
  }

  remover(cliente:Cliente){
    this.service.removerClientePorId(cliente.id)
      .then((dados: any) => {
        let index = this.clientes.findIndex(c=>c.id===cliente.id);
        this.clientes.splice(index, 1);
      });
  }
  editarCliente(cliente:Cliente){
    this.navCtrl.push('ClienteEditPage', {cliente:cliente})
  }

}
