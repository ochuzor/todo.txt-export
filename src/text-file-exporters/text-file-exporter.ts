import { ITodoExporter, ITodoDoc } from '../index.types';
import {ITodoFileWriter} from './todo-file-writers';

export class TextFileExporter implements ITodoExporter<void> {
    constructor(private fileWriter: ITodoFileWriter, private stringExporter: ITodoExporter<string>) {}

    export(lsTodos: ITodoDoc[]): void {
        const text = this.stringExporter.export(lsTodos);
        this.fileWriter.write(text);
    }
}
