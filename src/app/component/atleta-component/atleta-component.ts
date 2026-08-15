import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../service/clientes-service/clientes-service';
import { Clientes } from '../../modelos/clientes/clientes';

@Component({
  selector: 'app-atleta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css'
})
export class AtletaComponent {
  nome: string = '';
  cpf: number | string = '';
  sexo: string = '';
  cep: string = '';
  ruaLogradouro: string = '';
  bairro: string = '';
  cidade: string = '';

  constructor(public clienteService: ClientesService) {}

  salvar() {
    const novoAtleta: Clientes = {
      nome: this.nome,
      cpf: Number(this.cpf),
      sexo: this.sexo,
      cep: this.cep,
      ruaLogradouro: this.ruaLogradouro, // <-- Faltava incluir esta linha aqui!
      cidade: this.cidade,
      bairro: this.bairro
    };

    this.clienteService.adicionar(novoAtleta);
    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.cpf = '';
    this.sexo = '';
    this.cep = '';
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
  }
}

