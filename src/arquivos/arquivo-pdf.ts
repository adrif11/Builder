import { Arquivo } from '../interfaces/arquivo-interface';

export class ArquivoPDF implements Arquivo {
  abrir(): void {
    console.log('Abrindo arquivo PDF');
  }

  salvar(): void {
    console.log('Salvando arquivo PDF');
  }
}
