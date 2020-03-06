import { ITodoExporter, ITodoDoc } from './index.types';

export class JsonTodoExporter implements ITodoExporter<String> {
    export(lsTodos: ITodoDoc[]): String {
        return JSON.stringify(lsTodos);
    }
}
