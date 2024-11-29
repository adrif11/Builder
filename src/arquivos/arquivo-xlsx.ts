import { Arquivo } from '../interfaces/arquivo-interface';

export class ArquivoXLSX implements Arquivo {
  abrir(): void {
    console.log('Abrindo arquivo XLSX');
  }

  salvar(): void {
    console.log('Salvando arquivo XLSX');
  }
}
