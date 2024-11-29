import { ArquivoPDF } from '../arquivos/arquivo-pdf';
import { EditorArquivo } from '../factories/editor-arquivo-factory';
import { Arquivo } from '../interfaces/arquivo-interface';

export class EditorPDF extends EditorArquivo {
  criarArquivo(): Arquivo {
    return new ArquivoPDF();
  }
}
