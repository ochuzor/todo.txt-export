import { ITodoExporter, ITodoDoc } from '../index.types';

export class StringTodoExporter implements ITodoExporter<string> {
    export(lsTodos: ITodoDoc[]): string {
        return lsTodos.map(todo => todo.text).join('\n');
    }
}
