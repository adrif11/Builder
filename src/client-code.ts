import { EditorDOCX } from './editores/editor-docx';
import { EditorPDF } from './editores/editor-pdf';
import { EditorTXT } from './editores/editor-txt';
import { EditorXLSX } from './editores/editor-xlsx';

const editorPDF = new EditorPDF();
const pdf = editorPDF.gerenciarArquivo();

pdf.abrir();
pdf.salvar();
console.log('---');

const editorDOCX = new EditorDOCX();
const docx = editorDOCX.gerenciarArquivo();

docx.abrir();
docx.salvar();
console.log('---');

const editorXLSX = new EditorXLSX();
const xlsx = editorXLSX.gerenciarArquivo();

xlsx.abrir();
xlsx.salvar();
console.log('---');

const editorTXT = new EditorTXT();
const txt = editorTXT.gerenciarArquivo();

txt.abrir();
txt.salvar();
