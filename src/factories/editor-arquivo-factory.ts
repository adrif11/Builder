import { Arquivo } from '../interfaces/arquivo-interface';

export abstract class EditorArquivo {
  abstract criarArquivo(): Arquivo;

  gerenciarArquivo() {
    const arquivo = this.criarArquivo();
    return arquivo;
  }
}
