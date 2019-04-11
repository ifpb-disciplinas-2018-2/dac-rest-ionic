import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente';

@Injectable()
export class ClientesProvider {
  
  

  private API_URL="http://localhost:8080/dac-webservice/api/clientes/";
  private data:any;

  
  constructor(public http: Http) {
  }

  todosOsClientes(){
    return new Promise( resolve =>{
      this.http.get(this.API_URL).
        subscribe( result =>{
            this.data = result.json();
            resolve(this.data);
        })

    });
  }
  clientePorId(id: number){
    return new Promise( resolve =>{
      this.http.get(this.API_URL+id).
        subscribe( result =>{
            this.data = result.json();
            // console.log(this.data)
            resolve(this.data);
        })

    });
  }
  salvarCliente(cliente: Cliente){
    return new Promise( resolve =>{
      this.http.post(this.API_URL,cliente).
        subscribe( result =>{
            this.data = result.json();
            // console.log(this.data)
            resolve(this.data);
        })

    });
  }
  removerClientePorId(id: number){
    return new Promise( resolve =>{
      this.http.delete(this.API_URL+id).
        subscribe( result =>{
            this.data = result.json();
            resolve(this.data);
        })

    });
  }
  atualizarClienteComId(cliente: Cliente) {
    return new Promise( resolve =>{
      this.http.put(this.API_URL+cliente.id, cliente).
        subscribe( result =>{
            this.data = result.json();
            resolve(this.data);
        })

    });
  }
  
}
