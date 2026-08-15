import { Injectable } from '@angular/core';
import { Clientes } from '../../modelos/clientes/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  // Alterado para public para permitir acesso direto na interface do Angular
  public clientes: Clientes[] = [];

  adicionar(cliente: Clientes) {
    cliente.id = this.clientes.length + 1;
    this.clientes.push(cliente);
  }

  Listar() {
    console.table(this.clientes);
    return this.clientes;
  }

  Remover(id: number) {
    // Compara o ID do item com o ID passado por parâmetro
    this.clientes = this.clientes.filter((elem) => elem.id !== id);
  }

  Alterar(cliente: Clientes) {
    // Busca a posição do item que possui o mesmo ID
    let pos = this.clientes.findIndex((elem) => elem.id === cliente.id);
    
    if (pos !== -1) {
      this.clientes[pos] = cliente;
    }
  }
}

