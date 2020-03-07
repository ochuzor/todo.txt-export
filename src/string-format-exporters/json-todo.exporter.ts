import { ITodoExporter, ITodoDoc } from '../index.types';

export class JsonTodoExporter implements ITodoExporter<string> {
    export(lsTodos: ITodoDoc[]): string {
        return JSON.stringify(lsTodos);
    }
}
