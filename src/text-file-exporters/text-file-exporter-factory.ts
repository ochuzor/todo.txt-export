import { TextFileExporter } from './text-file-exporter';
import { TodoTextFileWriter } from './todo-file-writers';
import { JsonTodoExporter } from '../string-format-exporters/json-todo.exporter';
import { StringTodoExporter } from '../string-format-exporters/string-todo.exporter';

export class TextFileExporterFactory {
    jsonExpoter(filePath: string): TextFileExporter {
        const fileWriter = new TodoTextFileWriter(filePath);
        const jsonExpoter = new JsonTodoExporter();
        return new TextFileExporter(fileWriter, jsonExpoter);
    }

    textFileExpoter(filePath: string): TextFileExporter {
        const fileWriter = new TodoTextFileWriter(filePath);
        const textExpoter = new StringTodoExporter();
        return new TextFileExporter(fileWriter, textExpoter);
    }
}
