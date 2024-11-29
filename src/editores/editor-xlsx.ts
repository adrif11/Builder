import { ArquivoXLSX } from '../arquivos/arquivo-xlsx';
import { EditorArquivo } from '../factories/editor-arquivo-factory';
import { Arquivo } from '../interfaces/arquivo-interface';

export class EditorXLSX extends EditorArquivo {
  criarArquivo(): Arquivo {
    return new ArquivoXLSX();
  }
}
