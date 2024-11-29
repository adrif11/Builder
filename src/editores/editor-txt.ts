import { ArquivoTXT } from '../arquivos/arquivo-txt';
import { EditorArquivo } from '../factories/editor-arquivo-factory';
import { Arquivo } from '../interfaces/arquivo-interface';

export class EditorTXT extends EditorArquivo {
  criarArquivo(): Arquivo {
    return new ArquivoTXT();
  }
}
