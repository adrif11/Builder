import { ArquivoDOCX } from '../arquivos/arquivo-docx';
import { EditorArquivo } from '../factories/editor-arquivo-factory';
import { Arquivo } from '../interfaces/arquivo-interface';

export class EditorDOCX extends EditorArquivo {
  criarArquivo(): Arquivo {
    return new ArquivoDOCX();
  }
}
