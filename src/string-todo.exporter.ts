import { ITodoExporter, ITodoDoc } from './index.types';

export class StringTodoExporter implements ITodoExporter<String> {
    export(lsTodos: ITodoDoc[]): String {
        return lsTodos.map(todo => todo.text).join('\n');
    }
}
